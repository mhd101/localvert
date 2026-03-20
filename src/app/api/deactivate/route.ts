export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { corsJson, corsOptions } from "@/lib/cors";
import { decodeToken } from "@/lib/jwt";

function getDodoApiKey() {
  const apiKey = process.env.DODO_API_KEY;

  if (!apiKey) {
    throw new Error("DODO_API_KEY is not configured");
  }

  return apiKey;
}

async function readJson(response: Response) {
  return response.json().catch(() => null);
}

export async function OPTIONS() {
  return corsOptions();
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return corsJson({ error: "TOKEN_REQUIRED" }, 400);
    }

    const payload = decodeToken(token);
    const licenseKey = payload.licenseKey;
    const licenseKeyInstanceId = payload.id;

    if (!licenseKey || !licenseKeyInstanceId) {
      return corsJson({ error: "INVALID_OR_EXPIRED" }, 401);
    }

    const deactRes = await fetch("https://live.dodopayments.com/licenses/deactivate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getDodoApiKey()}`,
      },
      body: JSON.stringify({
        license_key: licenseKey,
        license_key_instance_id: licenseKeyInstanceId,
      }),
      cache: "no-store",
    });

    if (deactRes.ok) {
      return corsJson({ deleted: true, success: true });
    }

    const deactData = await readJson(deactRes);
    return corsJson(
      { error: deactData?.message || "Deactivation failed" },
      deactRes.status || 401,
    );
  } catch (error) {
    const message =
      error instanceof Error && error.message === "DODO_API_KEY is not configured"
        ? error.message
        : "Deactivation failed";

    return corsJson({ error: message }, 500);
  }
}

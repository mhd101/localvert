export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { corsJson, corsOptions } from "@/lib/cors";
import { decodeToken, signToken } from "@/lib/jwt";

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

    const valRes = await fetch("https://live.dodopayments.com/licenses/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getDodoApiKey()}`,
      },
      body: JSON.stringify({
        license_key: payload.licenseKey,
      }),
      cache: "no-store",
    });

    const valData = await readJson(valRes);

    if (!valRes.ok || !valData?.valid) {
      return corsJson({ error: "LICENSE_INVALID" }, 401);
    }

    return corsJson({
      token: signToken(payload),
      valid: true,
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message === "DODO_API_KEY is not configured"
        ? error.message
        : "REFRESH_FAILED";

    return corsJson({ error: message }, 401);
  }
}

export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { corsJson, corsOptions } from "@/lib/cors";
import { LicensePayload, signToken } from "@/lib/jwt";

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
    const { licenseKey, deviceId, name } = await req.json();

    if (!licenseKey || !deviceId) {
      return corsJson({ error: "Missing licenseKey or deviceId" }, 400);
    }

    const actRes = await fetch("https://live.dodopayments.com/licenses/activate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getDodoApiKey()}`,
      },
      body: JSON.stringify({
        license_key: licenseKey,
        name: name || deviceId,
      }),
      cache: "no-store",
    });

    const actData = await readJson(actRes);

    if (actRes.status === 404) {
      return corsJson({ error: "License key is invalid" }, 404);
    }

    if (!actRes.ok) {
      return corsJson({ error: actData?.message || "Activation failed" }, 401);
    }

    const payload: LicensePayload = {
      licenseKey,
      deviceId,
      name,
      id: actData?.id,
    };

    return corsJson({ token: signToken(payload), valid: true });
  } catch (error) {
    const message =
      error instanceof Error && error.message === "DODO_API_KEY is not configured"
        ? error.message
        : "Activation failed";

    return corsJson({ error: message }, 500);
  }
}

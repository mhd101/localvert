import jwt from "jsonwebtoken";

export interface LicensePayload {
  licenseKey: string;
  deviceId: string;
  name?: string;
  id?: string;
}

function getJwtSecret() {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwtSecret;
}

export function signToken(payload: LicensePayload) {
  const cleanPayload = {
    ...payload,
  } as LicensePayload & {
    exp?: number;
    iat?: number;
    nbf?: number;
  };

  delete cleanPayload.exp;
  delete cleanPayload.iat;
  delete cleanPayload.nbf;

  return jwt.sign(cleanPayload, getJwtSecret(), { expiresIn: "7d" });
}

export function verifyToken(token: string): LicensePayload {
  return jwt.verify(token, getJwtSecret()) as LicensePayload;
}

export function decodeToken(token: string): LicensePayload {
  return jwt.verify(token, getJwtSecret(), {
    ignoreExpiration: true,
  }) as LicensePayload;
}

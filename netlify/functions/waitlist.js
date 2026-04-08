// Netlify Function: netlify/functions/waitlist.js
// 
// This proxies the email submission to the site's own URL using
// application/x-www-form-urlencoded. Because this request is made
// from Netlify's own infrastructure (not the browser), the CDN-level
// Netlify Forms handler intercepts it BEFORE Next.js processes it —
// which is the key difference that makes submissions get recorded.

export default async function handler(req, context) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let email;
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    email = params.get("email");
  } catch {
    return new Response(JSON.stringify({ error: "Invalid body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Valid email required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Submit to Netlify Forms via the site's production URL.
  // process.env.URL is set automatically by Netlify (e.g. https://localvert.netlify.app).
  const siteUrl = process.env.URL;
  if (!siteUrl) {
    // On local dev, just return success (Netlify isn't running)
    return new Response(JSON.stringify({ success: true, dev: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const formBody = new URLSearchParams();
  formBody.append("form-name", "waitlist");
  formBody.append("email", email);
  formBody.append("bot-field", "");

  const netlifyResponse = await fetch(`${siteUrl}/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody.toString(),
  });

  if (netlifyResponse.ok || netlifyResponse.status === 303) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({ error: `Form submission failed: ${netlifyResponse.status}` }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
}

export const config = {
  path: "/.netlify/functions/waitlist",
};

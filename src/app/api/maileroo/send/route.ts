import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { from, to, subject, message } = await req.json();

    const API_KEY = process.env.MAILEROO_API_KEY;
    const API_URL = process.env.MAILEROO_API_URL;
    const DOMAIN = process.env.MAILEROO_DOMAIN;

    if (!API_KEY || !API_URL || !DOMAIN) {
      return NextResponse.json(
        { ssuccess: false, error: "Missing Maileroo API configuration" },
        { status: 500 }
      );
    }

    const form = new FormData();
    form.append("from", DOMAIN);
    form.append("reply-to", from);
    form.append("to", to);
    form.append("subject", subject);
    form.append("html", `<p><strong>From: ${from}</strong></p><p>${message}</p>`);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "X-API-Key": API_KEY },
      body: form,
    });

    if (!response.ok) {
      const errMsg = await response.text();
      return NextResponse.json(
        { success: false, error: errMsg },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: `Failed to send email: ${message}` }, { status: 500 });
  }
}

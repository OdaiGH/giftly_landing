import { getDb } from "@/db";
import { androidInterest } from "@/db/schema";

type AndroidInterestPayload = {
  contact?: string;
  locale?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AndroidInterestPayload;
    const entry = {
      contact: clean(payload.contact),
      locale: payload.locale === "en" ? "en" : "ar",
    };

    if (!entry.contact) {
      return Response.json({ error: "required_fields_missing" }, { status: 400 });
    }

    const db = getDb();
    const [saved] = await db
      .insert(androidInterest)
      .values(entry)
      .returning({ id: androidInterest.id });

    return Response.json({ id: saved.id }, { status: 201 });
  } catch {
    return Response.json({ error: "submission_failed" }, { status: 500 });
  }
}

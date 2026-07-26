import { getDb } from "@/db";
import { contactMessages } from "@/db/schema";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  locale?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const contact = {
      fullName: clean(payload.fullName),
      email: clean(payload.email),
      phone: clean(payload.phone),
      topic: clean(payload.topic),
      message: clean(payload.message),
      locale: payload.locale === "en" ? "en" : "ar",
    };

    if (!contact.fullName || !contact.email || !contact.topic || !contact.message) {
      return Response.json({ error: "required_fields_missing" }, { status: 400 });
    }

    const db = getDb();
    const [saved] = await db
      .insert(contactMessages)
      .values(contact)
      .returning({ id: contactMessages.id });

    return Response.json({ id: saved.id }, { status: 201 });
  } catch {
    return Response.json({ error: "submission_failed" }, { status: 500 });
  }
}

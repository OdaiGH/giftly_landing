import { getDb } from "@/db";
import { courierApplications } from "@/db/schema";

type CourierPayload = {
  fullName?: string;
  identityType?: string;
  identityNumber?: string;
  phone?: string;
  city?: string;
  email?: string;
  locale?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CourierPayload;
    const application = {
      fullName: clean(payload.fullName),
      identityType: clean(payload.identityType),
      identityNumber: clean(payload.identityNumber),
      phone: clean(payload.phone),
      city: clean(payload.city),
      email: clean(payload.email),
      locale: payload.locale === "en" ? "en" : "ar",
    };

    if (Object.values(application).some((value) => !value)) {
      return Response.json({ error: "required_fields_missing" }, { status: 400 });
    }

    if (!["saudi-id", "passport"].includes(application.identityType)) {
      return Response.json({ error: "invalid_identity_type" }, { status: 400 });
    }

    const db = getDb();
    const [saved] = await db
      .insert(courierApplications)
      .values(application)
      .returning({ id: courierApplications.id });

    return Response.json({ id: saved.id }, { status: 201 });
  } catch {
    return Response.json({ error: "submission_failed" }, { status: 500 });
  }
}

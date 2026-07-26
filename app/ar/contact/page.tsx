import type { Metadata } from "next";
import { ContactFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "تواصل معنا | SAFE-GIFT", description: "أرسل رسالة إلى فريق SAFE-GIFT." };
export default function Page() { return <ContactFormPage locale="ar" />; }

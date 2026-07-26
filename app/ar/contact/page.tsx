import type { Metadata } from "next";
import { ContactFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "تواصل معنا | Giftly", description: "أرسل رسالة إلى فريق Giftly." };
export default function Page() { return <ContactFormPage locale="ar" />; }

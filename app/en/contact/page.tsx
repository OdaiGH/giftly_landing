import type { Metadata } from "next";
import { ContactFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "Contact us | SAFE-GIFT", description: "Send a message to the SAFE-GIFT team." };
export default function Page() { return <ContactFormPage locale="en" />; }

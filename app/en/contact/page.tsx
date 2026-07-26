import type { Metadata } from "next";
import { ContactFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "Contact us | Giftly", description: "Send a message to the Giftly team." };
export default function Page() { return <ContactFormPage locale="en" />; }

import type { Metadata } from "next";
import { CourierFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "Become a courier | Giftly", description: "Apply to join the Giftly courier community." };
export default function Page() { return <CourierFormPage locale="en" />; }

import type { Metadata } from "next";
import { CourierFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "Become a courier | SAFE-GIFT", description: "Apply to join the SAFE-GIFT courier community." };
export default function Page() { return <CourierFormPage locale="en" />; }

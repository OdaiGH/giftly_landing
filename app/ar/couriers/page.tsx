import type { Metadata } from "next";
import { CourierFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "انضم كمندوب | Giftly", description: "قدّم طلبك للانضمام إلى شبكة مندوبي Giftly." };
export default function Page() { return <CourierFormPage locale="ar" />; }

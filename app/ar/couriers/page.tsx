import type { Metadata } from "next";
import { CourierFormPage } from "../../components/FormPages";

export const metadata: Metadata = { title: "انضم كمندوب | SAFE-GIFT", description: "قدّم طلبك للانضمام إلى شبكة مندوبي SAFE-GIFT." };
export default function Page() { return <CourierFormPage locale="ar" />; }

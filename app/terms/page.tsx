import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Giftly",
  description: "الشروط والأحكام الخاصة بـ Giftly.",
};

export default function TermsPage() {
  return <LegalPage type="terms" />;
}

import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Giftly",
  description: "سياسة الخصوصية الخاصة بـ Giftly.",
};

export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
}

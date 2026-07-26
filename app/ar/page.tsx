import type { Metadata } from "next";
import { LandingPage } from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Giftly — اطلب أي هدية، وثق بأنها ستصل",
  description: "أرسل هدايا شخصية داخل السعودية مع مندوبين موثّقين، دفع محمي، وإثبات توصيل بالصورة والموقع.",
};

export default function ArabicHome() {
  return <LandingPage locale="ar" />;
}

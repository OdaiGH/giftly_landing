import type { Metadata } from "next";
import { LandingPage } from "../components/LandingPage";

export const metadata: Metadata = {
  title: "SAFE-GIFT — Ask for anything. Trust that it’ll show up.",
  description: "Send custom gifts across Saudi Arabia with verified couriers, protected payment, and GPS-verified proof.",
};

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}

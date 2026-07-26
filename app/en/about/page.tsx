import type { Metadata } from "next";
import { AboutPage } from "../../components/AboutPage";

export const metadata: Metadata = { title: "About us | SAFE-GIFT", description: "Learn about SAFE-GIFT and our mission in Saudi Arabia." };
export default function Page() { return <AboutPage locale="en" />; }

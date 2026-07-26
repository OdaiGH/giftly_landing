import type { Metadata } from "next";
import { AboutPage } from "../../components/AboutPage";

export const metadata: Metadata = { title: "About us | Giftly", description: "Learn about Giftly and our mission in Saudi Arabia." };
export default function Page() { return <AboutPage locale="en" />; }

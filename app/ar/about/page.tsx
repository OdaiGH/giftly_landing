import type { Metadata } from "next";
import { AboutPage } from "../../components/AboutPage";

export const metadata: Metadata = { title: "من نحن | SAFE-GIFT", description: "تعرف على رسالة SAFE-GIFT وفريقنا في السعودية." };
export default function Page() { return <AboutPage locale="ar" />; }

import type { Metadata } from "next";
import { AboutPage } from "../../components/AboutPage";

export const metadata: Metadata = { title: "من نحن | Giftly", description: "تعرف على رسالة Giftly وفريقنا في السعودية." };
export default function Page() { return <AboutPage locale="ar" />; }

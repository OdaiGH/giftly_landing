import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "SAFE-GIFT — Ask for anything. Trust that it’ll show up.";
const description =
  "Send thoughtful, custom gifts across Saudi Arabia with verified couriers, protected payment, and GPS-verified doorstep proof.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    keywords: [
      "Saudi Arabia gifting",
      "gift delivery",
      "custom gifts",
      "Riyadh",
      "Jeddah",
      "SAFE-GIFT",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1733,
          height: 909,
          alt: "SAFE-GIFT — Ask for anything. Trust that it’ll show up.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Giftly — اطلب أي هدية، وثق بأنها ستصل";
const description =
  "أرسل هدايا شخصية داخل السعودية مع مندوبين موثّقين، دفع محمي، وإثبات توصيل بالصورة والموقع.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/giftly-brand.png`;

  return {
    title,
    description,
    keywords: [
      "هدايا السعودية",
      "Saudi Arabia gifting",
      "gift delivery",
      "custom gifts",
      "Riyadh",
      "Jeddah",
      "Giftly",
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
          alt: "Giftly — اطلب أي هدية، وثق بأنها ستصل",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(()=>{const en=location.pathname==='/en'||location.pathname.startsWith('/en/');document.documentElement.lang=en?'en':'ar';document.documentElement.dir=en?'ltr':'rtl'})()",
          }}
        />
        {children}
      </body>
    </html>
  );
}

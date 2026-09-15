import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PTI Insurance - Trang chủ",
  description: "Bảo hiểm PTI - Điểm tựa niềm tin vững chắc",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="bg-[#f7fafd] text-[#181c1e] antialiased">{children}</body>
    </html>
  );
}
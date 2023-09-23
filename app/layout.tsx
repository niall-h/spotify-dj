import type { Metadata } from "next";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Spotify DJ",
  description: "DJ Service for Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          height: "100vh",
          margin: 0,
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

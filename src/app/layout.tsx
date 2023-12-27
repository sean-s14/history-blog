import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation/navigation";

const aleo = Aleo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Historia Haven",
  description:
    "Historia Haven: Dive into explorations of historical mysteries, cultural origins, and intriguing myths. Uncover the past's hidden threads in short and captivating reads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

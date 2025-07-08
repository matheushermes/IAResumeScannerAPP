import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IA Resume Scanner",
  description:
    "Plataforma de análise inteligente de currículos com IA local. Receba pontuação de compatibilidade e feedback personalizado com base em vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={saira.variable}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1e1b2e", // fundo dark
              color: "#ffffff",
              border: "1px solid #a67cf8",
              padding: "12px 16px",
              borderRadius: "12px",
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#a67cf8",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff4d4f",
                secondary: "#ffffff",
              },
            },
          }}
        />

      </body>
    </html>
  );
}

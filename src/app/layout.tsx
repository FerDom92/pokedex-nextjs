"use client";

import { ChangeTheme } from "@/components/ui/ChangeTheme";
import "@/css/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Rubik } from "next/font/google";
import { ReactNode, useState } from "react";
import { PokemonProvider } from "../context/PokemonContext";
import { queryClient } from "../lib/queryClient";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [theme, setTheme] = useState<"light" | "dracula">("dracula");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dracula" : "light"));
  };

  return (
    <html lang="en" data-theme={theme}>
      <QueryClientProvider client={queryClient}>
        <PokemonProvider>
          <body className={rubik.className}>
            <ChangeTheme theme={theme} toggleTheme={toggleTheme} />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </body>
        </PokemonProvider>
      </QueryClientProvider>
    </html>
  );
}

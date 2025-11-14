import { FilterContextProvider } from "@/contexts/FilterContext";
import { Header } from "../components/Header";
import "./globals.css";
import {Saira} from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-saira",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={saira.className}
      >
        <FilterContextProvider>
          <Header/>
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}

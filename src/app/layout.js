import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NAH",
  description: "Find in-depth about our interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className="flex flex-col min-h-screen justify-center">
    
    <main className="flex-grow pt-16">
     
        {children}
    </main>
  
  </body>
</html>
  );
}

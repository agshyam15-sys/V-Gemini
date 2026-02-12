import "./globals.css";

export const metadata = {
  title: "Stranger Valentine",
  description: "Will you be my valentine?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

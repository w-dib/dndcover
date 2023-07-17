import "./globals.css";

export const metadata = {
  title: "D&D Cover Generator",
  description: "Generate a cover for your D&D campaign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

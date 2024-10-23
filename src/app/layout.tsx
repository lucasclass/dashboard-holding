"use client";
import GlobalStyles from "./styles/global";
import StyledComponentsRegistry from "./registry";
import SessionWrapper from "../components/SessionWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <body className={``}>{children}</body>
        </StyledComponentsRegistry>
      </SessionWrapper>
    </html>
  );
}

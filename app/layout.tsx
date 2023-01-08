import React from "react";
import "./global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <title>Password Card</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover, minimum-scale=1, maximum-scale=1.0, user-scalable=0"></meta>
      <body>{children}</body>
    </html>
  )
}
/** @format */
"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkThemePalette } from "@/styles/theme";
import { device } from "@/styles/device";
import { media } from "@/styles/media";
import { fontSize } from "@/styles/font";

type StyleProviderProps = {
  children: ReactNode;
};

const StyleProvider = ({
  children,
}: StyleProviderProps): JSX.Element => {
  return (
    <ThemeProvider
      theme={{
        // @ts-ignore
        fontSize,
        color: darkThemePalette,
        device,
        media,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;

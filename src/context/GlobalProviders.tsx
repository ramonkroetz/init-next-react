"use-client";

import type { PropsWithChildren } from "react";
import { I18nProvider } from "./I18nProvider";
import { ThemeProvider } from "./ThemeContext";

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <I18nProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nProvider>
  );
}

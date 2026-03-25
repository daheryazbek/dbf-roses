"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

type LangSyncProps = {
  locale: Locale;
};

export const LangSync = ({ locale }: LangSyncProps) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};

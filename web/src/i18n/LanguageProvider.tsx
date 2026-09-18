"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  dictionaries,
  type Dictionary,
  type Lang,
} from "./dictionaries";

export const LANG_STORAGE_KEY = "mkweli-cfw-lang";

type Vars = Record<string, string | number>;

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: Dictionary;
  t: (template: string, vars?: Vars) => string;
  plural: (count: number, one: string, other: string) => string;
  formatMoney: (amount: number | null | undefined, currency?: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] != null ? String(vars[key]) : `{${key}}`,
  );
}

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "fr";
}

const LANG_EVENT = "mkweli-cfw-lang-change";

function readStoredLang(): Lang {
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(stored) ? stored : "en";
}

function subscribeLang(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANG_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANG_EVENT, onStoreChange);
  };
}

function getServerLang(): Lang {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Lang>(
    subscribeLang,
    readStoredLang,
    getServerLang,
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const dict = dictionaries[lang];

  const t = useCallback(
    (template: string, vars?: Vars) => interpolate(template, vars),
    [],
  );

  const plural = useCallback(
    (count: number, one: string, other: string) => {
      const rule = new Intl.PluralRules(lang).select(count);
      return interpolate(rule === "one" ? one : other, { count });
    },
    [lang],
  );

  const formatMoney = useCallback(
    (amount: number | null | undefined, currency = "USD") => {
      if (amount == null || Number.isNaN(amount)) return dict.common.notPublished;
      return new Intl.NumberFormat(lang === "fr" ? "fr" : "en", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }).format(amount);
    },
    [dict.common.notPublished, lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, dict, t, plural, formatMoney }),
    [lang, setLang, dict, t, plural, formatMoney],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, dict } = useI18n();
  const btn =
    "rounded-md px-2 py-1 text-[0.78rem] font-bold tracking-wide transition-colors";
  const active = "bg-primary-soft text-foreground";
  const idle = "text-muted hover:text-foreground";

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="group"
      aria-label={dict.lang.groupLabel}
    >
      <button
        type="button"
        lang="en"
        aria-pressed={lang === "en"}
        className={`${btn} ${lang === "en" ? active : idle}`}
        onClick={() => setLang("en")}
      >
        {dict.lang.en}
      </button>
      <button
        type="button"
        lang="fr"
        aria-pressed={lang === "fr"}
        className={`${btn} ${lang === "fr" ? active : idle}`}
        onClick={() => setLang("fr")}
      >
        {dict.lang.fr}
      </button>
    </div>
  );
}

export function SkipToContent() {
  const { dict } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-white"
    >
      {dict.skipToContent}
    </a>
  );
}

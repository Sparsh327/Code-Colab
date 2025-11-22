// languageConfig.ts

export interface LanguageConfigItem {
  name: string;
  icon: string;
  monacoLang: string;
}

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
} as const;

// auto-generate language keys from LANGUAGE_CONFIG
export type LanguageKey = keyof typeof LANGUAGE_CONFIG;

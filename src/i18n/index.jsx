import { createContext, useContext, useMemo, useState } from 'react';
import en from './en.js';

// Register additional languages here, e.g. { en, mt, sr }.
const dictionaries = { en };

const I18nContext = createContext(null);

export function I18nProvider({ children, initial = 'en' }) {
  const [lang, setLang] = useState(initial);
  const value = useMemo(() => {
    const dict = dictionaries[lang] ?? en;
    const t = (key, vars) => {
      let str = dict[key] ?? en[key] ?? key;
      if (vars) for (const [k, v] of Object.entries(vars)) str = str.replace(`{${k}}`, v);
      return str;
    };
    return { lang, setLang, t, languages: Object.keys(dictionaries) };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

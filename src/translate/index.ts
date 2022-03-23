import i18n from "i18n-js"

import ES from "./es"

i18n.fallbacks = true
i18n.translations = { es: ES }

export type GaloyTranslate = (
  scope: keyof typeof ES,
  options?: i18n.TranslateOptions | undefined,
) => string

export const translate: GaloyTranslate = (scope, options) => {
  const translation = i18n.t(scope, { defaultValue: scope, ...options })
  return translation
}

export type GaloyTranslateUnknown = (
  scope: string,
  options?: i18n.TranslateOptions | undefined,
) => string

export const translateUnknown: GaloyTranslateUnknown = (scope, options) => {
  const translation = i18n.t(scope, { defaultValue: scope, ...options })
  return translation
}

export const setLocale = (langauge: string | undefined): void => {
  if (langauge && langauge !== "DEFAULT" && i18n.locale !== langauge) {
    i18n.locale = langauge
  }
}

export * from "./es"

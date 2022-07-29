import i18n from "i18n-js"

import esMain from "./es-main"

import en from "./en"
import es from "./es"
import ptBR from "./pt-br"
import frCA from "./fr-ca"

i18n.fallbacks = true
i18n.translations = { es: { ...es, ...esMain }, pt: ptBR, fr: frCA, en }

export type GaloyTranslate = (
  scope: keyof typeof esMain,
  options?: i18n.TranslateOptions | undefined,
) => string

export const translate: GaloyTranslate = (scope, options) => {
  const translation = i18n.t(scope, { defaultValue: scope, ...options })
  return translation
}

export type GaloyTranslateUnknown = (
  scope: string,
  options?: i18n.TranslateOptions | undefined,
) => any

export const translateUnknown: GaloyTranslateUnknown = (scope, options) => {
  const translation = i18n.t(scope, { defaultValue: scope, ...options })
  return translation
}

export const setLocale = (language: string | undefined): void => {
  if (language && language !== "DEFAULT" && i18n.locale !== language) {
    i18n.locale = language
  }
}

export const getLocale = (): string => {
  return i18n.locale
}

export { toNumber as toLocaleNumber } from "i18n-js"

export * from "./es-main"

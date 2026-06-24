export type Lang = 'es' | 'en';

/** A value available in every supported language. */
export type Localized<T = string> = Record<Lang, T>;

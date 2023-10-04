export function match(param) {
  const supportedLanguages = ['en', 'fr', 'de']
  let foundLanguage = supportedLanguages.find(lang => lang === param)
  return foundLanguage ?  true  : false
}


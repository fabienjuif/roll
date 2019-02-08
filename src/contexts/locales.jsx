/* eslint-env browser */
import React, { createContext, useEffect } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import PropTypes from 'prop-types'

const getFromPath = (data, path) => path.split('.').reduce(
  (curr, sub) => curr && curr[sub],
  data,
)

const Context = createContext()

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage('lang', undefined)
  const [locales, setLocales] = useLocalStorage('locales', undefined)

  useEffect(() => {
    // load lang
    let currentLang = lang
    if (!lang) {
      // retrieve lang from navigator
      const { navigator } = window
      if (navigator) {
        const { language, userLanguage, languages } = navigator
        currentLang = language || userLanguage || (languages && languages.length > 0 && languages[0]) || 'en'
        if (currentLang.length >= 2) currentLang = currentLang.substring(0, 2)
        else currentLang = 'en'
      }
      setLang(currentLang)
      return
    }

    // load locales
    if (
      !locales
      || !locales.date
      || !locales.lang
      || (locales.lang !== currentLang && (Date.now() - locales.date) > 3600000 /* 1 hour */)
      || (Date.now() - locales.date) > 259200000 /* 3 days */
    ) {
      const loadLocales = fetchLang => (
        fetch(`${process.env.PUBLIC_URL}/locales/${fetchLang}.json`)
          .then(raw => raw.json())
          .then(newLocales => setLocales({ data: newLocales, lang: fetchLang, date: Date.now() }))
      )

      loadLocales(currentLang)
        .catch(() => loadLocales('en'))
    }
  })

  const getMessages = (path = '') => {
    if (path === '') return locales.data
    return getFromPath(locales.data, path)
  }

  if (!locales) return <div>Loading locales...</div>

  return (
    <Context.Provider
      value={{
        lang,
        locales,
        getMessages,
      }}
    >
      {children}
    </Context.Provider>
  )
}

LocalesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Context
export { LocalesProvider }
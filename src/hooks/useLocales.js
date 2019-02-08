import { useContext } from 'react'
import LocalesContext from '../contexts/locales'

const useLocales = (path) => {
  const { getMessages } = useContext(LocalesContext)

  return getMessages(path)
}

export default useLocales

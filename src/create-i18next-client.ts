import i18n from 'i18next'
import i18nextHTTPBackend from 'i18next-http-backend'

import { InitPromise } from '../types'

export default (config) => {
  let initPromise: InitPromise

  if (!i18n.isInitialized) {

    if (!process.browser) {
      const i18nextFSBackend = require('i18next-fs-backend/cjs')
      i18n.use(i18nextFSBackend)
    } else {
      i18n.use(i18nextHTTPBackend)
    }

    config.use.forEach(x => i18n.use(x))
    initPromise = i18n.init(config)

  }
  return { i18n, initPromise }
}

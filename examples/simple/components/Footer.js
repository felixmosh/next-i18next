import React from 'react'
import PropTypes from 'prop-types'

import pkg from 'next-i18next/package.json'

import { withTranslation } from '../i18n'

const Footer = ({ t }) => (
  <footer>
    <p>
      {t('description')}
    </p>
    <p>
      next-i18next v
      {pkg.version}
    </p>
  </footer>
)

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)

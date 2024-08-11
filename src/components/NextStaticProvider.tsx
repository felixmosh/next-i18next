import React from 'react'

import { withTranslation } from 'react-i18next'

interface Props {
  tReady: boolean;
}

class NextStaticProvider extends React.Component<Props> {

  static defaultProps = {
    tReady: true,
  }
  render() {
    const { children, tReady } = this.props
    return tReady ? children : null
  }
}

export default withTranslation()(NextStaticProvider as any)

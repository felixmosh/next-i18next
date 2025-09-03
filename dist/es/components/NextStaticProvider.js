import React from 'react';
import { withTranslation } from 'react-i18next';
class NextStaticProvider extends React.Component {
    static defaultProps = {
        tReady: true
    };
    render() {
        const { children, tReady } = this.props;
        return tReady ? children : null;
    }
}
export default withTranslation()(NextStaticProvider);

import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const withInternals = (WrappedComponent, config)=>{
    class WithInternals extends React.Component {
        static displayName = `withnextI18NextInternals(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
        render() {
            return /*#__PURE__*/ _jsx(WrappedComponent, {
                ...this.props,
                nextI18NextInternals: config
            });
        }
    }
    return WithInternals;
};

// @flow
import './BahnhofsAbfahrten.scss';
import React from 'react';
import SettingsModal from './LazySettingsModal';
// import Privacy from './Privacy';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import { renderRoutes } from 'react-router-config';
import Header from './Header';

class BahnhofsAbfahrten extends React.Component<{||}> {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    return (
      <div className="BahnhofsAbfahrten">
        <Header />
        <SettingsModal />
        {renderRoutes(routes)}
      </div>
    );
  }
}

// $FlowFixMe
if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept();
}

export default BahnhofsAbfahrten;

import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from 'registerServiceWorker';
import SettingsService from 'modules/settings/settingsService';
import { i18n } from 'i18n';

(async function() {
  document.title = i18n('app.title');
  const settings = await SettingsService.initialFetch();

  ReactDOM.render(
    <App settings={settings} />,
    document.getElementById('root'),
  );

 
  unregister();
  // registerServiceWorker();
})();

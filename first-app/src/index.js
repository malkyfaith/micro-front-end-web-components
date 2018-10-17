import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class FirstApp extends HTMLElement {
    attachedCallback() {
        ReactDOM.render(<App />, this.createShadowRoot());
    }
}
document.registerElement('microfrontends-first', FirstApp);

serviceWorker.unregister();

import { webFrame } from 'electron';
import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { Router, Route, hashHistory } from 'react-router';
import App from "./component/app/App";

webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

window.addEventListener('load', () => {
    const router = new RouterStore();
    const history = syncHistoryWithStore(hashHistory, router);
    window.workplace = {
        render() {
            const preparedApp = (
                <Router history={history}>
                    <Route path={'/'} component={App} />
                </Router>
            );
            render(preparedApp, document.getElementById('root'));
        },
    };
    window.workplace.render();
});
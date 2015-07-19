import React from 'react';
import ReactDOM from 'react-dom';

import { SideNav } from './components/SideNav';

function bootstrap() {

  let container = document.getElementById('content');

  let sideNav = (
    <div id="wrapper">
      <div id="layout-static">
        <div className="static-sidebar-wrapper">
          <SideNav />
        </div>
        <div className="static-content-wrapper">
          <div clasName="static-content"></div>
        </div>
      </div>
    </div>
  );

  ReactDOM.render(sideNav, container);
}

bootstrap();

import React from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/NavBar';

function bootstrap() {

  let container = document.getElementById('content');

  ReactDOM.render(<NavBar />, container);
}

bootstrap();

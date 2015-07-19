import React from 'react';
import ReactDOM from 'react-dom';

import { PanelWidget } from './components/PanelWidget';

function bootstrap() {

  let container = document.getElementById('content');

  let items = [
    {
      name: 'George Washington',
      followers: 20454,
      following: 454,
      location: 'Gilroy, CA'
    },
    {
      name: 'Thomas Jefferson',
      followers: 15468,
      following: 343,
      location: 'Santa Monica, CA'
    },
    {
      name: 'Teddy Roosevelt',
      followers: 2045,
      following: 234,
      location: 'San Mateo, CA'
    }
  ];

  let widgets = items.map((d, i) => {
    return (
      <div className="col-md-3 col-sm-6 col-xs-6" key={i}>
        <PanelWidget
          name={d.name}
          followers={d.followers}
          following={d.following}
          location={d.location}
        />
      </div>
    );
  });

  ReactDOM.render(<div className="row">{widgets}</div>, container);
}

bootstrap();

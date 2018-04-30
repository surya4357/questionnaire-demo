import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Components/Form';

import './styles.scss';

const App = () => (
  <div>
    <MuiThemeProvider>
      <Form />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

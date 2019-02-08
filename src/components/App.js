import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import AddressBook from './AddressBook';
import ContactDetails from './ContactDetails';
import Empty from './Empty';
import Router from './Router';
import Theme from './Theme';

const App = () => (
  <Router>
    <Theme>
      <AddressBook>
        <Route path="/:id" render={props => <ContactDetails {...props} />} />
        <Route component={Empty} />
      </AddressBook>
    </Theme>
  </Router>
);

export default hot(App);

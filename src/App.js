/* eslint-disable react/function-component-definition */
import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <CounterProvider>
            <SignIn />
          </CounterProvider>
        </PublicRoute>

        <PrivateRoute path="/">
          <CounterProvider>
            <Home />
          </CounterProvider>
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;

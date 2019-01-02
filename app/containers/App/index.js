import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import TopMenuCont from 'containers/TopMenuCont/Loadable';
import Test from 'containers/TestPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
    <TopMenuCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Test" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <h1>FOOTER</h1>
    </div>
  );
}
export default DragDropContext(HTML5Backend)(App);

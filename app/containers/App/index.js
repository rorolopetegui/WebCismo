import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import TopMenuCont from 'containers/TopMenuCont/Loadable';
import BotMenuCont from 'containers/BotMenuCont/Loadable';
import Test from 'containers/TestPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from '../../global-styles';
const styles = {
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    backgroundColor: 'green',
  },
  body: {
    width: '100%',
    //backgroundColor: 'blue',
  },
  footer: {
    width: '100%',
    //backgroundColor: 'red',
  },
};
function App() {
  return (
    <div style={styles.container} >
      <div style={styles.header}>
        <TopMenuCont />
      </div>
      <div style={styles.body}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Test" component={Test} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
      <br />
      <div style={styles.footer}>
        <BotMenuCont />
      </div>
    </div>
  );
}
export default DragDropContext(HTML5Backend)(App);

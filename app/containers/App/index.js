import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Import pages
import HomePage from 'containers/HomePage/Loadable';
import ClientsPage from 'containers/ClientsPage/Loadable';
import CompanyPage from 'containers/CompanyPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import JobsPage from 'containers/JobsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
//Import other containers
import TopMenuCont from 'containers/TopMenuCont/Loadable';
import FooterCont from 'containers/FooterCont/Loadable';
import Test from 'containers/TestPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { isAndroid, isIOS } from 'react-device-detect';


const styles = {
  container: {
    width: '100%',
    backgroundColor: '#F0F8FF',
  },
  header: {
    width: '100%',
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
  /*if(isAndroid || isIOS){
    return <div>
      <h1>Estamos en mantenimiento</h1>
      <h3>Estamos trabajo para traer la mejor experiencia para vos. Por favor visitá www.cismosolutions.com desde una PC.</h3>
    </div>
  }*/
  return (
    <div style={styles.container} >
      <div style={styles.header}>
        <TopMenuCont />
      </div>
      <div style={styles.body}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Clients" component={ClientsPage} />
          <Route exact path="/Company" component={CompanyPage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/Jobs" component={JobsPage} />
          <Route exact path="/Services" component={ServicesPage} />
          <Route exact path="/Test" component={Test} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <div style={styles.footer}>
        <FooterCont />
      </div>
    </div>
  );
}
export default App;

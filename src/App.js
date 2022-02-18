import { Route, Switch, Redirect } from 'react-router-dom';

import Index from './pages/Index';
import CreateItem from './pages/CreateItem';
import Collection from './pages/Collection';
import ListItem from './pages/ListItem';
import Profile from './pages/Profile'
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Index />
        </Route>
        <Route path='/create-item'>
          <CreateItem />
        </Route>
        <Route path='/collection'>
          <Collection />
        </Route>
        <Route path='/list-item'>
          <ListItem />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='*'>
          <Index />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

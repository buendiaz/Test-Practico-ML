import { Route, Switch } from 'react-router-dom';

import Search from '../components/app/search';
import Item from '../components/app/item';
import Notfound from '../components/common/NotFound';

const Router = () => {

  return (
    <Switch>
      <Route exact path="/items/:id" component={Item} />
      <Route exact path={['/', '/items']} component={Search} />
      <Route component={Notfound} />
    </Switch>
  )
};

export default Router;
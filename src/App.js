import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { default as Tab} from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Home from "./views/Home";
import CreateInvoice from "./views/CreateInvoice";
import EditInvoice from "./views/EditInvoice";
import './App.css';
import logo from './yashnee-logo.png';

function ApplictionBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container spacing={1} alignItems="center" justify="space-between">
        <Grid item xs={1}>
                <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={11}>
        <Grid container spacing={1}   alignItems="center">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Home'   icon={<HomeIcon />} component={Link} to="/" />
                    <Tab label='Create' icon={<AddIcon />} component={Link} to="/create" />
                </Tabs>
            </AppBar>
        </Grid>
        </Grid>
      </Grid>
      <Divider />
    </div>
  )
};

export default function App() {
  return (
    <Router>
      <div>
        <ApplictionBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={CreateInvoice} />
          <Route path="/edit" component={EditInvoice} />
        </Switch>
      </div>
    </Router>
  )
}

import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'
import {DISHES} from './Shared/dishes'
import Main from './Components/MainComponent';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render(){
  return (
      <div>
        <Main/>
      </div>
  );
  }
}

export default App;

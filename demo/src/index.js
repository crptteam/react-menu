import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Menu from '../../src/index';
import defaultTheme from '../../src/theme/defaultTheme';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MenuItem from './MenuItem/index';

class Demo extends PureComponent {
  menuItems = [
    ({ isOpen }) => (<MenuItem iconName="download" text="Item_0" isOpen={isOpen} link="/item_0" />),
    ({ isOpen }) => (<MenuItem iconName="download" text="Item_1" isOpen={isOpen} link="/item_1" />),
    ({ isOpen }) => (<MenuItem iconName="download" text="Item_2" isOpen={isOpen} link="/item_2" />),
  ];

  state = { isOpen: false };

  toggleFullMode = () => {
    console.log('Changed isOpen');
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Router>
        <div>
          <h1>
            react-menu Demo
          </h1>
          <div className="flex-display_with_polyfill">
            <div className="index">
              <Menu
                isOpen={isOpen}
                header={Header}
                footer={Footer}
                menuItems={this.menuItems}
                onFullModeClick={this.toggleFullMode}
              />
            </div>
            <div className="smth">
              Route:
              <Route exact path="/" component={() => (<div>Root</div>)} />
              <Route path="/item_0" component={() => (<div>Item 0 is selected</div>)} />
              <Route path="/item_1" component={() => (<div>Item 1 is selected</div>)} />
              <Route path="/item_2" component={() => (<div>Item 2 is selected</div>)} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(
  <ThemeProvider theme={defaultTheme}>
    <Demo />
  </ThemeProvider>,
  document.querySelector('#demo'),
);

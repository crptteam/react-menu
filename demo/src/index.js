import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components'

import Menu from '../../src/index';
import defaultTheme from '../../src/theme/defaultTheme';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MenuItem from './MenuItem';

class Demo extends Component {
  state = {
    isOpen: false,
  }
  constructor() {
    super();

    this.menuItems = [{
      component: () => (<div>menu_0</div>),
      isSelected: true,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="calendar-icon" text="menu 1_" />),
      isSelected: true,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="checkmark" text="menu 2___" />),
      isSelected: false,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="code-invalid" text="menu 3____" />),
      isSelected: false,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="edit" text="menu 4" />),
      isSelected: true,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="emission" text="menu 5_" />),
      isSelected: true,
    }, {
      component: ({ isOpen }) => (<MenuItem isOpen={isOpen} iconName="pack" text="menu 6____  " />),
      isSelected: false,
    }];
  }

  toggleFullMode = () => {
    console.log('Changed isOpen');
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const {
      isOpen,
    } = this.state;

    return (
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
          <div className="smth">Smth</div>
        </div>
      </div>
    );
  }
}

render(
  <ThemeProvider theme={defaultTheme}>
    <Demo />
  </ThemeProvider>,
  document.querySelector('#demo'),
);

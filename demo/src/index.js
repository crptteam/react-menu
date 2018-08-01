import React, {Component} from 'react';
import {render} from 'react-dom';
import {ThemeProvider} from 'styled-components'

import Menu from '../../src/index';
import defaultTheme from '../../src/theme/defaultTheme';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MenuItem from './MenuItem';

class Demo extends Component {
  state = {
    isFull: false,
  }
  constructor() {
    super();

    this.menuItems = [{
      component: () => (<div>menu_0</div>),
      isSelected: true,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="calendar-icon" text="menu 1_" />),
      isSelected: true,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="checkmark" text="menu 2___" />),
      isSelected: false,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="code-invalid" text="menu 3____" />),
      isSelected: false,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="edit" text="menu 4" />),
      isSelected: true,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="emission" text="menu 5_" />),
      isSelected: true,
    }, {
      component: ({ isFull }) => (<MenuItem isFull={isFull} iconName="pack" text="menu 6____  " />),
      isSelected: false,
    }];
  }

  toggleFullMode = () => {
    const { isFull } = this.state;
    this.setState({ isFull: !isFull });
  }

  render() {
    const {
      isFull,
    } = this.state;

    return (
      <div>
        <h1>
          react-menu Demo
        </h1>
        <div className="index">
          <Menu
            isFull={isFull}
            header={Header}
            footer={Footer}
            menuItems={this.menuItems}
            onFullModeClick={this.toggleFullMode}
          />
        </div>
        <div className="smth">Smth</div>
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

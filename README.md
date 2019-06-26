# react-menu

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Install ##
`npm i --save @crpt/react-menu`

### Usage ###
```javascript
import Menu from "@crpt/react-menu"; 
...
<Menu
    isOpen={isOpen}
    header={Header}
    footer={Footer}
    menuItems={menuItems}
    isShowButton={isShowButton}
    onFullModeClick={toggleFullMode}
/>
```


| PropName | Description | Example |
|---|---|---|
| `isOpen: boolean`  | When true Menu width is wide, else - narrow |   |
| `header: function`  | Header component. _See Note1_ |   |
| `footer: function`  | Footer component. _See Note1_ |   |
| `isShowButton: boolean`  | When true - the button in the footer is shown, when false - hiding. |   |
| `menuItems: Array of functions`  | Menu items. |   |




___Note 1.___ 
  Function will be called with parameter isOpen.
  
  Lets we have a menu item (or header, or footer) component like this:
```
const MenuItem = ({ isOpen, text, iconName }) => (
  <div
    style={{ ... }}
    onClick={() => console.log(`Clicked to ${text}.`)}
  >
    <Icon type={iconName} />
    {isOpen ? text : null}
  </div>
);
```
  We can define text and iconName props for every item, and isOpen property will be sent when render 
`({ isOpen }) => (<MenuItem isOpen={isOpen} text="smthText" iconName="smthIconName" />);`


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

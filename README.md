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
    isFull={isFull}
    header={Header}
    footer={Footer}
    menuItems={menuItems}
    onFullModeClick={toggleFullMode}
/>
```


| PropName | Description | Example |
|---|---|---|
| `isFull: boolean`  | When true Menu width is wide, else - narrow |   |
| `header: function`  | Header component. _See Note1_ |   |
| `footer: function`  | Footer component. _See Note1_ |   |
| `menuItems: Array of objects`  | Menu items. _See Note2_ |   |



___Note 1.___ 
  Function will be called with parameter isFull.
  
  Lets we have a menu item (or header, or footer) component like this:
```
const MenuItem = ({ isFull, text, iconName }) => (
  <div
    style={{ ... }}
    onClick={() => console.log(`Clicked to ${text}.`)}
  >
    <Icon type={iconName} />
    {isFull ? text : null}
  </div>
);
```
  We can define text and iconName props for every item, and isFull property will be sent when render 
`({ isFull }) => (<MenuItem isFull={isFull} text="smthText" iconName="smthIconName" />);`
  

___Note 2.___ Object of menuItems description.

| PropName | Type |
|---|---|
| component | function. _See Note1_ |
| isSelected | boolean |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

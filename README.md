# react-sidebar

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

# Avatar

It can display sidebar with children as content.

## Usage

```javascript

import Sidebar from "@crpt/react-sidebar";

...
onSidebarClose() {
    this.setState({ sidebarActive: false });
}
...
<Sidebar active={this.state.sidebarActive} onClose={this.onSidebarClose}>content</Sidebar>
...

```

| PropName | Description | Example |
|---|---|---|
| theme: object | Theme object | <Sidebar theme={myTheme}/> |
| active: Boolean | Sidebar activity. Is Required. | <Sidebar active={true} .../> |
| onClose: Function | Callback for change container state if blocker clicked. Is Required. | <Sidebar onClose={onClose} .../> |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

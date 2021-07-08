# HOC
####  什麼是HOC？
HOC呢，其實就是一個函數，接收某個現有的 component 然後 return 一個  component，是一種React 重用邏輯的高級(?)技術。

HOC概念是由 JavaScript的HOF衍伸來的，例如Array提供的 map()，filter()都是會返回一個新的陣列，以這種概念去實現它。

我們可以將一些固定的邏輯放至 Higher order component 中
來變動 props 及 state 傳遞給接收的 component

hoc基本範例

```javascript

import React from 'react';
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
// And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};

```
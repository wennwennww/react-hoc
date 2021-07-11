# HOC (High Order Component)
####  什麼是HOC？
Higher Order Component 指的是在 React 中能夠幫助我們重複使用程式碼的 React Component。具體來說 Higher Order Component 是一個 function，而這個 function 可以把 Component 當作參數傳入，並且回傳一個「增強版」的 Component。

…

HOC概念是由 JavaScript的HOF衍伸來的，例如Array提供的 map()，filter()都是會返回一個新的陣列，以這種概念去實現它。 (https://www.youtube.com/watch?v=1EkLUUJ1v9o&ab_channel=BigBoyCanCode)

我們可以將一些固定的邏輯放至 Higher order component 中，來變動 props 及 state 傳遞給接收的 component 然後回傳它。

#### hoc基本範例

```javascript

import React from 'react';
*// Take in a component as argument WrappedComponent*
const higherOrderComponent = (*WrappedComponent*) => {
*// And return another component*
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};

```

#### HOC 缺點
- 可能會出現多層的現象，增加複雜度跟理解的成本
- 將不相關的props傳遞給被包裹的component
- Refs 不會被傳遞(需要額外處理) 所以想要在HOC里面获取新组件的ref需要用些特殊方式，因為ref不是一個prop，但現在可以使用React.fowardRef解決此問題
- etc…

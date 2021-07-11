import React from 'react';
import ButtonClickAction from './components/ButtonClickAction';
import ButtonMoveAction from './components/ButtonMoveAction';

// 兩個button,一個點擊可以count++,一個滑鼠滑出後才count++
const App = () => (
  <div>
    <ButtonClickAction />
    <ButtonMoveAction />
  </div>
)

export default App;

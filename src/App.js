import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 导入redux测试代码
import './store';
import Stu from './pages/stu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stu/>
      </div>
    );
  }
}

export default App;

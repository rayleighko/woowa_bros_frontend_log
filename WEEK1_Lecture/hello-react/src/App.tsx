import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  // 번들러(바벨)가 이미지, css 파일도 번들링 해주기 때문에 마치 코드를 쓰듯이 사용할 수 있다.
  // 컴포넌트는 크게 3가지로 나눌 수 있다. 하나의 컴포넌트에 모든 기능을 포함한 무거운 컴포넌트, 기능 별로 나눈 가벼운 컴포넌트(퓨어 컴포넌트), 마지막으로
  // 가벼운 컴포넌트조차 줄이고 줄여서 하나의 함수로 만든 함수형 컴포넌트로 구분한다.
  // 타입은 크게 흔한 타입(프리미티브 타입)과 객체 타입이 존재한다.
  // 리액트에는 라이프사이클이 존재하는데, 무거운 컴포넌트와 가벼운 컴포넌트(퓨어 컴포넌트)는 라이프사이클에 개발자가 관여할 수 있다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import Animal from './components/Animal/Animal.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {animals.map((animal) => {
        return <Animal key={animal.type} name={animal.name} type={animal.type} says={animal.says} />;
      })}
      <Footer />
    </div>
  );
}

export default App;

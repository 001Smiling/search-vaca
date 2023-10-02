import React from 'react';
import './components/assets/style/Base.scss';
import MainblockVaca from "./components/MainblockVaca";
import Form from "./components/Form"




function App() {
  return (
  <>
    <main className='main'>
      <MainblockVaca/>
      <Form/>
    </main>
    <footer className='footer'>
    <div className='footer-container'>
        <div className='footer-container__block1'>
            <p className='footer-container__block1-text1'>+7 499 391-66-69</p>
            <p className='footer-container__block1-text2'>mail@greensight.ru</p>
        </div>
        <div className='footer-container__block2'>
            <p className='footer-container__block1-text3'>322A, 2nd Floor, Zelenograd, Moscow, Russia</p>
            <a className='footer-container__block1-text4'>Directions</a>
        </div>
    </div>
  </footer>
  </>
  );
}

export default App;

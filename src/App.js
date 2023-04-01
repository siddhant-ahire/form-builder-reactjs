import FormBuilder from './formBuilder';
import FormRender from './formRender';
import './App.css'
import { MyContext } from './context';
import { useState } from 'react';

function App() {
  const [ form, setForm] = useState({});

  return (
    <div className="App">
      <MyContext.Provider value={{ form, setForm }}>
        <div className='float-container'>
          <div className="float-child">
            <FormBuilder/>
          </div>
          <div className="float-child">
            <FormRender/>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;

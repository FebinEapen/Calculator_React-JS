import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="container">
      <div className='calculator' >
        <form action=''>
          <div className='display' >
            <input type='text' style={{width:'247px'}} value={value}/>
          </div>
            <div>
              <input type='button' value='AC' onClick={event => setValue('')}/>
              <input type='button' value='DE' onClick={event => setValue(value.slice(0,-1))}/>
              <input type='button' value='.' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='/' onClick={event => setValue(value + event.target.value)}/>
            </div>
            <div>
              <input type='button' value='7' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='8' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='9' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='*' onClick={event => setValue(value + event.target.value)}/>
            </div>
            <div>
              <input type='button' value='4' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='5' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='6' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='+' onClick={event => setValue(value + event.target.value)}/>
            </div>
            <div>
              <input type='button' value='1' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='2' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='3' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='-' onClick={event => setValue(value + event.target.value)}/>
            </div>
            <div>
              <input type='button' value='00' style={{width:'124px'}} onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='0' onClick={event => setValue(value + event.target.value)}/>
              <input type='button' value='=' className='equal' onClick={event => setValue(eval(value))}/>
            </div>
          
        </form>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
// eslint-disable-next-line
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [modetext, setmodetext] = useState('Enable')
  const [btnText, setBtnText] = useState('Dark Mode');

  const [myStyle, setMyStyle] = useState({
    color: '#050726',
    backgroundColor: 'white',
    border: '1px solid #050726'
  });

  const [btnStyle, setBtnStyle] = useState({
    color: 'white',
    backgroundColor: 'blue',
    border: '1px solid blue'
  });

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      setmodetext('Disable');
      document.body.style.backgroundColor = '#050726';
    }
    else {
      setMode('light');
      setmodetext('Enable')
      document.body.style.backgroundColor = 'white';

    }
    if (btnText === 'Dark Mode'){
      setMyStyle ({
        color: 'white',
        backgroundColor: '#050726',
        border: '1px solid white'
      })
      setBtnStyle({
        backgroundColor: 'green',
        border: '1px solid green'
      })
      setBtnText("Light Mode")
    }
    else if(btnText === 'Light Mode'){
      setMyStyle ({
        color: '#050726',
        backgroundColor: 'white',
        border: '1px solid #050726'
      })
      setBtnStyle({
        color: 'white',
        backgroundColor: 'blue',
        border: '1px solid blue'
      })
      setBtnText("Dark Mode")
    }
  }

  return (
    <Router>
    <Navbar title="TextUtils" mode={mode} modetext={modetext} toggleMode={toggleMode}/>
    <div className="container my-3">
      {/* <Routes> */}
        <Route path="/" exact render={() => <TextForm heading="Enter the text below to analyze" toggleMode={toggleMode} myStyle={myStyle} btnStyle={btnStyle} btnText={btnText} />} />
        <Route path="/about" render={() => <About mode={mode} />} />
      {/* </Routes> */}
    {/* <TextForm heading="Enter the text" toggleMotitle="TextUtils" mode={mode} modetext={modetext} toggleMode={toggleMode}de={toggleMode} myStyle={myStyle} btnStyle={btnStyle} btnText={btnText}/> */}
    </div>
    </Router>
  );
}

export default App;

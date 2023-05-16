import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Application from './components/application'

import Info from './components/info';
import Todos from './components/todos';
import Posts from './components/posts';
import Albums from './components/albums';
import NotFound from './components/notfound';
import Photos from './components/Photos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/application/:id' element={<Application />} >
        <Route index path="/application/:id/info" element={<Info />} />
        <Route path="/application/:id/todos" element={<Todos />} />
        <Route path="/application/:id/posts" element={<Posts />} />
        <Route path="/application/:id/albums" element={<Albums />} />
        <Route path="/application/:id/albums/:id/photos" element={<Photos />} />
      </Route>
      <Route path='*' element={<NotFound />} />
              

    </Routes>
    
    </BrowserRouter>





    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

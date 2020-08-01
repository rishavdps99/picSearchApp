import React from 'react';
import './App.css';
import Search from './components/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import Navbar2 from './components/Navbar2';
//import CustomizedMenus from './components/demo';
//import Navbar2 from './components/Navbar2';
//import ButtonAppBar from './components/demo';
import PrimarySearchAppBar from './components/demo';

//import NewApp from './NewApp';

function App() {
  return (
    
    <MuiThemeProvider> 
    
    <div className="App">
    <PrimarySearchAppBar/>
    
    <Search/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
 
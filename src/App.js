import {Component} from 'react'

import SideBar from "./components/SideBar";

import SearchBar from './components/SearchBar'



import './App.css';

class App extends Component{

  

  render(){
    return(
      <div className='main-conatiner'>
        <div className='sidebar-container-box'><SideBar/></div>
        <div className='search-and-table-container'>
        <div className='product-searchbar-container'><SearchBar/></div>
        <hr className='hr-line' size='1'/>
        </div>
      </div>
    )
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
// import { robots } from './robots';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      Searchfield : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({robots : users});
    })
  }
  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({Searchfield: event.target.value}) //setting state of Searchfield
  }

  render(){
    const robotsFilter = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return(
        <h1 className='tc'>Loading ... </h1>
      );
    }
    else{
      return(
          <div className='tc'>
            <h1><span className='dark-red'>RoboFriends</span></h1>
            {/*<br/>*/}
            <SearchBox searchChange={this.onSearchChange}/>
            <br/>
            <Scroll className='ma10 pa5'>
              <ErrorBoundary>
                <CardList robots={robotsFilter}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
    }
  }
}
export default App;

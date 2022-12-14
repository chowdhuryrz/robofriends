import React, { Component } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import { robots } from "../robots";

class App extends Component {
  constructor() {

    super()
    this.state = {
      robots: robots, 
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))  
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div>
       < Navbar />
       <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        < CardList robots={filteredRobots} />
      </Scroll>
      </div>
    );
  }
  }

export default App;

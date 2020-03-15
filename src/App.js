import React,{Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:""
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
        
        console.log(robots)
    }
    componentDidMount(){
        /*
        fetch('https://jsonplaceholder.typeicode.com/users')
            .then(response=>{
                return response.json();
            }).then(users=>{
                this.setState({robots:users})
            })
        */
       this.setState({robots:robots})
        console.log("check");
    }
    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
           
            </div>  
        );
    
    }
    
}

export default App;
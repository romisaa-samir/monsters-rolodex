import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/searchBar/search-bar.component";
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    monsters: [],
    searchField:''
  };
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
  }
  handleChange =(e) => this.setState({ searchField: e.target.value })

  render() {
    const {monsters , searchField} = this.state
    const filterdMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <>
        <div className="App">
          <h1>Monster Relodex</h1>
          <SearchBar handleChange={this.handleChange} placeholder={"search monsters"}/>
          <CardList monsters={filterdMonsters} />
        </div>
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

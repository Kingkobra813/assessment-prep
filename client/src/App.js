import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import AddAnimalForm from './components/add-animal-form'

//url of the server is what we use for BASE_URL
const BASE_URL = 'http://localhost:3005'

class App extends Component {
  constructor () {
    super()
    this.state = {
      animals: [] 
    }
  }

  componentDidMount () {
    axios.get(BASE_URL + '/api/animals')
      .then(response => {
        this.setState({ animals: response.data })
      })
  }

  addAnimal = (animal) => {
    axios.post(BASE_URL + '/api/animals', animal)
      .then(response => {
        this.setState({ animals: response.data })
      })
  }

  render() {
    return (
      <div className="App">
        <div>
        {this.state.animals.map((animal) => {
          return (
            <div className="animal-card" key={animal.id}>
              <h1>{animal.name}</h1>
              <img src={animal.imageUrl} />
              {animal.isMammal ? <div>is mammal</div> : <div>is not mammal</div>}
              <button>Delete</button>
            </div>
          )

        })}
        </div>
        <AddAnimalForm addAnimal={this.addAnimal}/>
      </div>
    );
  }
}

export default App;






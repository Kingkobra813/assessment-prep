import React, { Component } from 'react'

class AddAnimalForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      imageUrl: '',
      isMammal: false
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleImageChange = (e) => {
    this.setState({ imageUrl: e.target.value })
  }

  handleButtonClick = () => {
    this.props.addAnimal(this.state)
    this.setState({
      name: '',
      imageUrl: '',
      isMammal: false
    })

  }

  render () {
    return (
      <div className="add-animal-form">
        <label>Name</label><input value={this.state.name} onChange={this.handleNameChange}/>
        <label>Image Url</label><input value={this.state.imageUrl} onChange={this.handleImageChange}/>
        <label>Is Mammal</label>
        <input 
          type="checkbox" 
          onChange={(e) => this.setState({ isMammal: !this.state.isMammal  })}
          checked={this.state.isMammal}
        />
        <button onClick={this.handleButtonClick}>Add Animal!</button>
      </div>
    )
  }
}

export default AddAnimalForm

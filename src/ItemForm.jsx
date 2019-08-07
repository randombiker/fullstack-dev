import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemForm extends Component {
  constructor() {
    super();

    this.state = {
      image: null,
      name: '',
      description: '',
      price: '',
      inventory: '',
    };
  }
  handleAddItem = async () => {
    const formData = new FormData();

    formData.append('image', this.state.image);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('inventory', this.state.inventory);
    const response = await fetch('/newListing', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    const responseBody = await response.json();

    this.props.dispatch({
      type: 'ADD_ITEM',
      item: responseBody.item,
    });

    this.props.history.replace('/');
  };

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  };

  handlePriceChange = (evt) => {
    this.setState({ price: evt.target.value });
  };

  handleImageChange = (evt) => {
    this.setState({ image: evt.target.files[0] });
  };

  handleInventoryChange = (evt) => {
    this.setState({ inventory: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.handleAddItem();
  };

  render() {
    return (
      <div className="sellForm">
        <form onSubmit={this.handleSubmit} className="inputs">
          <div>
            <label>
              <input
                type="text"
                placeholder="Name"
                onChange={this.handleNameChange}
                value={this.state.name}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="Description"
                onChange={this.handleDescriptionChange}
                value={this.state.description}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="Price"
                onChange={this.handlePriceChange}
                value={this.state.price}
              />
            </label>
          </div>
          <div>
            <label>
              <div className="upload-btn-wrapper">
                <button className="myButton">Upload a file</button>
                <input
                  type="file"
                  name="myfile"
                  onChange={this.handleImageChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="Inventory"
                onChange={this.handleInventoryChange}
                value={this.state.inventory}
              />
            </label>
          </div>
          <input className="myButton" type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(ItemForm);

import React from "react";

class ShoppingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id: 0
    }
  }

  getId = () => {
    this.setState({
      id: this.state.id + 1
    })
    return this.state.id;
  }

  handleTextChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleItemSubmit = (event) => {
    let item = {
      value: this.state.value,
      id: this.getId()
    }
    this.props.onItemAdd(item);
  }

  handleSearch = (event) => {
    this.props.onItemSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Write something"
          onChange={this.handleTextChange} />
        <button onClick={this.handleItemSubmit}>Add item</button>
        
        <h3>Search list</h3>
        <input 
          type="text"
          placeholder="Search..."
          onChange={this.handleSearch} />
      </div>
    )
  }
}

function ShoppingItem(props) {
  let handleDelete = () => props.onItemDelete(props.item.id)
  return (
    <li>
      {props.item.value} <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchQuery: ''
    }
  }

  handleAddItem = (item) => {
    this.setState({
      items: this.state.items.concat(item)
    })
  }
  
  handleDeleteItem = (itemValue) => {
    let updatedList = this.state.items.filter(item => item.id != itemValue );
    this.setState({
      items: updatedList
    })
  }

  handleSearchItem = (query) => {
    this.setState({
      searchQuery: query
    })
  }

  render() {
    let list = this.state.items.filter(item => item.value.includes(this.state.searchQuery))
    return (
      <div>
        <h1>Shopping List</h1>
        <ShoppingForm onItemAdd={ this.handleAddItem } onItemSearch={this.handleSearchItem}/>
        <ul>
          {
            list.map(item => {
              return ( <ShoppingItem 
                          key={item.id} 
                          item={item}
                          onItemDelete={this.handleDeleteItem} /> )
            })
          }
        </ul>
      </div>
    )
  }
}


export default function App() {
  return (
    <ShoppingList />
  )
}
import React from 'react';

const listItems = (text) => {
  return (
    <p>{text}</p>
  )
}

// const todoListHeader = (headerText) => {
//   return (
//     <h3>{headerText}</h3>
//   )
// }

const todoList = (alist) => {

  return (
    <div>
      {alist.listItems.map(listItems)}
    </div>
  )
}

// const todoListContainer = (lists, addNewItemAtIndex) => {
//   return (
//     <div>
//       {lists.map(todoList)}
//     </div>
//   )
// }

class ListItemsForm extends React.Component {

  state = {
    newItemText: ""
  }

  handleInputChange = (evnt) => {
    this.setState({ newItemText: evnt.target.value })
  }

  handleFormSubmission = (evnt) => {
    evnt.preventDefault();

    this.props.addNewListItemsText(this.state.newItemText)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input 
          type="text" 
          placeholder="new item" 
          value={this.state.newItemText}  
          onChange={this.handleInputChange}
        />
        <input type="submit" value="add item" />
      </form>
    )
  }
}

class App extends React.Component {

  state = {
    todoList:
    {listItems: [""]}
  }

  addNewItem = (newItemText) => {

    let todoList = {...this.state.todoList}

    todoList.listItems.push(newItemText)

    this.setState({ todoList })
    
  }

  render() {
    return (
      <div>
        {/* <h1>My Todo Lists</h1> */}
        <ListItemsForm 
          addNewListItemsText={this.addNewItem}
        />
        {todoList( this.state.todoList )}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react'
import User from "./user";

const getActivitiesFromServer = () => 
    fetch('/api/helloworld/activites') //activites is a "prefix"
        .then(res => res.json())

const getSingleActivity = (id) =>
    fetch(`/api/helloworld/activites/${id}`)

class App extends Component {
    state = {
        title: "placeholder title"
    }

    componentDidMount() {
        this.setActivitiesFromServer();
    }

    setActivitiesFromServer () {
        getActivitiesFromServer.then(allActivities => {
            
        })
    }

    changeTheWorld = (newTitle) => {
        this.setState({title:newTitle})
    }
    render() {
        return (
            <div className="App">
                <Review doWhatever={this.changeTheWorld.bind(this, "newWorld")} title={this.state.title}/>
            </div>
        )
    }
}

export default App
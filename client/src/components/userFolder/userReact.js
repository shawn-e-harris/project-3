import React from 'react'

const getActivitiesFromServer = () => 
    fetch('/activites') //activites is a path "prefix"
        .then(res => res.json())

const getSingleActivity = (id) =>
    fetch(`/activites/${id}`)

export default class App extends Component {
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
                Hellooooooo
                <User />
                {/* <User doWhatever={this.changeTheWorld.bind(this, "newWorld")} title={this.state.title}/> */}
            </div>
        )
    }
}


userRouter.get("/users", function (req, res) {
  userApi.getAllUsers()
    .then((allUsers) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allUsers })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

const getActivitiesFromServer = () =>
{    
fetch('/users')
      .then(res => 
        res.json()
      )
      .then (
      return
      )
      .catch((error) => {
        console.log(error)
      })
}

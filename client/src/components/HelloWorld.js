// /* Step 1 import React, { Component } and axios
//  *
//  */
// import React, { Component } from 'react'
// // import axios from 'axios'

// /* Step 2
//  * Rename this class to reflect the component being created
//  *
//  */
// export default class HelloWorld extends Component {

//     /* Step 3
//     * Create a state for the component to store view data
//     *
//     */
//     state = {
//         message: 'hello world'
//     }

//     /* Step 4
//     * Use componentDidMount to retrieve any data to display
//     *   Here you can make calls to your local express server
//     *   or to an external API
//     *   setState can be run here as well
//     *   -REMINDER remember `setState` it is an async function
//     */
//     // componentDidMount() {
//     //     axios.get('/api/helloworld')
//     //         .then((res) => {
//     //              this.setState({message: res.data})
//     //         })
//     // }

//     /* Step 5
//     *  The render function manages what is shown in the browser
//     *  TODO: delete the jsx returned
//     *   and replace it with your own custom jsx template
//     *
//     */
//     render() {
//         return (
//             <div>
//                 {/* Accessing the value of message from the state object */}
//                 <h1>{this.state.message}</h1>
//             </div>
//         )
//     }
// }


// *************************************************************************

// import './App.css';
import React, { Component } from 'react'

let sum = (grades) => grades.reduce((previousGrades, currentGrade) => currentGrade += previousGrades);
// console.log(sum)
let average = (grades) => grades.length < 1 ? 0 : Number(sum(grades) / grades.length);
// pointless to console.log here because nothing is happening yet
// console.log(average([9, 7, 3]))
const courseListContainer = (allCourses) => {
  return (
    <div>
      {allCourses.map(listItem)}
    </div>
  )
}
const assignmentComponent = (singleAssignment) => {
  return (
    <div>
      <li>{singleAssignment.assignmentName}</li>
      {/* <li>{singleAssignment.assignGrade}</li> */}
    </div>
  )
}
const listItem = (courseObj) => {
  return (
    <div>
      <h2>{courseObj.courseName}</h2>
      <h4>Average: {average(courseObj.assignments.map((v) => v.assignGrade))}% </h4>
      <ul>Assignment: {courseObj.assignments.map(assignmentComponent)}</ul>
    </div>
  )
}
class App extends React.Component {
  state = {
    courses: [
      {
        courseName: "Math",
        assignments: [
          {
            assignmentName: "Exam 1",
            assignGrade: 92
          },
        ],
      },
      {
        courseName: "Bio",
        assignments: [
          {
            assignmentName: "Lab 1",
            assignGrade: 90
          },
        ],
      },
      {
        courseName: "Hist",
        assignments: [
          {
            assignmentName: "WW1",
            assignGrade: 91
          },
        ],
      },
      {
        courseName: "Lit",
        assignments: [
          {
            assignmentName: "Essay 1",
            assignGrade: 94
          },
        ],
      }
    ]
  }
  //to add new item to the to do list
  addNewAssignment = (newAssignmentData, courseIndex) => {
    //... = a spread operator that will create a brand new list 
    //create a copy of our todo list
    let courses = [...this.state.courses]//[...this.state.todoList.listItems]
    console.log(newAssignmentData, courseIndex)
    // change typeOf newAssignmentData.assignGrade to a string
    newAssignmentData.assignGrade = Number(newAssignmentData.assignGrade);
    console.log(newAssignmentData, courseIndex)
    //push new item text into the listItems array
    // don't need newAssignmentData because courseIndex is now being called in teh parameters
    courses[courseIndex].assignments.push(newAssignmentData)
    //modify state using setState
    this.setState({ courses })
  }

  
  render() {
    return (
      <div className="">
        <h1 className="title">Fall 2019</h1>
        <AssignmentForm
          newAssignment={this.addNewAssignment}
        />
        <ul>
          {courseListContainer(this.state.courses)}
        </ul>
      </div>
    );
  }
}
class AssignmentForm extends React.Component {
  // must get specific state of properties
  state = {
    newAssignment: {
      assignmentName: "",
      assignGrade: 0,
    },
    courseIndex: 0
  }
  handleAssignmentInputChange = (event) => {
    let newAssignment = { ...this.state.newAssignment }
    newAssignment[event.target.name] = event.target.value;
    this.setState({ newAssignment })
  }
  // handleAssignmentGradeInputChange = (event) => {
  //   let newAssignment = {...this.state.newAssignment}
  //   newAssignment[event.target.grade] = event.target.value;
  //   this.setState({ newAssignment })
  // }
  handleCourseIndex = (event) => {
    // newAssignment[event.target.name] = event.target.value;
    this.setState({ courseIndex: event.target.value })
  }
  handleFormSubmission = (event) => {
    event.preventDefault();
    // not changing this.state, you're passing it
    this.props.newAssignment(this.state.newAssignment, this.state.courseIndex)
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input
          type="text"
          placeholder="Assignment"
          name="assignmentName"
          value={this.state.assignmentName}
          onChange={this.handleAssignmentInputChange}
        />
        <input
          type="number"
          placeholder="Grade"
          name="assignGrade"
          value={this.state.assignGrade}
          onChange={this.handleAssignmentInputChange}
        />
        {/* <select> */}
          
        <input
          type="text"
          placeholder="Course"
          value={this.state.courseIndex}
          onChange={this.handleCourseIndex}
        />
          
        {/* </select> */}
        <input type="submit" placeholder="Add" />
      </form >
    )
  }
}
export default App;
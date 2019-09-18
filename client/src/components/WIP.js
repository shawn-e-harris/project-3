import React, { Component } from 'react'

let sum = (grades) => grades.reduce((previousGrades, currentGrade) => currentGrade += previousGrades);
// console.log(sum)
let average = (grades) => grades.length < 1 ? 0 : Number(sum(grades) / grades.length);
// pointless to console.log here because nothing is happening yet
// console.log(average([9, 7, 3]))
const courseListContainer = (allCourses) => {
    console.log(allCourses)
    return (
        <div> 
            {(allCourses) ? allCourses.map(listItem) : "Courses Not Found"}
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


    // addNewCourse = (newCourseData, courseIndex) => {
    //     //... = a spread operator that will create a brand new list 
    //     //create a copy of our todo list
    //     let courses = [...this.state.courses]//[...this.state.todoList.listItems]
    //     console.log(newCourseData, courseIndex)
    //     // change typeOf newAssignmentData.assignGrade to a string
    //     // newAssignmentData.assignGrade = Number(newAssignmentData.assignGrade);
    //     // console.log(newAssignmentData)
    //     //push new item text into the listItems array
    //     // don't need newAssignmentData because courseIndex is now being called in teh parameters
    //     courses[courseIndex].courseName.push(newCourseData)
    //     console.log(newCourseData, courseIndex)
    //     //modify state using setState
    //     this.setState({ courses })
    // }

    addNewCourse = (newCourseName) => {
        let courses = [...this.state.courses]
        console.log(newCourseName)
        courses.push(newCourseName)
        this.setState({ courses })

    }


    render() {
        // called  as function called addNewCourse
        return (
            <div className="">
                <h1 className="title">Fall 2019</h1>
                <AssignmentForm
                    newCourse={this.addNewCourse}
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
        newCourseName: "",
        newAssignment: {
            assignmentName: "",
            assignGrade: 0,
        },
        courseIndex: 0
    }

// componentDidMount() {
//     this.getAppCourseWork()
// }

// getAppCourseWork() {
//     getAllCoursework()
//         .then(courses => Promise.all(courses.map(getAssignmentsForCourse)))
//         .then(courses => {
//             this.setState({ courses: [...courses] })
//         })
// }

    handleCourseInputChange = (event) => {

        let newCourseName = event.target.value;
        this.setState({ newCourseName })
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

    handleCourseFormSubmission = (event) => {
        event.preventDefault();
        this.props.newCourse(this.state.newCourse)
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        // not changing this.state, you're passing it
        this.props.newAssignment(this.state.newAssignment, this.state.courseIndex)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleCourseFormSubmission}>
                    <input
                        type="text"
                        placeholder="Course Name"
                        name="newCourseName"
                        value={this.state.courseName}
                        onChange={this.handleCourseInputChange}
                    />
                    <input type="submit" placeholder="Add Class" />
                </form >

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

                    <input
                        type="text"
                        placeholder="Course"
                        value={this.state.courseIndex}
                        onChange={this.handleCourseIndex}
                    />

                    <input type="submit" placeholder="Add Assignment" />
                </form >
            </div>
        )
    }
}
export default App;


// *********************************************************************************

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import React, { Component } from 'react'

// const assignment = ({ name, grade }) =>
//     (<li>{name} - {grade}</li>)

// const assignmentList = (assignments) => (
//     <ul>
//         {assignments.map(assignment)}
//         {/* assignments.map(x => assignment(x)) */}
//     </ul>
// )

// const averageOfAssignments = (assignments) =>
//     assignments.length < 1 ? 0
//         : assignments.reduce((curSum, assignment) => curSum + assignment.grade, 0) / assignments.length

// const courseAverage = (assignments) => (
//     <p>Average: {averageOfAssignments(assignments)}</p>
// )

// const course = ({ name, assignments }) => (
//     <div>
//         <h3>{name}</h3>
//         {courseAverage(assignments)}
//         {assignmentList(assignments)}
//     </div>
// )

// const courseList = (courses) =>
//     (<div>{courses.map(course)}</div>)

// const courseOption = (selectedId) => ({ name, _id }) => (
//     <option
//         value={_id}
//         selected={selectedId === _id}
//     >
//         {name}
//     </option>
// )

// const courseNameDropDown = (courses, selectedId, onChange) => (
//     //   <select name="courseworkId" onChange={onChange} >
//     //     {courses.map(courseOption(selectedId))}
//     //   </select>
//     <input
//         type="text"
//         name="courseworkId"
//         onChange={this.handleChange}
//         placeholder="Assignment Grade"
//     />
// )

// class NewAssignmentForm extends React.Component {

//     state = {
//         newAssignment:
//         {
//             name: "",
//             grade: 0,
//             courseWorkId: this.props.courses.length < 1 ? null : this.props.courses[0]._id
//         },
//     }

//     handleChange = (evnt) => {
//         //1. copy from state
//         let newAssignment = { ...this.state.newAssignment }

//         //2. modify state
//         newAssignment[evnt.target.name] = evnt.target.value

//         //3. setState
//         this.setState({ newAssignment })
//     }

//     handleSubmit = (evnt) => {
//         evnt.preventDefault();

//         this.props.addAssignment(this.state.newAssignment)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 {courseNameDropDown(this.props.courses, this.state.newAssignment.courseWorkId, this.handleChange)}
//                 <input
//                     type="text"
//                     name="name"
//                     onChange={this.handleChange}
//                     placeholder="Assignment Name"
//                 />
//                 <input
//                     type="number"
//                     name="grade"
//                     onChange={this.handleChange}
//                     placeholder="Assignment Grade"
//                 />
//                 <input type="submit" value="+" />
//             </form>
//         )
//     }
// }

// const getAllCoursework = () =>
//     fetch('/coursework')
//         .then(res => res.json())
//         .catch(() => []) //if an error occurs then return an Promise that resolves to an empty array

// const getFirstCourseWork = () =>
//     getAllCoursework().then(cw => cw.length < 1 ? { name: "N/A", assignments: [] } : cw[0])

// const getAssignmentsByCourseId = (courseId) =>
//     fetch(`/assignment/coursework/${courseId}`)
//         .then(res => res.json())
//         .catch(() => [])

// const getAssignmentsForCourse = (course) =>
//     getAssignmentsByCourseId(course._id)
//         .then(assignments => ({ assignments, ...course }))

// const saveAssignment = (assignment) =>
//     fetch('/assignment',
//         {
//             method: 'POST'
//             , headers: { 'Content-Type': 'application/json' }
//             , body: JSON.stringify(assignment)
//         }
//     )

// class App extends React.Component {
//     state =
//         {
//             courses: []
//         }

//     componentDidMount() {
//         this.getAppCourseWork()
//     }

//     getAppCourseWork() {
//         getAllCoursework()
//             .then(courses => Promise.all(courses.map(getAssignmentsForCourse)))
//             .then(courses => {
//                 this.setState({ courses: [...courses] })
//             })
//     }

//     addNewAssignment = (createdAssignment) => {

//         createdAssignment.grade = Number.parseInt(createdAssignment.grade)
//         createdAssignment.courseworkId = this.state.course._id

//         saveAssignment(createdAssignment)
//             .then(() => this.getAppCourseWork())
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.courses ? <NewAssignmentForm courses={this.state.courses} addAssignment={this.addNewAssignment} />
//                     : null
//                 }
//                 {courseList(this.state.courses)}
//             </div>
//         )
//     }
// }

// export default App;
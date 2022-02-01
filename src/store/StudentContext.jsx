import React from "react";
import { createContext } from "react";
const StudentContext= createContext({
    studentsList:[],
    studentsCount :0
})  // return component

export function StudentContextProvider(props){
    const [studentsList,setStudentList]=useState([]);
    const addStudent=(student)=>{
        setStudentList([
        ...studentsList,
        student
    ])
    };
    const context={
        studentsList:studentsList,
        studentsCount :studentsList.length,
        addStudent
    };
    return <StudentContext.Provider value={context}>
        {props.childern}

    </StudentContext.Provider>
}
export default StudentContext;

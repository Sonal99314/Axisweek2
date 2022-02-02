import React from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = [
  {
    name: "Sharat",
  },
  {
    name: "Bharat",
  },
];

const StudentContext = createContext({
  studentsList: [],
  studentsCount: 0,
  addStudent: () => {}
});

export function StudentContextProvider(props) {
  const [studentsList, setStudentsList] = useState(initialState);

  const addStudent = (student) => {
    setStudentsList([...studentsList, student]);
  };

  const context = {
    studentsList: studentsList,
    studentsCount: studentsList.length,
    addStudent,
  };

  return (
    <StudentContext.Provider value={context}>
      {props.children}
    </StudentContext.Provider>
  );
}

export default StudentContext;
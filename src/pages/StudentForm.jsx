import React, { useContext } from "react";
import { useState } from "react";
import StudentContext from "../store/StudentContext";

const StudentForm = () => {
  const [name, setName] = useState();
  const ctx = useContext(StudentContext);
  return (
    <div style={{ border: "2px solid black", margin: "15px" }}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          ctx.addStudent({ name });
        }}
      >
        Add Student
      </button>
    </div>
  );
};

export default StudentForm;
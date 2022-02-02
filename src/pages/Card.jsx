import React, { useContext } from "react";
import StudentContext from "../store/StudentContext";

export default function Card(props) {
  const ctx = useContext(StudentContext);
  console.log(ctx)

  return (
    <div style={{ border: "2px solid black", margin: "15px" }}>
      <h3>Card Component {props.name}</h3>
      {ctx.studentsList.map((student) => {
        return <h5>{student.name}</h5>;
      })}
    </div>
  );
}
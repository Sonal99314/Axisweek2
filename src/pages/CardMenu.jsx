import React from "react";
import Card from "./Card";
import StudentForm from "./StudentForm";

export default function CardMenu() {
  return (
    <div>
      <StudentForm />
      <Card name="1" />
      <Card name="2" />
      <Card name="3" />
      <Card name="4" />
    </div>
  );
}
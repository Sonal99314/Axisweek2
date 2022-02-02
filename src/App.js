//import logo from './logo.svg';
//import './App.css';
/*
import ContentBox from "./components/ContentBox";
import ContentBoxinput from "./components/ContentBoxinput";
import StudentTable from "./components/StudentTable";
import Table from "./components/Table";
import Form from "./pages/form";

//import day4 from "./Day4";

function App() {
  const studentList=[
    {slno:"1",
    name:"sonal",
    gender:"female"},
    {slno: "2",
  name:"neha",
gender:"female"},

];
  return (
    <div>
      
    
     <ContentBox message="From props message 3"/>
      <ContentBoxinput/>
      <Table/>
      <StudentTable  data={studentList}/>
      
       <>
        <h2>Hello World</h2>
        </>
    <Form/>
      
    </div>
    
    
  );
}
export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

import form from "./pages/form";
import PromiseDemo from "./pages/PromiseDemo";
import StudentsTable from "./pages/StudentsTable";
import { StudentContextProvider } from "./store/StudentContext";
import CardMenu from "./pages/CardMenu";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Routes>
         
          
          <Route exact path="/form" element={<form />} />
          <Route exact path="/promise" element={<PromiseDemo />} />
          <Route exact path="/studentstable" element={<StudentsTable />} />
          <Route exact path="/card" element={<CardMenu />} />
        </Routes>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;*/

import Message from './components/Message';
import React from 'react';
import Greet from './components/Greet';
import TableA from './components/TableA';
function App(){
 return(
   <div>
    <TableA/>
     
   </div> 
  );
} export default App;
// <Greet />
// <Message name="sonal"/>
// <Message/>
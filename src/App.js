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
export default App;*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentTable from "./components/StudentTable";

import Form from "./pages/form";
import PromiseDemo from "./pages/PromiseDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Form />} />
        <Route exact path="/" element={<PromiseDemo />} />
         
        <Route exact path="/" element={<StudentTable />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
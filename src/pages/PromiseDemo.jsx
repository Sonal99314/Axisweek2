import React from "react";
import { getStudentsData } from "../utils/api";
export default function PromiseDemo(){
    //const res =getStudentsData();
    //console.log(res)
    getStudentsData().then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

    const getData=()=>{
        const studentData= getStudentsData()
    }
    return <div>
    
    </div>;
}
//

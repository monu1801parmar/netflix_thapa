import React from "react";
import './App.css'
import Cards from "./Cards";
import Sdata from "./Sdata";

export default function App()

{

  return<>
  <h1 className="heading">Lists of Top Netflix Series</h1>
    <Cards img={Sdata[0].imgsrc} 
    title={Sdata[0].title}
    sname={Sdata[0].sname} 
    link={Sdata[0].links} />

    <Cards img={Sdata[1].imgsrc} 
    title={Sdata[1].title}
    sname={Sdata[1].sname} 
    link={Sdata[1].links} />

    <Cards img='vampire.jpg'
     title='Netflix Original Series'sname='Vampire Diries'/>
  </>
}
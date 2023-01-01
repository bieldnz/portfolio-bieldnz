import React from 'react'
import StyleProjects from "../style/projects.module.css"
import Card from './Card'
import { forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = (props, ref) => {

  const myStyle = {
    backgroundColor: "#9A65A8",
    color: "#E5ABF5"
  }

  return (
    <div className={StyleProjects.all}>
        <h1 className={StyleProjects.projectTittle} ref={ref}>PROJETOS</h1>
        <div className={StyleProjects.boxCardProjects}>
        <Card icon={<b className={StyleProjects.breve}>EM BREVE</b>} myStyle={myStyle}/>
        <Card icon={<b className={StyleProjects.breve}>EM BREVE</b>} myStyle={myStyle}/>
        <Card icon={<b className={StyleProjects.breve}>EM BREVE</b>} myStyle={myStyle}/>
        </div>
    </div>
  )
}

export default React.forwardRef(Projects);
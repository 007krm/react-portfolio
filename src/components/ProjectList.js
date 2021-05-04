import React from "react";
import { ListGroup } from "react-bootstrap";
import Project from "./Project";

function ProjectList() {
  return (
    <div>
      <ListGroup>
        <Project
          name="Code Quiz"
          projectUrl="https://007krm.github.io/code-quiz-homework/"
        />
        <Project
          name="Day Scheduler "
          projectUrl="https://007krm.github.io/Day-Scheduler/"
        />
        <Project
          name="Weather Dashboard"
          projectUrl="https://007krm.github.io/Weather-Dashboard/"
        />
        <Project
          name="Password Generator"
          projectUrl="https://007krm.github.io/Password-Generator-Homework/"
        />
        <Project
          name="Page Turner (Group Project)"
          projectUrl="https://page-turner-mj-ed-kr.herokuapp.com/"
        />
        <Project
          name="Dinner With Kanye And Taylor (Group Project)"
          projectUrl="https://emacartoon.github.io/Dinner-with-K-T/"
        />
      </ListGroup>
    </div>
  );
}

export default ProjectList;

import React from "react";
import "./Skills.css";
import { useLoaderData } from "react-router-dom";
import SingleSkill from "../SingleSkill/SingleSkill";
const Skills = () => {
    const skills=useLoaderData()
  return (
    <div className="md:grid grid-cols-2 gap-5 mx-10 place-items-center my-7">
        {
        skills.map(skill=><SingleSkill {...skill}></SingleSkill>)
        }
    </div>
  );
};

export default Skills;

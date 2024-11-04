import React from "react";
import { HoverEffect } from "./ui/SkillsDisplay";
import { skills } from "@/data";
const Skills = () => {
  return (
    <section id="skills">
      <div className="flex justify-center">
        <h1 className="heading lg:max-w-[45vw]">
          My <span className="text-purple">Skills </span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </section>
  );
};

export default Skills;

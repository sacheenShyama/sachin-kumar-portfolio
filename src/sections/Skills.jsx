import React from "react";
import TitleHeader from "../components/TitleHeader";
import ScrambledText from "../../TextAnimation/ScrambledText/ScrambledText";
import { technicalSkills } from "../constants";
const Skills = () => {
  return (
    <section
      id="skills"
      className="
    flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-55">
        <TitleHeader title={"Technical skills"} sub={"Tech stacks"} />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-12">
            <div className="  rounded-xl p-10">
              {technicalSkills.map((skill) => (
                <div key={skill.main} className="mb-10">
                  <h1 className="font-semibold md:text-3xl text-3xl text-start mb-2">
                    {skill.main}
                  </h1>
                  <ul className=" space-y-1   list-inside">
                    <li className="md:text-xl">{skill.skills.join(",  ")}</li>
                  </ul>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

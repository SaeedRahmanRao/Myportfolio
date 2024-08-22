import React from "react";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "React-Native" },
  { skill: "Python" },
  { skill: "Streamlit" },
  { skill: "Generative AI" },
  { skill: "C++" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Saeed and I am a
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Web Developer
            </p>
            <br />
            <p>
              I am an undergraduate Computer Science student at the University
              of Central Punjab in Lahore, Pakistan.
            </p>
            <br />
            <p>
              My proficiency in multiple programming languages and hands-on
              experience with web development tools like Next.js have further
              enhanced my technical capabilities.
            </p>
            <br />
            <div className="flex">
              <p>
                In addition to my academic journey, I have taken the initiative
                to share my knowledge by teaching Design and Analysis of
                Algorithms and Operating Systems (Ubuntu) on my YouTube channel,
                Reviving Skills.
                <a
                  href="https://youtube.com/@revivingskills?si=xw0iAPjpfRKE5N5h"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineYoutube
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                    size={30}
                  />
                </a>
              </p>
            </div>
            <br />
            <p>
              I believe that you should&nbsp;
              <span className="font-bold text-teal-500">
                never stop growing
              </span>
              &nbsp;and that&apos;s what I strive to do,I am excited to see
              where my career takes me and am always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/avatar.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-45 md:z-0 md:top-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

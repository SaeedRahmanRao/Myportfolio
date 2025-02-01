import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "SkyCast Weather App",
    description:"I developed SkyCast, a weather app built with Next.js, Tailwind CSS, ShadCN, Chart.js, and Leaflet. The app allows users to search for any city to view real-time weather updates, including temperature, humidity, wind speed, and rain chances. I integrated air quality data, showing pollutants like CO, NO₂, and PM2.5, to provide users with a comprehensive view of environmental conditions. Hourly and daily forecasts are displayed using interactive graphs powered by Chart.js, while the map feature, using Leaflet, enables users to explore weather patterns and data geographically. Tailwind CSS ensures the app has a sleek, responsive design, and I used ShadCN to enhance UI components for a polished and user-friendly experience.",
    image: "/weather.png",
    github: "https://github.com/SaeedRahmanRao/skycast.git",
    link: "https://skycast-er6c-git-main-saeed-ur-rahmnas-projects.vercel.app/",
  },
  {
    name: "Sales Dashboard",
    description:"I’ve developed a Sales Dashboard Analysis using Streamlit, Plotly, and Python, designed to process and visualize large sales datasets. The interactive dashboard offers insights into key metrics such as total sales, product ratings, sales tax distribution across cities, and time series analysis. Additionally, I implemented K-Nearest Neighbors (KNN) for predictive analysis.This project showcases my ability to combine data analysis, visualization, and machine learning to present actionable business insights in an engaging, user-friendly interface.",
    image: "/bigdata.png",
    github: "https://github.com/SaeedRahmanRao/SalesDashboardProject.git",
    link: "https://bigdataproject-ogsu4xj7fu5bwwaetpfszw.streamlit.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "Developed a full-stack issue tracker using Next.js, featuring user authentication with NextAuth, and database management with Prisma and MySQL. Implemented core functionalities including issue creation, updating, viewing, and deletion. Enhanced user experience with advanced features such as sorting, filtering, and editing issues. Also integrated graphical data representation for tracking progress. Leveraged multiple libraries to optimize performance and scalability. Deployment is currently under maintenance, and I will update once it is live",
    image: "/nextapp.png",
    github: "https://github.com/SaeedRahmanRao/issue-tracker",
    link: "https://issue-tracker-njmg.vercel.app/",
  },
  {
    name: "Billing Receipt Generator",
    description:"This project is a Point of Sale (POS) system built with Next.js for generating billing receipts in a real-time market environment. The system includes comprehensive functionalities for processing sales transactions, applying discounts, and calculating sales tax based on user selection (5% or 16%). It integrates with Pakistan Revenue Authority (PRA) policies for compliance, ensuring that receipts follow local tax regulations. The solution supports real-time receipt generation, displays detailed transaction summaries, and includes features like discount input, tax calculation, and dynamic price adjustments before tax.",
    image: "/pos.png",
    github: "https://github.com/SaeedRahmanRao/PizzaPOS.git",
    link: "https://doughjoe-pos-by-samspace.vercel.app/",
  },
  {
    name: "Web-Based Social Media Application",
    description:
      "This social media app offers Google account login for easy access. Users can create, like, and dislike posts, fostering meaningful interactions. Logging out is a simple process, prioritizing privacy and user experience.Project Github repo in unavaiable.I will update it soon",
    image: "/reactappp.png",
    github: "https://github.com/SaeedRahmanRao/socialmediaapp.git",
    link: "https://first-project-db276.firebaseapp.com/",
  }
  

];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" mt-10 md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

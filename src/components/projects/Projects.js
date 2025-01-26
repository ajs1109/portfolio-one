import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real-Time Chat Application"
          des="A full-stack communication platform built with MERN stack, featuring WebSocket integration for real-time messaging and secure JWT authentication."
          src={projectOne}
          github='https://github.com/ajs1109/chat-engine'
          link='https://chat-engine-lyart.vercel.app'
        />
        <ProjectsCard
          title="Advanced Video Streaming Platform"
          des="A high-concurrency video streaming platform with intelligent content recommendation, built using React and optimized for performance and scalability."
          src={projectTwo}
          github='https://github.com/ajs1109/youtube-clone'
          link='https://youtube-clone-rust-chi.vercel.app'
        />
        <ProjectsCard
          title="Multiplayer Typing Assessment Tool"
          des="A typing performance tracking tool offering real-time multiplayer functionality and granular skill analysis, built with NEXTJS and Tailwind CSS."
          src={projectThree}
          github='https://github.com/ajs1109/rapid-keys-client'
          link='https://chat-engine-lyart.vercel.app'
        />
      </div>
    </section>
  );
};

export default Projects;
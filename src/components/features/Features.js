import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaDatabase, FaCode, FaServer, FaGlobe, FaLaptopCode, FaTachometerAlt, FaTools } from "react-icons/fa";
import { SiMongodb, SiReact, SiPostgresql, SiDotnet } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="Building scalable web applications using modern frameworks like React, Next.js, and ASP.NET MVC with backend expertise in Node.js and C#."
          icon={<SiReact />}
        />
        <Card
          title="Database Management"
          des="Designing and optimizing relational and non-relational databases including PostgreSQL, MongoDB, and MS SQL to ensure data integrity and performance."
          icon={<FaDatabase />}
        />
        <Card
          title="API Development"
          des="Creating robust and secure RESTful APIs using Node.js, Express.js, and ASP.NET, ensuring seamless communication between systems."
          icon={<FaServer />}
        />
        <Card
          title="Cloud Deployment & Hosting"
          des="Deploying applications on cloud platforms like Vercel and Render with Docker integration, ensuring high availability and scalability."
          icon={<FaGlobe />}
        />
        <Card
          title="Performance Optimization"
          des="Implementing code and database optimization strategies to improve application efficiency, reducing loading times and overhead."
          icon={<FaTachometerAlt />}
        />
        <Card
          title="Software Development"
          des="Crafting software solutions with strong foundations in algorithms and advanced development methodologies using .NET and C#."
          icon={<FaCode />}
        />
      </div>
    </section>
  );
};

export default Features;

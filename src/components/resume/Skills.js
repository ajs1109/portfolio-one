import React from 'react'
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Language Skills</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <SkillBar name='JavaScript' percent='95' />
          <SkillBar name='PostgreSql' percent='80' />
          <SkillBar name='Java' percent='90' />
          <SkillBar name='C#' percent='80' />
          <SkillBar name='SQL' percent='80' />
          <SkillBar name='MongoDB' percent='80' />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Framework Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar name='React' percent='95' />
          <SkillBar name='NextJS' percent='90' />
          <SkillBar name='ASP.NET MVC' percent='80' />
          <SkillBar name='NodeJS' percent='90' />
          <SkillBar name='ExpressJS' percent='90' />
          <SkillBar name='AngularJS' percent='80' />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { workprojects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  url,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-full sm:w-[300px]"
    >
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary h-full rounded-2xl p-5">
          <div
            className="relative h-[230px] w-full cursor-pointer"
            onClick={() => url && window.open(url, '_blank')}
          >
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={e => {
                  e.stopPropagation();
                  window.open(sourceCodeLink, '_blank');
                }}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {url && (
              <button
                onClick={() => window.open(url, '_blank')}
                className="mt-3 flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-700"
              >
                View Project
              </button>
            )}
            <button
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="mt-3 flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-700"
            >
              <img src={github} alt="github" className="h-5 w-5" />
              View Code
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const WorkProject = () => {
  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {workprojects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(WorkProject, 'work');

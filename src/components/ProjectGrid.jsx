import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => (
  <div style={{
    display: 'grid',
    gap: '1.5rem',
    placeContent: 'start',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  }}
  >
    {projects.map((project, index) => (
      <ProjectCard
        key={`project_${index}`}
        title={project.title}
        image={project.image}
        description={project.description}
        links={project.links ?? []}
      />
    ))}
  </div>
);

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectGrid;

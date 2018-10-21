import React from 'react';
import { creations } from './details';
import Card from './Card';
import './styles.css';

const Projects = () => {
  const nProjects = creations[0];
  const oProjects = creations[1];
  return (
    <div>
      <div>
        <div className='center-text'>
          <h2 style={{ margin: 0 }}> {'Recent Projects'} </h2>
          <h4>{'Sept. 2017 - present'}</h4>
        </div>
        <div className='project-row'>
          {
            nProjects.map((item) => <Card key={item.name} cardData={item} />)
          }
        </div>
      </div>

      <div>
        <div className='center-text'>
          <h2 style={{ margin: 0 }}> {'Other Work'} </h2>
          <h4>{'Aug. 2008 - June 2011'}</h4>
        </div>
        <div className='project-row'>
          {
            oProjects.map((item) => <Card key={item.name} cardData={item} />)
          }
        </div>
      </div>

    </div>
  )
}
export default Projects;

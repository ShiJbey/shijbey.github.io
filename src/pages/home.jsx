import * as React from 'react';
import ReactDom from 'react-dom';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';
import ProjectGrid from '../components/ProjectGrid';
import projects from '../data/projects';
import PublicationTable from '../components/PublicationTable';
import publications from '../data/publications';

(() => {
  ReactDom.render(<Toolbar />, document.getElementById('toolbar'));
  ReactDom.render(<Footer />, document.getElementById('footer'));
  ReactDom.render(<ProjectGrid projects={projects} />, document.getElementById('project-container'));
  ReactDom.render(<PublicationTable publications={publications} />, document.getElementById('publication-container'));
})();

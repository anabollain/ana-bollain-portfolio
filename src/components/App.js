import React from 'react';
//react libraries
import { useState } from 'react';
//services
import projectData from '../data/projects';
//import ls from '../services/localStorage';
//components
import Header from './Header';
import ProjectList from './ProjectList';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';
//routes
import { Routes, Route } from 'react-router-dom';
//styles
import '../styles/App.scss';


function App() {

  //STATE VARIABLES
  const [selectedType, setSelectedType] = useState( 'All');
  const [navMenu, setNavMenu] = useState(false);

  //EVENT FUNCTIONS
  const handleFilterProject = (value) => {
    setSelectedType(value);
  }

  const handleNavMenu = (value) => {
    setNavMenu(value);
  }

  //RENDER FUNCTIONS
  const renderFiltered = () => {
    if (selectedType === 'All') {
      return projectData;
    } else {
      return projectData.filter((each) => each.type === selectedType);
    }
  }

  //RETURN
  return (
    <>
      <Header navMenu={navMenu} handleNavMenu={handleNavMenu} />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/projects' element={<ProjectList projectData={renderFiltered()} handleFilterProject={handleFilterProject} type={selectedType} />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

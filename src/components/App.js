import React from 'react';
//react libraries
import { useState } from 'react';
//services
import projectData from '../data/projects';
import ls from '../services/localStorage';
//components
import Header from './Header';
import ProjectList from './ProjectList';
import AboutMe from './AboutMe';
import Skills from './Skills';
//routes
import { Routes, Route } from 'react-router-dom';
//styles
import '../styles/App.scss';


function App() {

  //STATE VARIABLES
  const [selectedType, setSelectedType] = useState(ls.get('input', 'All'));

  //EVENT FUNCTIONS
  const handleFilterProject = (value) => {
    setSelectedType(value);
    ls.set('input', value);
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
      <Header />
      <Routes>
        <Route path='/' element={<ProjectList projectData={renderFiltered()} handleFilterProject={handleFilterProject} type={selectedType} />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;

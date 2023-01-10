import React from 'react';
//react libraries
import {useState} from 'react';
//props
//import PropTypes from 'prop-types';
//services
//import callToApi from '../services/api';
import projectData from '../data/projects';
//import ls from '../services/localStorage';
//components
import Header from './Header';
import ProjectList from './ProjectList';
import AboutMe from'./AboutMe';
import Skills from './Skills';
//routes
import {Routes, Route} from 'react-router-dom';
//styles
import '../styles/App.scss';


function App() {

  //STATE VARIABLES
  //const [filterProject, setFilterProject] = useState(['All']); 
  const [selectedType, setSelectedType] = useState('All');
  /*const [contactForm, setContactForm] = useState(ls.get('contactForm', {
    name: '',
    email: '',
    phone: '', 
    message: ''
  }));
  const [contactResult, setContactResult] = useState('');*/
  //EVENT FUNCTIONS
  /*const handleFilterProject = (value) => {
    if(filterProject.includes(value)){
      const newProject = filterProject.filter((each) => each !== value);
      setFilterProject(newProject);
    }else{
      const newProject = [...filterProject, value];
      setFilterProject(newProject);
    }
  }*/

  const handleFilterProject = (value) => {
    setSelectedType(value);
  }
/*
  const handleInputContact = (name, value) => {
    ls.set('contactForm', {...contactForm, [name] : value});
    setContactForm({...contactForm, [name] : value});
  }

  const handleSendBtnClick = () => {
    return callToApi(contactForm).then((data)=> {
      if (data.success){
        setContactResult('Thanks for your message, I will get back to you as soon as possible');
        setContactForm({
          name: '',
          email: '',
          phone: '', 
          message: ''
        });
        ls.set('contactForm', {
          name: '',
          email: '',
          phone: '', 
          message: ''
        });
      } else{
        setContactResult('Please check all mandatory fields have been filled, thanks!')
      }
    })
  }*/

  //RENDER FUNCTIONS
  /*const renderFiltered = () => {
    if(filterProject.includes('All')){
      return projectData;
    }else{
      return projectData.filter((each) => filterProject.includes(each.type));
    }
  }*/

  const renderFiltered = () => {
    if(selectedType === 'All'){
      return projectData;
    }else{
      return projectData.filter((each) => each.type === selectedType);
    }
  }

  //RETURN
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ProjectList projectData={renderFiltered()} handleFilterProject={handleFilterProject} type={selectedType}/>} />
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;

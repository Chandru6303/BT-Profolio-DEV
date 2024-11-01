import './App.scss';
import Home from './Screens/Home';
import About from './Screens/About';
import Program from './Screens/Program';
import Achievements from './Screens/Achievements';
import Placement from './Screens/Placement';
import { Linkedin,Insta } from './Assets';
import Students from './Screens/Students';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Feedback from './Screens/feedBack/form'
import StoryblokClient from 'storyblok-js-client';
import React, { useState, useEffect, useRef } from "react";

const Storyblok = new StoryblokClient({
  accessToken: 'l2PrYYzvkNva2BrrOAK3tQtt',
}); 

function App() {
  const [portFolioPage, setPortFolioPage] = useState(null);
  useEffect(() => {
      Storyblok.get('cdn/stories/bt-portfolio', {
          version: 'published'
      })
      .then(response => {
        setPortFolioPage(response.data.story.content);
      })
      .catch(error => {
          console.error("Error fetching storyblok content", error);
      });
  }, []);

  // console.log(portFolioPage?.body[3]);
 
  return (
    <Router>
      <div className="App">
        <div className="icons">
          <a href="https://instagram.com/the_better_tomorrow_?igshid=NzZlODBkYWE4Ng==">
            <img src={Insta} alt="" /><br />
          </a>
          <a href="https://www.linkedin.com/company/better-tomorrow-training-institute/">
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <Routes>
          <Route path='/' element={<Home data = {portFolioPage?.body[0]}/>}/>
          <Route path='/About' element={<About data = {portFolioPage?.body[1]}/>}/>
          <Route path='/Program' element={<Program data = {portFolioPage?.body[2]}/>}/>
          <Route path='/Achievements' element={<Achievements data = {portFolioPage?.body[3]}/>}/>
          <Route path='/Placement' element={<Placement data = {portFolioPage?.body[4]} />}/>
          <Route path='/Feedback' element={<Feedback data = {portFolioPage?.body[5]}/>}/>
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
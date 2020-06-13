import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Testimonials from './Components/Tstimonials';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import About from './Components/About';
import Aside from './Components/Aside';



class App extends React.Component {


  render(){
    return (
      <div>
        <BrowserRouter>
        <Aside/>
      <main id="main">
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/skills" exact component={Skills}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/testimonials" exact component={Testimonials}/>
        <Route path="/contact" component={Contact}/>
        </main>
      </BrowserRouter>
      </div>

    )
  }
}


export default App;
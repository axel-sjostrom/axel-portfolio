//import logo from './logo.svg';
import './App.css';
//import TestPresenter from "./presenter/TestPresenter";
import NavigationPresenter from './presenter/NavigationPresenter';
import ProjectsPresenter from './presenter/ProjectsPresenter.jsx';
import ContactPresenter from './presenter/ContactPresenter.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Show from "./Navigation/Show";


function App() {
  return (
    <div>
      <NavigationPresenter />
      <Show hash="#projects">
        <ProjectsPresenter />
      </Show>
      <Show hash="#contact">
        <ContactPresenter />
      </Show>
    </div>
  );
}

export default App;

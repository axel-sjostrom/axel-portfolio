//import logo from './logo.svg';
import './App.css';
//import TestPresenter from "./presenter/TestPresenter";
import NavigationPresenter from './presenter/NavigationPresenter';
import MainPagePresenter from './presenter/MainPagePresenter.jsx';
import AppPrototypesPresenter from './presenter/AppPrototypesPresenter.jsx';
import PhysicalProjectsPresenter from "./presenter/PhysicalProjectsPresenter.jsx";
import ContactPresenter from './presenter/ContactPresenter.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Show from "./Navigation/Show";


function App() {
  return (
    <div>
      <NavigationPresenter />
      <Show hash="#mainpage">
        <MainPagePresenter />
      </Show>
      <Show hash="#apps">
        <AppPrototypesPresenter />
      </Show>
      <Show hash="physicals">
        <PhysicalProjectsPresenter />
      </Show>
      <Show hash="#contact">
        <ContactPresenter />
      </Show>
    </div>
  );
}

export default App;

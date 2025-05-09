import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './app/page';
import Projects from './app/projects/page';
import ToolExposure from './app/tool-exposure/page';
import References from './app/references/page';
import GameDevelopmentDocument from './app/game-development-document/page';
import Certificate from './app/certificate/page';
import EventExposure from './app/event-exposure/page';
import WhoIsIrish from './app/who-is-irish/page';

import WeeklyReport from './app/weekly-report/page';
import DailyAccomplishment from './app/daily-accomplishment/page';
import DevelopmentProcess from './app/development-process/page';
import Documentation from './app/documentation/page';
import Learning from './app/learning/page';
import VisualOutput from './app/visual-output/page';

import Project1 from './app/project-1/page';
import Project2 from './app/project-2/page';
import Project3 from './app/project-3/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tool-exposure" element={<ToolExposure />} />
        <Route path="/references" element={<References />} />
        <Route path="/game-development-document" element={<GameDevelopmentDocument />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/event-exposure" element={<EventExposure />} />
        <Route path="/who-is-irish" element={<WhoIsIrish />} />
        <Route path="/weekly-report" element={<WeeklyReport />} />
        <Route path="/daily-accomplishment" element={<DailyAccomplishment />} />
        <Route path="/development-process" element={<DevelopmentProcess />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/visual-output" element={<VisualOutput />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;

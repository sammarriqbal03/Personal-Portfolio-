import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import LearnSphere from './pages/projects/LearnSphere'
import CoffeeApp from './pages/projects/CoffeeApp'
import BankApp from './pages/projects/BankApp'
import TaskFlowApp from './pages/projects/TaskFlowApp'
import WebsiteSkinDesign from './pages/projects/WebsiteSkinDesign'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/learnsphere" element={<LearnSphere />} />
        <Route path="/projects/coffee-app" element={<CoffeeApp />} />
        <Route path="/projects/bank-app" element={<BankApp />} />
        <Route path="/projects/task-flow-app" element={<TaskFlowApp />} />
        <Route path="/projects/website-skin-design" element={<WebsiteSkinDesign />} />
      </Routes>
    </>
  )
}

export default App
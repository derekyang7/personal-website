import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <About />
      <Projects />
    </div>
  )
}

export default App

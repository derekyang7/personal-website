import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {

  const handleTitleClick = () => {
    // titleRef.current.scrollIntoView({ behavior: 'smooth' })
    console.log("about title was clicked.")
  }

  return (
    <div className="main-wrapper">
      <Sidebar
        onTitleClick={handleTitleClick}
      />
      <About />
      <Projects />
    </div>
  )
}

export default App

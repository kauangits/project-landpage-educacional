import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Operation from './pages/Operation'
import Comments from './pages/Comments'
import StopWatch from './pages/StopWatch'
import Features from './pages/Features'
import Stats from './pages/Stats'
import CTA from './pages/CTA'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="pt-20 h-screen">
        <Hero></Hero>
        <Operation></Operation>
        <Features></Features>
        <StopWatch></StopWatch>
        <Comments></Comments>
        <Stats></Stats>
        <CTA></CTA>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App

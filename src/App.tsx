import './App.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Proyects } from './components/proyects/Proyects'


function App() {

  return (
    <>
      <Header />
      <Home />
      <Proyects />
      <About />
      <Contact />
    </>
  )
}

export default App

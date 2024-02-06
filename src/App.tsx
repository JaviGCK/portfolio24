import './App.css'
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
      <Contact />
    </>
  )
}

export default App

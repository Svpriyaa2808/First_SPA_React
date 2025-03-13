import { useState } from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Cat from './components/Cat'
import Dog from './components/Dog'
import Footer from './components/Footer'
import FooterHome from './components/FooterHome'

function App() {
  const [showPage,SetShowPage] = useState("home")

  return (
    <>
      {/* {(showPage === "cat" || showPage === "dog") && <Navigation currentPage={SetShowPage} />} */}
      {showPage === "home" && 
      <>
      <Home currentPage={SetShowPage}/>
      <FooterHome />
      </>}
      {showPage === "cat" && 
      <>
      <Cat />
       <Footer currentPage={SetShowPage}/>
      </>}
      
      {showPage === "dog" && 
      <>
      <Dog />
      <Footer currentPage={SetShowPage}/>
      </>}

      {/* {showPage === "dog" && (<Dog currentPage={SetShowPage}/>)}
      {(showPage === "cat" || showPage === "dog") && <Footer currentPage={SetShowPage}/>}
      {showPage === "home" && <FooterHome />} */}
       
    </>
  )
}

export default App

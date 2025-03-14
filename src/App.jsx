import { useState } from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Cat from './components/Cat'
import Dog from './components/Dog'
import Footer from './components/Footer'
import FooterHome from './components/FooterHome'

function App() {
  const [showPage,SetShowPage] = useState("home")
  const handleFooter = (item) => {
    SetShowPage(item);
  }

  return (
    <>

      {/* {(showPage === "cat" || showPage === "dog") && <Navigation currentPage={SetShowPage} />} */}
      
      {showPage === "home" && 
      <Home currentPage={handleFooter}/>

      }

      {showPage === "cat" && 
      <Cat currentPage={handleFooter}/>
      }
      
      {showPage === "dog" && 
      <Dog currentPage={handleFooter}/>
      }

      {/* {showPage === "dog" && (<Dog currentPage={SetShowPage}/>)}
      {(showPage === "cat" || showPage === "dog") && <Footer currentPage={SetShowPage}/>}
      {showPage === "home" && <FooterHome />} */}
       
       </>
  )
}

export default App

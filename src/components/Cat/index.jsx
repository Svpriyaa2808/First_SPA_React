
import CatMain from "../CatMain";
import HeaderCat from "../HeaderCat";
import Footer from "../Footer";
function App({currentPage}) {
   console.log(currentPage)
    return(
        <>
        <HeaderCat />
        <CatMain />
        <Footer displayFooter = {currentPage}/>
        </>
    )
}

export default App
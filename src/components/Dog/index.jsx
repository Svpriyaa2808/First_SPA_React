import DogMain from "../DogMain";
import HeaderDog from "../HeaderDog";
import { dogArray } from "../../data/dog_data";
import Footer from "../Footer";

function App({currentPage}) {
   
    return(
        <>
        <HeaderDog />
        {dogArray.map((item,index) => <DogMain key = {index} {...item}/> )}
        <Footer displayFooter = {currentPage}/>
        </>
    )
}

export default App
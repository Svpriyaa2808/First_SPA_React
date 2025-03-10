import DogMain from "../DogMain";
import HeaderDog from "../HeaderDog";
import { dogArray } from "../../data/dog_data";


function App() {
   
    return(
        <>
        <HeaderDog />
        {dogArray.map((item,index) => <DogMain key = {index} {...item}/> )}
        </>
    )
}

export default App
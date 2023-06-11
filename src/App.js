import Navbar from "./components/NavBar/Navbar";
import Itemlistcontainer from "./components/ItemListContainer/itemListContainer";

function App (){
    
    
    return(
        <div className="body" style={{backgroundColor:"crimson", borderRadius:"10px"}}>
        <Navbar></Navbar>

        <Itemlistcontainer greeting={'Bienvenidos a la tentación del Gaming'}></Itemlistcontainer>

        </div>
    )
}

export default App;
import Cartwidget from "../cartWidget/cartwidget";
import cartwidget from "../cartWidget/cartwidget";

function navbar (){
    return (
        <nav style={{marginLeft:"650px"}}>
            <h1 >Infernous Gaming</h1>
            <div>
                <button style={{marginRight:"10px"}}>Inicio</button>
                <button style={{marginRight:"10px"}}>Pc´s</button>
                <button style={{marginRight:"10px"}}>Accesorios</button>
                <button style={{marginRight:"10px"}}>Contacto</button>
            </div>

            <Cartwidget></Cartwidget>
        </nav>
    )
}

export default navbar;
import WidgetCart from "./WidgetCart"
import logo from "./img/Logotipo.png"

function NavBar() {

    return (
        <>
            <div className="navbar">
                <img src={logo} alt="CasacaFC" width={"200px"}/>
                <h1>Casacas FC - Camisetas de futbol de todo el mundo</h1>
                <ul>
                    <li>Ligas</li>
                    <li>Selecciones</li>
                    <li>Sobre Nosotros</li>
                    <li>Contactanos</li>
                </ul>
                <WidgetCart />
            </div>

        </>

    )
}
export default NavBar
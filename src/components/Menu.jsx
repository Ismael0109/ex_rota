import { Link } from "react-router-dom"
function Menu(){

    return(
        <nav style={{background: '#333', padding: '10'}}>
            <Link style={{color: 'white', marginRight: '20px'}} to={"/"}>Home</Link>
            <Link style={{color: 'white', marginRight: '20px'}} to={"/Empresa"}>Empresa</Link>
            <Link style={{color: 'white', marginRight: '20px'}} to={"/Produtos"}>Produtos</Link>
            <Link style={{color: 'white', marginRight: '20px'}} to={"/Contato"}>Contato</Link>

        </nav>
    )
}
export default Menu
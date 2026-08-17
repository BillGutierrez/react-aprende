import './menu.css';

const Menu = ({appname, carrito=null}) => {
    return(
        <nav>
            <h1>{appname}</h1>
            {carrito}
        </nav>
    );
};

export default Menu;
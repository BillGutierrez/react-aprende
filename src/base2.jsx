const Boton2 = ()=>{
return(
    <div
    onClick={(e) =>{
         e.preventDefault();
        console.info("click en el boton2");
    }}
    >
        boton
    </div>
);
};
export default Boton2;
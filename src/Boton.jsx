function Boton({texto,children}){
    function handleClick(e){
        e.preventDefault();
        console.info("click en el boton");
    }
return(
    <div  
    className="inline-block p-2 text-lg m-3 bg-amber-500 text-gray-900  rounded-2x1 shadow-lg"
    onClick={handleClick}>
        {children ? children : texto}
    </div>
);
}
export default Boton;
"use client";
import Link from "next/link";
import styleNavBar from "@/app/Css/navBar_left.module.css";
// import inicio from "@/app/Assets/inicio.svg"

export default function NavBar_left({setTitulo, setPaginaSeleccionada}) {

  const cambiarPagina = (pagina) => {
    setTitulo(pagina)
  }

  return (
    <div className={styleNavBar.contenedor_navBar}>
      <div className={styleNavBar.logo_navBar}>
        <div className={styleNavBar.logo}>L.A</div>
      </div>
      <div className={styleNavBar.contenedor_opcion_navBar}>
        <div className={styleNavBar.opcion_navBar} onClick={() => setTitulo("Portafolio")}>
          <img src="/assets/inicio.svg" alt="svg-inicio" className={styleNavBar.svg_navBar}></img>
        </div>
        <div className={styleNavBar.opcion_navBar} onClick={() => setTitulo("Diplomas")}>
          <img src="/assets/medalla.svg" alt="svg-inicio" className={styleNavBar.svg_navBar}></img>
        </div>
        <div className={styleNavBar.opcion_navBar} onClick={() => setTitulo("Informacion")}>
          <img src="/assets/perfil.svg" alt="svg-inicio" className={styleNavBar.svg_navBar}></img>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

import NavBar_left from "./Components/NavBar_left";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import CertificadosDiplomas from "./Components/CertificadosDiplomas";
import Informacion from "./Components/Informacion";

export default function Home() {
 
  const [titulo, setTitulo] = useState("Portafolio")

  const paginas = {
    "Portafolio": <Inicio></Inicio>,
    "Diplomas": <CertificadosDiplomas></CertificadosDiplomas>,
    "Informacion":<Informacion></Informacion>,
  }
  
  return (
    <div className={styles.contenedor_principal}>
      <div className={styles.navbar_left}>
        <NavBar_left setTitulo={setTitulo}></NavBar_left>
      </div>
      <div className={styles.contenido_principal}>
        <div className={styles.contenido_grid}>
          <Header titulo={titulo}></Header>
          {paginas[titulo]}
        </div>
      </div>
    </div>
  );
}

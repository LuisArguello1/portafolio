"use client"
import styleInicio from "@/app/Css/inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {

    const [proyectoP, setProyectoP] = useState([])

    useEffect(() => {
        const proyectos = [
            {
                titulo: "Logica de conjuntos",
                numero: 1,
                img:"/Img/logica-conjuntos.png",
                url:"https://luisarguello1.github.io/logica-conjuntos/",
            },
            {
                titulo: "Detalles y arreglos",
                numero: 2,
                img:"/Img/Detalles_arreglos.svg",
                url:"https://luisarguello1.github.io/detalles_y_arreglos/",
            },
            {
                titulo: "Tienda - Online",
                numero: 3,
                img:"/Img/supermarket.png",
                url:"https://luisarguello1.github.io/tienda-online/",
            },
        ]

        setProyectoP(proyectos)
    }, [])
  return (
    <div className={styleInicio.contenedor_inicio}>
      <div className={styleInicio.titulo_inicio}>Proyectos</div>
      <div className={styleInicio.contenedor_cards_inicio}>
        {proyectoP.length > 0 ?
            proyectoP.map((proy, index) => {
                return(
                    <div className={styleInicio.cards_inicion} key={index}>
                        <div className={styleInicio.numero_card}># {proy.numero}</div>
                        <div className={styleInicio.img_proyecto}>
                            <img className={styleInicio.img_proyecto_cont} src={proy.img} alt="img-proyect"></img>
                        </div>
                        <div className={styleInicio.infomacion_inicio}>
                            <a className={styleInicio.ruta} href={proy.url} target="_blank" rel="noopener noreferrer">{proy.titulo}</a>
                        </div>
                    </div>
                )
            })
        : "No exiten proyectos"}
      </div>
      <div className={styleInicio.contenedor_detalles_proyectos}>
        <div className={styleInicio.detalle_proyecto}>
            <span style={{color: "red"}}>Logica de conjuntos: </span>
        Este proyecto es una herramienta interactiva diseñada para realizar operaciones matemáticas con conjuntos. Permite trabajar con intersección, complemento, unión, diferencia, diferencia simétrica, y más, tanto para 2 como para 3 conjuntos. No solo proporciona los resultados de cada operación, sino que también ofrece explicaciones detalladas sobre los cálculos realizados. Además, genera diagramas de Venn automáticamente, facilitando la visualización de las relaciones entre los conjuntos. El proyecto incluye una sección de teoría que proporciona contenido educativo sobre los conceptos fundamentales de la teoría de conjuntos, ayudando a los usuarios a comprender mejor los resultados obtenidos.
        </div>
        <div className={styleInicio.detalle_proyecto}>
            <span style={{color: "red"}}>Detalles y arreglos: </span>
        Este proyecto consiste en una página web diseñada para mostrar y promocionar detalles y arreglos para ocasiones especiales como el Día del Padre, Día de la Madre, cumpleaños, entre otros. La plataforma presenta una interfaz visual atractiva y fácil de usar, con una amplia gama de opciones para elegir regalos personalizados y decoraciones. Los usuarios pueden explorar diferentes categorías de productos con imágenes llamativas y descripciones detalladas, lo que facilita la elección perfecta para cada evento. Además, la web está optimizada para una experiencia agradable y fluida, tanto en computadoras de escritorio como en dispositivos móviles.
        </div>
        <div className={styleInicio.detalle_proyecto}>
            <span style={{color: "red"}}>Tienda online: </span>
        Este proyecto es una plataforma de tienda online que permite la administración de productos y usuarios para la venta de artículos. Los administradores pueden gestionar el inventario de productos, actualizar precios, descripciones y agregar nuevas opciones a la tienda de manera sencilla. Además, los usuarios pueden crear cuentas, realizar compras y hacer seguimiento de sus pedidos. La interfaz es intuitiva y está diseñada para ofrecer una experiencia de usuario fluida, tanto para compradores como para administradores.<span style={{color: "blue"}}> Usuario: Admin-01, Contraseña: Admin001 para administradores</span> 
        </div>
      </div>
    </div>
  );
}

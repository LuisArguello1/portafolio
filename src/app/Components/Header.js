"use client";
import styleHeader from "@/app/Css/header.module.css"
import Image from "next/image";

export default function Header ({titulo}){
    return(
        <div className={styleHeader.contenedor_header}>
            <div className={styleHeader.titulo_header}>{titulo}</div>
            <div className={styleHeader.perfil_header}>
                <img src="/assets/perfil_header.svg" alt="user" className={styleHeader.img_header}></img>
                <div className={styleHeader.nombre_header}>Luis Arguello</div>
            </div>
        </div>
    )
}
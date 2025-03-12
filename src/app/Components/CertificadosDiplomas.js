"use client"
import styleDiplomas from "@/app/Css/certificadosDiplomas.module.css"
import { useEffect, useState } from "react"

export default function CertificadosDiplomas(){
    const [diplomas, setDiplomas] = useState([])

    useEffect(() => {
        const listaDiplomas = [
            {
                img: "/ImgDiplomas/placa_mejorBachiller.jpg",
                titulo: "Placa - Mejor Bachiller",
            },
            {
                img: "/ImgDiplomas/reconocimiento_honor.jpg",
                titulo: "Reconocimento de Honor",
            },
            {
                img: "/ImgDiplomas/medalla_excelenciaAcademica.jpg",
                titulo: "Medalla Excelencia Academica",
            },
            {
                img: "/ImgDiplomas/medalla_emprendimiento.jpg",
                titulo: "Medalla Mejor Emprendimiento",
            },
            {
                img: "/ImgDiplomas/titulo_bachiller.jpg",
                titulo: "Titulo de Bachiller",
            },
            {
                img: "/ImgDiplomas/diploma_mejorBachiller.jpg",
                titulo: "Diploma Mejor Bachiller",
            },
            {
                img: "/ImgDiplomas/Reconocimiento_exoneracion.jpg",
                titulo: "Reconocimiento de Exoneracion",
            },
           
            {
                img: "/ImgDiplomas/mencion_honor2_2bachillerato.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_tributacion.jpg",
                titulo: "Mencion de Honor Tributacion",
            },
            {
                img: "/ImgDiplomas/mencion_honor_2Bachillerato.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_10decimo.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_mate2_10decimo.jpg",
                titulo: "Mencion de Honor Matematicas",
            },
            {
                img: "/ImgDiplomas/mencion_honor_mate_10decimo.jpg",
                titulo: "Mencion de Honor Matematicas",
            },
            {
                img: "/ImgDiplomas/diploma_honor_10decimo.jpg",
                titulo: "Diploma de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_9noveno.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_8octavo.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_5quinto.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/diploma_honor_4cuarto.jpg",
                titulo: "Diploma de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_3cuarto.jpg",
                titulo: "Mencion de Honor",
            },
            {
                img: "/ImgDiplomas/mencion_honor_2segundo.jpg",
                titulo: "Mencion de Honor",
            },
        ]
        setDiplomas(listaDiplomas)
    }, [])
    return(
        <div className={styleDiplomas.contenedor_diplomas}>
            {diplomas.length > 0 ?
                diplomas.map((diploma, index) => {
                    return(
                        <div className={styleDiplomas.cuadro_diplomas} key={index}>
                            <img src={diploma.img} alt="diploma" className={styleDiplomas.img_diplomas}></img>
                            <div className={styleDiplomas.titulo_diploma}>{diploma.titulo}</div>
                        </div>
                    )
                })
            : "No existen diplomas"}
        </div>
    )
}
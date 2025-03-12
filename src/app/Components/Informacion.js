"use client";
import styleInformacion from "@/app/Css/informacion.module.css";



export default function Informacion() {

  return (
    <div className={styleInformacion.contenedor_informacion}>
      <div className={styleInformacion.contenido_principal_informacion}>
        <div className={styleInformacion.contenido_principal_right}>
          <h2 className={styleInformacion.nombre_informacion}>
            Luis Emilio Arguello López
          </h2>
          <div className={styleInformacion.titulo_informacion}>
            <img src="/assets/university.svg" alt="svg"></img>
            <strong>Carrera: </strong> Ingeniero en Software
          </div>
          <div className={styleInformacion.titulo_informacion}>
            <img src="/assets/university.svg" alt="svg"></img>
            <strong>Universidad: </strong>
            {`Universidad estatal de Milagro (UNEMI)`}
          </div>
          <div className={styleInformacion.titulo_informacion}>
            <img src="/assets/cedula.svg" alt="svg"></img>
            <strong>Cedula: </strong>
            0943986778
          </div>
          <div className={styleInformacion.titulo_informacion}>
            <img src="/assets/casa.svg" alt="svg"></img>
            <strong>Dirección: </strong>
            Km 26 - Via MIlagro
          </div>
          <div className={styleInformacion.descripcion_informacion}>
            <strong className={styleInformacion.svg_titulo}>
              <img src="/assets/note.svg" alt="svg"></img>Descripción:{" "}
            </strong>{" "}
            Soy un estudiante de Ingeniería en Software apasionado por la
            tecnología y la programación. Me considero una persona proactiva,
            siempre buscando aprender y mejorar mis habilidades para desarrollar
            soluciones innovadoras. A lo largo de mi formación académica he
            adquirido experiencia trabajando con diversas tecnologías, como
            JavaScript, Python, y frameworks modernos como React y Next.js, lo
            que me ha permitido desarrollar proyectos web funcionales y
            eficientes. Además, soy una persona que valora el trabajo en equipo
            y soy capaz de desempeñarme bien bajo presión, siempre manteniendo
            la calidad y el compromiso en los proyectos que realizo.
          </div>
        </div>
        <div className={styleInformacion.contenido_principal_left}>
          <img
            src="/ImgDiplomas/perfil_foto.jpg"
            alt="img"
            className={styleInformacion.img_perfil}
          ></img>
        </div>
      </div>
      <div className={styleInformacion.contenedor_hablidades}>
        <div className={styleInformacion.habilidades_informacion}>
          <ul className={styleInformacion.lista_informacion}>
            <strong className={styleInformacion.svg_list}>
              <img src="/assets/list.svg" alt="svg"></img> Habilidades claves:
            </strong>
            <li className={styleInformacion.lista}>Trabajo en equipo</li>
            <li className={styleInformacion.lista}>
              Capacidad para trabajar bajo presión
            </li>
            <li className={styleInformacion.lista}>
              Paciencia y atención al detalle
            </li>
            <li className={styleInformacion.lista}>
              Resolución de problemas complejos
            </li>
            <li className={styleInformacion.lista}>
              Adaptabilidad y aprendizaje continuo
            </li>
            <li className={styleInformacion.lista}>
              Pensamiento crítico y lógico
            </li>
          </ul>
        </div>
        <div className={styleInformacion.tecnologias_informacion}>
          <ul className={styleInformacion.lista_informacion}>
            <strong className={styleInformacion.svg_list}>
              <img src="/assets/list.svg" alt="svg"></img> Tegnologias y
              herramientas:
            </strong>
            <li className={styleInformacion.lista2}>
              <strong>Lenguajes de programación: </strong> JavaScript, Python
            </li>
            <li className={styleInformacion.lista2}>
              <strong>Frameworks: </strong> React, Vite + React, Next.js
            </li>
            <li className={styleInformacion.lista2}>
              <strong>Base de datos: </strong> SQL (conocimientos básicos)
            </li>
            <li className={styleInformacion.lista2}>
              <strong>Otros: </strong> Git, Html, Css
            </li>
          </ul>
        </div>
      </div>
      <div className={styleInformacion.contenedor_experiencia_laboral}>
        <strong className={styleInformacion.titulo_experiencia_laboral}>
          <img src="/assets/laboral.svg" alt="svg"></img>
          Experiencia Laboral
        </strong>
        <div className={styleInformacion.subtitilo_experiencia_laboral}>
          <strong>Pasantia - Cnel</strong> (Corporacion Nacional de
          electricidad)
        </div>
        <div className={styleInformacion.subtitilo_experiencia_laboral}>
          <strong>Area: </strong> Atención al cliente
        </div>
        <div
          className={styleInformacion.parrafo_descripcion_experiencia_laboral}
        >
          <strong>Descripción:</strong>Durante mi pasantía en la empresa CNEL,
          trabajé en el área de atención al cliente, donde pude aplicar mis
          habilidades de comunicación y resolución de problemas. Mi labor
          consistió en asistir a los usuarios en la solución de problemas
          relacionados con el servicio de energía eléctrica, brindar información
          y registrar incidencias en el sistema. Esta experiencia me permitió
          desarrollar una mayor capacidad para trabajar bajo presión y mejorar
          mis habilidades interpersonales y técnicas
        </div>
      </div>

      <div className={styleInformacion.contenedor_contacto}>
        <strong className={styleInformacion.titulo_contacto}>
          <img src="/assets/contact.svg" alt="svg"></img>
          Contacto
        </strong>
        <div className={styleInformacion.information_contacto}>
          <img src="/assets/email.svg" alt="svg"></img>
          <strong>Correo electronico: </strong>luisarguello5531@gmail.com -
          luisarguello829@gmail.com
        </div>
        <div className={styleInformacion.information_contacto}>
          <img src="/assets/phone.svg" alt="svg"></img>
          <strong>Telefono: </strong>0983769821
        </div>
      </div>

      <div className={styleInformacion.contenedor_pdf}>
        <div className={styleInformacion.contenedor_vista_previa}>
          <h2>Vista previa de mi hoja de vida:</h2>
          <embed src="/documents/Tarea Grupal- S7 Tarea-3.pdf" width="100%" height="300px"></embed>
        </div>
        <a
          className={styleInformacion.contenedor_btn}
          href="/documents/Tarea Grupal- S7 Tarea-3.pdf"
          download="Hoja_de_Vida_Luis_Arguello"
        >
          <button className={styleInformacion.boton_pdf}>
            Descargar (PDF)
          </button>
        </a>
      </div>
    </div>
  );
}

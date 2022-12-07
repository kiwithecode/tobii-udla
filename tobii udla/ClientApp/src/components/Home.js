import React, { Component } from 'react';

import './NavMenu.css';

export class Home extends Component {
    static displayName = Home.name;
    

  render() {

      return (

          <div className="bad">
              <div>
                  <br>
                  </br>
                  <img src="https://i.ytimg.com/vi/UHCzdlr0tHY/maxresdefault.jpg" width="1500" height="720" />
              </div>
              
            

            <div>
                  <br>
                  </br>
                <p></p>
                <h1>QUE ES TOBII EYE TRACKER?</h1>
                  <br>
                  </br>
                  <br>
                  </br>
                <p>
                    La tecnología debería proporcionar experiencias humanas convincentes al aprovechar nuestros sentidos.
                    Eso es lo que hace Tobii Eye Tracker 5, al dejar que su PC sepa dónde está enfocado visualmente,
                    proporcionándole un modo de entrada adicional cuando se trata de juegos. Enriqueciendo tu experiencia extendiendo tus instintos al juego en sí.
                    Todo esto hecho posible por iluminadores y sensores que calculan su punto de mirada en la pantalla de su dispositivo.
                  </p>

                  <br>
                  </br>

              </div>
              <div>
                  <br>
                  </br>
                  <h1>
                      OBJETIVO DEL PROYECTO
                  </h1>
                  <br>
                  </br>
                  <p>Desarrollo de una aplicación web para el análisis de usabilidad, mediante el uso de un rastreador ocular,
                      el cual analice los entornos virtuales de aprendizaje de unas IES.</p>

                      <br></br>
                      <h2>Objetivos Específicos</h2>
                      <lu>
                          
                          
                          <br></br>
                          <li>
                              Definir las métricas cuantitativas-cualitativas que se van a usar para definir las tareas a realizarse para la evaluación de la página.
                          </li>
                          <br></br>
                          <li>
                              Crear un aplicativo web que vincule el laboratorio de seguimiento ocular con las métricas y tareas definidas, para realizar un análisis de usabilidad.
                          </li>
                          <br></br>                   
                          <li>
                              Evaluar un Entorno Virtual Educativo de un IES con el aplicativo web y uso de un rastreador ocular, para obtener los datos de usabilidad.
                          </li>
                      </lu>
                  
              </div>
              <br></br>
              <div>
                  <h1>INGRESE URL A EVALUAR</h1>
                  <br></br>
                 
                  <br></br>
                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">URL...</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">

                      </input>
                      <button className="btn btn-info" type="submit">EVALUAR</button>
                  </div>

                 
                  <br></br>
                  <br></br>
              </div>
             
        </div>
       
           
      
    );
  }
}

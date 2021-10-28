import React from 'react'
import Header from '../../components/header/Header';

//styles
import './welcome.css';

//images
import iconEdit from '../../assets/img/edit-file.svg';
import iconVehiculo from '../../assets/img/vehiculo-puerta.svg';
import iconVehiculoBarco from '../../assets/img/vehiculo-puerta-barco.svg';
import iconReporte from '../../assets/img/reporte.svg';
import iconReportem from '../../assets/img/reporte-m.svg';
import leftArrow from '../../assets/img/left-arrow.svg'



const Welcome = (props) => {
    return (
      <> 
      <Header />
        { props.request === "request" ? (

        <div className="container">
            <div className="welcome-title"> <span> Bienvenid@,{props.name ? "" : "carlos"}</span> </div>
            <div className="boxWelcome">
                <img src={iconEdit} alt="" />
                <div className="welcome-content">
                    <span>Aún no has solicitado ningun ingreso</span>
                    <span>Ingresa y envia la siguiente información para generar una solicitud de ingreso al Puerto. </span>
                </div>
                <button className="button-primary">Solicitar ingreso a puerto</button>
            </div>
        </div>
        ) : (<>
          <div className="container">
            <div className="welcome-title"> <span> Bienvenid@,{props.name ? "" : "carlos"}</span> </div>
            <div className="container-boxes-approved">
              <div className="box-welcome-approve">
                <div>
                  <img src={iconVehiculo} alt="" />
                  <img src={leftArrow} alt="" />
                  <img src={iconVehiculoBarco} alt="" />

                </div>
                  <div className="welcome-content">
                      <span>Vehiculos en puerto</span>
                  </div>
                  <button className="button-primary">Ingresar</button>
              </div>
              <div className="box-welcome-approve">
                <div>
                  <img src={iconReporte} alt="" />
                  <img src={leftArrow} alt="" />
                  <img src={iconReportem} alt="" />

                </div>
                  <div className="welcome-content">
                      <span>Reportes al Ministerio</span>
                  </div>
                  <button className="button-primary">Ingresar</button>
              </div>
            </div>
        </div>
        </>)

         

        }
      </>

    )
}

export default Welcome


import React from 'react'

// images
import logoPB from '../../assets/img/LogoPB.svg';
import banner from '../../assets/img/banner-login.png'

//styles
import "./login.css";

const Login = () => {
    return (
        <div className="container-login">
            <div className="container-box">
                <div className="container-Form-login">
                    <div>
                        <img src={logoPB} alt="" />
                    </div>
                    <div className="login-content">
                        <p>Iniciar sesión</p>
                        <input type="text" className="login-input"  placeholder="Correo electrónico" />
                        <input type="password" className="login-input" placeholder="Contraseña" />
                        <div className="remind-me">
                            <input type="checkbox" className="login-input-checkbox" id="cbox2" value="second_checkbox" /> 
                            <label for="cbox2">Recordarme</label>
                        </div>
                    </div>
                    <button className="button-primary" disabled="disabled">Ingresar</button>
                </div>
                <div className="Banner">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="login-description"> <span className="spanBold">Puerto Buenavista </span> es un terminal multipropósito ubicado en la zona industrial de Cartagena. </div>

        </div>
    )
}

export default Login

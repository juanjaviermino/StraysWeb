import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage (props) {

    const API = "http://localhost:5000";
    const navigate = useNavigate(); // Initialize the history object

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {toPreLoginPage} = props;

    function verification(psw){
        if(psw===password){
            console.log("Contraseñas iguales");
            return true;
        } else{
            console.log("Contraseñas diferentes");
            return false;
        }
    }

    const handleSubmit = async (e) =>{

        e.preventDefault();

        const res = await fetch(`${API}/userbymail?criteria=email&value=${email}`);

        switch (res.status) {
            case 404:
                window.alert("No existe un usuario con ese correo, verifica los datos");
              break;
            case 200:
                const data = await res.json();
                if(verification(data.password)){
                    toPreLoginPage(true);
                    navigate('/'); // 
                } else{
                    window.alert("Contraseña incorrecta, intenta de nuevo");
                }
                break;
            default:
                window.alert("Hubo un problema de nuestra parte, intenta de nuevo");
        }
    };

    return(
        <div>
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <h1 className='sentinelsColor mt-4'>Bienvenido de vuelta</h1>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <p className=''>Ingresa tus credenciales para poder acceder al portal</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className='col-3 d-flex justify-content-center'>
                        <form onSubmit={handleSubmit} className='card card-body rounded border-primary mb-3'>
                            <div className='form-group m-2'>
                                <input 
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)} 
                                    value={email}
                                    className='form-control'
                                    placeholder='E-mail'/>
                            </div>
                            <div className='form-group m-2'>
                                <input 
                                    type="password" 
                                    onChange={e => setPassword(e.target.value)} 
                                    value={password}
                                    className='form-control'
                                    placeholder='Contraseña'/>
                            </div>
                            <button className='btn btn-primary m-2 rounded-sm'>
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
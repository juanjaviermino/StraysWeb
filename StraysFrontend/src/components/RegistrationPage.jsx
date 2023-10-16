import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage () {

    const API = "http://localhost:5000";
    const navigate = useNavigate(); // Initialize the history object

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(password!=passwordConf){
            window.alert("Las contraseñas no coinciden, intenta de nuevo"); // Mensaje de error si las contraseñas no coinciden
            setPassword('');
            setPasswordConf('');
        } else{
            const res = await fetch(`${API}/users`, {
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    name,
                    lastname,
                    email,
                    password
                }),
            });
    
            const data = await res.json(); // Guardamos la respuesta de la API
            window.alert(data.message); // Mostramos la respuesta de la API

            switch (res.status) {
                case 400:
                    setEmail('');
                  break;
                case 200:
                    navigate('/login'); // Navigate to the /login route
                  break;
                default:
                    setName('');
                    setLastname('');
                    setEmail('');
                    setPassword('');
              }
        }
    };

    return(
        <div>
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <h1 className='sentinelsColor mt-4'>¡Que gusto verte!</h1>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <p className=''>Nos encanta que formes parte de nuestro equipo, regístrate aquí:</p>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className='col-3 d-flex justify-content-center'>
                        <form onSubmit={handleSubmit} className='card card-body rounded border-primary mb-3'>
                            <div className='form-group m-2'>
                                <input 
                                    type="text" 
                                    onChange={e => setName(e.target.value)} 
                                    value={name}
                                    className='form-control'
                                    placeholder='Nombre'
                                    autoFocus/>
                            </div>
                            <div className='form-group m-2'>
                                <input 
                                    type="text" 
                                    onChange={e => setLastname(e.target.value)} 
                                    value={lastname}
                                    className='form-control'
                                    placeholder='Apellido'
                                    autoFocus/>
                            </div>
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
                            <div className='form-group m-2'>
                                <input 
                                    type="password" 
                                    onChange={e => setPasswordConf(e.target.value)} 
                                    value={passwordConf}
                                    className='form-control'
                                    placeholder='Confirma tu contraseña'/>
                            </div>
                            <button className='btn btn-primary m-2 rounded-sm'>
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
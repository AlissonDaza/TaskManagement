import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { Formik, Form, Field } from 'formik';
import logo from '../assets/logo.png';

function LoginPage() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const navigate = useNavigate();

    const loginInitialValues = {
        user: '',
        password: '',
    };

    const registerInitialValues = {
        name: '',
        user: '',
        password: '',
    };

    const handleLogin = async (values, actions) => {
        console.log('Login Values', values);
        setTimeout(() => {
            if (values.user === "admin" && values.password === "admin") {
                console.log("Usuario autenticado");
                navigate("/tasks");
            } else {
                console.log("Credenciales incorrectas");
            }
            actions.setSubmitting(false);
        }, 1000);
    };

    const handleRegister = async (values, actions) => {
        console.log('Register Values', values);
        setTimeout(() => {
            console.log('Usuario registrado');
            actions.setSubmitting(false);
            setIsRightPanelActive(false);
            navigate("*");
        }, 1000);
    };

    return (
        <>
            <div className="small-container">
                <div className={`login-container ${isRightPanelActive ? "right-panel-active" : ""}`} id="login-container">
                    <Formik
                        initialValues={registerInitialValues}
                        onSubmit={handleRegister}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form-login-container sign-up-login-container">
                                <img src={logo} alt="" width="200" height="200" className="d-inline-block align-text-top" />
                                <h1 style={{color: 'white'}}>Crea una Cuenta</h1>
                                <Field type="text" name="name" placeholder="Name" />
                                <Field type="text" name="user" placeholder="User" />
                                <Field type="password" name="password" placeholder="Password" />
                                <div className="d-grid gap-2 col-4 mx-auto">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                                        {isSubmitting ? "Registrando..." : "Registrate"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <Formik
                        initialValues={loginInitialValues}
                        onSubmit={handleLogin}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form-login-container sign-in-login-container">
                                <img src={logo} alt="" width="200" height="200"  className="d-inline-block align-text-top" />
                                <h1 style={{color: 'white'}}>Iniciar Sesión</h1>
                                <Field type="text" name="user" placeholder="User" />
                                <Field type="password" name="password" placeholder="Password" />
                                <div className="d-grid gap-2 col-4 mx-auto">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                                        {isSubmitting ? "Entrando..." : "Entrar"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="overlay-login-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Hola de Nuevo!</h1>
                                <p>Para mantenerte en contacto con nosotros, inicia sesión con tus datos personales</p>
                                <button className="btn btn-outline-light btn-lg" id="signIn" onClick={() => setIsRightPanelActive(false)}>Inicio de Sesión</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hola, Amigo!</h1>
                                <p>Aqui registrate para póder Utilizar la aplicación.</p>
                                <button className="btn btn-outline-light btn-lg" id="signUp" onClick={() => setIsRightPanelActive(true)}>Registarse</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    {/* ...footer content */}
                </footer>
            </div>
        </>
    );
}

export default LoginPage;

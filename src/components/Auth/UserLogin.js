import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UserLogin = () => {
    const [user, setUser] = useState();

    const handleSubmit = () => {}
    const handleChange = () => {}

    return (
        <div>
             <div className="form_wrapper">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 offset-3">
                            <Form className='loginFrom' onSubmit={handleSubmit}>
                                <h4>{user ? 'Log In' : 'Create an account'}</h4>
                                {user && <Form.Group className='mt-4'>
                                    <Form.Control onBlur= {handleChange} name='Fname' className='formInput' type="text" placeholder="First Name" />
                                </Form.Group>}
                                {user && <Form.Group className='mt-4'>
                                    <Form.Control onBlur= {handleChange} name='Lname' className='formInput' type="text" placeholder="Lest Name" />
                                </Form.Group>}
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur= {handleChange} name='email' className='formInput' type="email" placeholder="Username Or Email" />
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur= {handleChange} name='password' className='formInput' type="password" placeholder="Password" />
                                </Form.Group>
                                { !user &&
                                <Form.Group className='forgot d-flex justify-content-between'>
                                    <Form.Check type="checkbox" label="Remember Me " />
                                    <Link className='password'>Forgot Password</Link>
                                </Form.Group>
                                }
                                <div className='d-flex justify-content-center'>
                                    <input className='logInBtn' variant="primary" type="submit" value='Log In' />
                                </div> 
                    {/* <div className='text-center'>
                        <span>
                            {user ? 'You already have an account?' : 'Don’t have an account?'}
                            <Link className='ml-1' to='/login' onClick={()=> setNewUser(!user)}>
                            {user ?"Log In" : "create new account"}
                            </Link>
                        </span> 
                    </div> */}
                            </Form>

                            <div className="formSocial">
                                <div className='d-flex justify-content-center'>
                                    <span></span> 
                                        <h6>OR</h6>
                                    <span></span>
                                </div>
                                <div className='fbToGoogle'>
                                    <button className='google btn'>
                                        Continue with Facebook
                                    </button> <br />
                                    <button className='facebook btn'>
                                        Continue with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({isAuthenticated}) => {
    return (
        <nav>
            <div className="App-header">
                {!isAuthenticated && (
                    <div>
                        <Route exact path='/' render={() => (
                            <Links active='Home' />
                        )} />
                        <Route path='/login' render={() => (
                            <div>
                                <Link active='Login' />
                                <LoginForm />
                            </div>
                        )} />
                        <Route path='/register' render={() => (
                            <div>
                                <Links active='Register' />
                                <RegisterForm />
                            </div>
                        )} />
                    </div>
                )}

                {isAuthenticated && <Logout />}
                <div>
                <Link to='/'>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                </div>
            </div>
        </nav>
        
    )
}

export default Header
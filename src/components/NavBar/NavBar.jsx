import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Text Utils</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        
                    </ul>
                    <div className={props.mode === 'dark'? "form-check form-switch text-light": 'form-check form-switch'}>
                        <input className="form-check-input" type="checkbox" id="mode" onClick={props.enableDarkMode} />
                        <label className="form-check-label" htmlFor="mode">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

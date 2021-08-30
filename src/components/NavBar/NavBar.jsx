import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Text Utils</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={props.mode === 'dark'? "form-check form-switch text-light": 'form-check form-switch'}>
                        <input className="form-check-input" type="checkbox" id="mode" onClick={props.enableDarkMode} />
                        <label className="form-check-label" htmlFor="mode">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

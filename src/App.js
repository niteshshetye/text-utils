// Library ---------------------------->
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components ---------------------------->
import TextUtils from './components/TextUtils/TextUtils'
import NavBar from './components/NavBar/NavBar'

// Css ---------------------------->


export default function App() {
    const [mode, setMode] = useState('light')

    const enableDarkMode = () => {
        if(mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#21252a'
        }else{
            setMode('light')
            document.body.style.backgroundColor = 'white'
        }
    }
    return (
        <Router>
            <NavBar mode={mode} enableDarkMode={enableDarkMode}/>
            <Switch> 
                <Route exact path='/'>
                    <TextUtils mode={mode} />
                </Route> 
            </Switch>
        </Router>
    )
}

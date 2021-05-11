import React  from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {Store} from './context/contex'
import {BrowserRouter} from 'react-router-dom'
const Index=()=>{
    return(
        <Store>
            <BrowserRouter>
            <App />
            </BrowserRouter>
            
        </Store>
        
    )
}
ReactDOM.render(<Index />,document.getElementById('root'));
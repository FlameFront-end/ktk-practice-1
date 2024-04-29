import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.scss'
import { SnackbarProvider } from 'notistack'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<SnackbarProvider
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'right'
		}}
		maxSnack={2}
		autoHideDuration={2000}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</SnackbarProvider>
)

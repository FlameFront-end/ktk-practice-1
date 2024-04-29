import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.scss'
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<SnackbarProvider
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			maxSnack={2}
			autoHideDuration={2000}
		>
			<App />
		</SnackbarProvider>
	</BrowserRouter>
)

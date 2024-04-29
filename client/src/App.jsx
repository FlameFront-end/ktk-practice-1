import AppRoutes from './routes/AppRoutes.jsx'
import './App.scss'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

function App() {
	return (
		<SnackbarProvider
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			maxSnack={2}
			autoHideDuration={2000}
		>
			<AppRoutes />
		</SnackbarProvider>
	)
}

export default App

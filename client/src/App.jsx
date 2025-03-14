import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/store'
import { AppRouter, Navbar, PlaygroundFab, ScrollToTop, Snackbar } from '@/components'
import { ThemeProvider } from '@/providers'
// import { GoogleOAuthProvider } from '@react-oauth/google'

const MemoriesApp = () => {
	//  [System.Environment]::SetEnvironmentVariable("NODE_ENV","development","User")
	// const appEnviromnent = import.meta.env.MODE || 'development'
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
				<Snackbar />
				<ScrollToTop />
				<PlaygroundFab />
			</BrowserRouter>
		</Provider>
	)
}

const App = () => {
	return (
		<ThemeProvider>
			<CssBaseline />
			{/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}> */}
			<MemoriesApp />
			{/* </GoogleOAuthProvider> */}
		</ThemeProvider>
	)
}

export default App

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

if(!clientId){
  throw new Error("REACT_APP_CLIENT_ID or REACT_APP_DOMAIN is not defined in your environment variables.")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-1mglmnu788jawjg1.us.auth0.com"
    clientId = {clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)

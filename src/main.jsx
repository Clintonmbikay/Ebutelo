import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './contact/contact.jsx';
import PricingPage from './pricing/pricing.jsx';
import Modal from './components/modal/modal.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/pricing",
    element: <PricingPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Modal /> */}
    <RouterProvider router={routes} />
  </StrictMode>,
)

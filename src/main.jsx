import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './index2.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainThing from './nightcraft-main-thing.jsx'
import MainInfo from './component-main-info/main-info.jsx'
import FooterInfo from './component-footer/footer-nc'
import ContactoNc from './component-contactanos/contacto-nc.jsx'
import About from './component-about/about-nc.jsx'
import TeamNc from './component-team/team-nc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>

        <MainThing />
        

        <Routes>
          <Route path='/nightcraftmc-info' />
          <Route path='/' element={<MainInfo />}/>
          <Route path='/contactanos' element={<ContactoNc />}/>
          <Route path='/sobre-nosotros-nc' element={<About />} />
          <Route path='equipo-nightcraft' element={<TeamNc />}/>
        </Routes>
        <FooterInfo />

      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)

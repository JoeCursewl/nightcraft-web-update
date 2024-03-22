import React, { useEffect, useState } from 'react';
import './nightcraft-main-thing.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function MainThing() {
    const [open, SetIsopen] = useState(false);

    useEffect(() => {
        const botonBars = document.querySelector(".bars__menu");
        botonBars.addEventListener('click', animateBars);
    
        return () => {
          botonBars.removeEventListener('click', animateBars);
        };
      }, [open]);
    
      function animateBars() {
        const lines1 = document.querySelector(".lines1__bars-menu");
        const lines2 = document.querySelector(".lines2__bars-menu");
        const lines3 = document.querySelector(".lines3__bars-menu");
        lines1.classList.toggle("activelines1__bars-menu")
        lines2.classList.toggle("activelines2__bars-menu")
        lines3.classList.toggle("activelines3__bars-menu")
        SetIsopen(!open);
      }


    return (
        <section className='sec-main-pg'>
            <header>
                <nav className='nc-all-content-nav'>
                    <div className='nc-logo-sk'>
                        <Link className='logo-link' to={"/nightcraftmc-info"}>
                            <img src="/logo.webp" alt="NightcraftMC Logo" />
                        </Link>
                    </div>

                    <div className='nc-links-all'>
                        <ul className='nc-links-sng'>
                            <li><Link className='n-link' to={"/"}>Inicio</Link></li>
                            <li><Link className='n-link' to={"/sobre-nosotros-nc"}>Sobre nosotros</Link></li>
                            <li><Link className='n-link' to={"/contactanos"}>Contáctanos</Link></li>
                            <li><Link className='n-link'>Foros</Link></li>
                            <li><Link className='n-link' to={"/equipo-nightcraft"}>Equipo</Link></li>
                            <li><a className='n-link' href='https://nightcraftmc.tebex.io/' target='_blank'>Tienda</a></li>
                        </ul>
                    </div>

                    <div className='bars__menu'>
                        <span className="lines1__bars-menu"></span>
                        <span className="lines2__bars-menu"></span>
                        <span className="lines3__bars-menu"></span>
                    </div>
                </nav>

                {open !== false ? <motion.div className='nc-links-all-2' animate={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: -100 }} transition={{ duration: 0.5 }}>
                        <ul className='nc-links-sng-2'>
                            <li><Link className='n-link' to={"/"}>Inicio</Link></li>
                            <li><Link className='n-link' to={"/sobre-nosotros-nc"}>Sobre nosotros</Link></li>
                            <li><Link className='n-link' to={"/contactanos"}>Contáctanos</Link></li>
                            <li><Link className='n-link'>Foros</Link></li>
                            <li><Link className='n-link' to={"/equipo-nightcraft"}>Equipo</Link></li>
                            <li><a className='n-link' href='https://nightcraftmc.tebex.io/' target='_blank'>Tienda</a></li>

                        </ul>
                    </motion.div> : ""}
            </header>
        </section>
    )
}
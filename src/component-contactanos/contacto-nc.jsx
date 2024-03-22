import { useEffect, useState } from 'react'
import './contacto-nc.css'
import InputS from './input-nc'
import { motion } from 'framer-motion'

export default function ContactoNc() {
    const [state, setState] = useState('');

    
    const Arrozito = (ola) => {
        const arroz = ola;
        return arroz;
    }

    useEffect(() => {
        Arrozito();
    }, [state])

    return (
        <motion.section className='sec-contact-nc' animate={{ opacity: 1 }} initial={{ opacity: -100 }} transition={{ duration: 0.7 }}>

            <div className='sec-nc'>
                <div className='msg-nc-sng'>
                    <img src="/clipboard-nc.svg" alt="Mensajes SVG File" />
                </div>

                <div className='msg-nc-sng'>
                    <h1>Puedes mandar un mensaje con la duda que tengas!.</h1>
                </div>

            </div>

            <form action="">
                <InputS />
            </form>
        </motion.section>
    )
}
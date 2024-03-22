import React from 'react';
import { useState } from 'react';
import './vote-nc.css'
import { motion } from 'framer-motion'

export default function VoteNc({ cm_info, cm_href, outline_word, cm_p }) {
    const [copyIp, SetCopiedIp] = useState(false);

    const CopyIpNightcraft = (texto) => {
        navigator.clipboard.writeText(texto)
          .then(() => {
            SetCopiedIp(true);
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
            SetCopiedIp(false);
          });
      }
      


    return (
        <div className='dv-contentvote-all'>

            <div className='dv-mn-all'>
                <div className='dv-info'>
                    <h3>
                        {cm_info} <a href={cm_href} target='_blank'><span className='purple-nc'>{outline_word}</span></a>
                    </h3>
                    <img src="/logo.webp" alt="Nightcraft Logo Webp" />
                </div>

                <div className='dv-info-votes'>
                    <p>
                        {cm_p}
                    </p>
                </div>

                <div className='dv-ip-nc'>
                    <div className='dv-copy-nf'>
                        <h3><span className='zian-nc'>play.nightcraft.org</span></h3>
                        <button onClick={() => CopyIpNightcraft("play.nightcraft.org")}>
                        <img src="/copy-nc.svg" alt="SVG File Copy" />
                        </button>
                    </div>
                    <div className='p-separator'>
                        <p className='purple-nc'>|</p>
                    </div>
                    <div className='dv-copy-nf'>    
                        <h3><span className='zian-nc'>support@nightcraft.org</span></h3>
                        <button onClick={() => CopyIpNightcraft("support@nightcraft.org")}><img src="/copy-nc.svg" alt="SVG File Copy" /></button>
                    </div>
                    
                </div>
                <div>
                    {copyIp && <motion.h3 className='purple-nc' animate={{ x: 0, opacity: 1 }} initial={{ x: 80, opacity: -100 }} transition={{ duration: 0.4}}>Texto Copiado!</motion.h3>}
                </div>
            </div>

        </div>
    )
}
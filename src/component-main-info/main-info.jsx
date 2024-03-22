import './main-info.css'
import MiniCard from './card-social'
import DiscordInfo from '../component-discord/discord-nc-info'
import StatusNightcraft from '../component-status-nc/status-nc'
import { motion } from 'framer-motion'
import VoteNc from '../component-about/vote-nc'
import { useState } from 'react'

export default function MainInfo() {
    var info_votes = "Recuerda que votando diariamente, puedes obtener recompensas dentro del servidor y de esta manera, también nos ayudas a posicionar el servidor y crecer muchas más esta comunidad!"
    
    const [dataCopy, SetDatacopy] = useState(false)

    const CopyIpNightcraft = (texto) => {
        navigator.clipboard.writeText(texto)
          .then(() => {
            SetDatacopy(!dataCopy)
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
          });
      }

    return (
        <motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -10, opacity: -100 }} transition={{ duration: 0.9 }} className='main-info-nc'>
            <div className='smain-info-nc'>
                <div className='nc-lg-info'>
                    <img src="/logo.webp" alt="NightcraftMC Logo" />
                </div>

                <div className='nc-stf-low'>
                    {dataCopy === false ? <motion.h1 className='ip-nc' animate={{ x: 0, opacity: 1 }} initial={{ x: -10, opacity: -100 }} transition={{ duration: 0.5}}>PLAY.NIGHTCRAFT.ORG</motion.h1> : <motion.h2 className='ip-nc' animate={{ x: 0, opacity: 1 }} initial={{ x: -10, opacity: -100 }} transition={{ duration: 0.5}}>IP Copiada!</motion.h2>}
                    <button onClick={() => CopyIpNightcraft("play.nightcraft.org")}><img src="/copy-nc-2.svg" alt="" /></button>
                </div>

                <div className='all-cards-social'>
                    <MiniCard img_ref={"/discord-we.svg"} alt_ref={"Discord SVG File"} href={"https://discord.nightcraft.org"}/>
                    <MiniCard img_ref={"tiktok-nc.svg"} alt_ref={"TikTok SVG File"} href={"https://tiktok.com/@nightcraftnet"}/>
                    <MiniCard img_ref={"/yt-nc.svg"} alt_ref={"Youtube SVG File"} href={"https://youtube.com/@nightcraftnet"}/>
                    <MiniCard img_ref={"/twitter-nc.svg"} alt_ref={"Twitter (X) SVG File"} href={"https://twitter.com/nightcraftnw"}/>
                </div>
            </div>

            <div className='nc-nf-ft'>
                <div className='nc-nf-we'>
                    <div className='sm-ft'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#c752b7" stroke-width="1.5"></circle> <path d="M12 17V11" stroke="#c752b7" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#c752b7"></circle> </g></svg>
                        <h2>¿Quiénes somos?</h2>
                    </div>

                    <p>
                    ¡Bienvenidos a nuestro servidor de Minecraft! Somos una comunidad apasionada por ofrecer una experiencia única y emocionante para todos los amantes de Minecraft. En nuestro servidor, te ofrecemos dos modalidades exclusivas para que disfrutes al máximo:
                    </p>
                </div>

                <div className='info-mdl-nc'>

                    <div className='card-md-nc'>
                        <div className='sm-ft'>
                            <img src="/survival-icon.svg" alt="Survival SVG File" />
                            <h2>Survival Custom</h2>
                        </div>

                        <p>
                        ¿Eres un aventurero que busca la emoción de sobrevivir en un mundo dinámico y personalizado? Nuestra modalidad  
                        <span className='sc'> Survival Custom</span> está diseñada para ti. Aquí, encontrarás un emocionante mundo abierto lleno de desafíos y características 
                        únicas. Desde misteriosas mazmorras hasta biomas personalizados, nuestro Survival te brinda una experiencia de juego fresca 
                        y emocionante!.
                        </p>

                        <h3>NightcraftMC Network</h3>
                    </div>

                    <div className='card-md-nc'>
                        <div className='sm-ft'>
                            <img src="/fac.svg" alt="Factions SVG File" />
                            <h2>Factions</h2>
                        </div>

                        <p>
                        ¿Prefieres la emoción de la lucha y la estrategia en un entorno competitivo? En nuestra modalidad <span className='sc'>Factions</span>, 
                        podrás unirte a una facción o crear la tuya propia y competir por la supremacía en un mundo lleno de alianzas, traiciones y batallas épicas. 
                        ¿Tienes lo que se necesita para construir una base impenetrable y enfrentarte a tus enemigos con astucia y valentía?
                        </p>

                        <h3>NightcraftMC Network</h3>
                    </div>

                    <div className='card-md-nc'>
                        <div className='sm-ft'>
                            <img src="/boxpvp-icon.svg" alt="Boxpvp SVG File" />
                            <h2>BoxPvP</h2>
                        </div>

                        <p>
                        Embárcate en una experiencia futurista y cósmica con <span className='sc'>AstroBox</span>, nuestra modalidad de <span className='sc'>BoxPvP</span> en Minecraft. 
                        Sumérgete en combates intensos dentro de cajas flotantes ambientadas en el vasto espacio. Elige entre kits 
                        personalizados inspirados en tecnologías avanzadas y habilidades galácticas!. 
                        </p>

                        <h3>NightcraftMC Network</h3>
                    </div>

                    <div className='card-md-nc'>
                        <div className='sm-ft'>
                            <img src="/eventos-icon.svg" alt="Eventos SVG File" />
                            <h2>Eventos</h2>
                        </div>

                        <p>
                        Muy aparte de las modalidades que ya ofrecemos, también tenemos un algo mucho más especial. Un servidor para eventos de la Comunidad!. 
                        Cada cierto tiempo se realizan eventos para ofrecerle a la comunidad algo distinto y entrenido, para poder ofrecerles recompenzas a 
                        todos los que hacen en vida Nightcraft!.  
                        </p>

                        <h3>NightcraftMC Network</h3>
                    </div>

                </div>

            </div>

            <DiscordInfo />

            <VoteNc cm_info={"¿Ya votaste por el servidor? hazlo"} cm_href={"https://topmineros.com/votar/NIGHT"} outline_word={"aquí!"} cm_p={info_votes}/>

            <StatusNightcraft />

        </motion.div>
    )
}
import './about-nc.css'
import VoteNc from './vote-nc'
import { motion } from 'framer-motion'

export default function About() {

    var info_votes = "Recuerda que votando diariamente, puedes obtener recompensas dentro del servidor y de esta manera, también nos ayudas a posicionar el servidor y crecer muchas más esta comunidad!"

    return (
        <motion.section className='sec-about-nc' animate={{ x: 0, opacity: 1 }} initial={{ x: -10, opacity: -100 }} transition={{ duration: 0.4}}>

            <div className='sec-about-all'>
                <div className='tl-nc-about'>
                    <img src="/about-us-nc.svg" alt="" />
                    <h1>Sobre Nosotros</h1>
                </div>

                <div className='info-lo-mn'>
                    <p>
                    La dedicación del equipo detrás de <span className='purple-nc'>NightcraftMC</span> es evidente en la <span className='zian-nc'>calidad</span> de la 
                    experiencia de juego que ofrecen. Con un servicio de alta <span className='zian-nc'>calidad</span> y un rendimiento sin 
                    igual, los <span className='purple-nc'>jugadores</span> disfrutan de una conexión fluida y estable que permite sumergirse 
                    <span className='purple-nc'> completamente</span> en el vasto mundo de posibilidades que ofrece el <span className='zian-nc'>servidor</span>. Además, 
                    el equipo de administradores y moderadores trabaja arduamente para garantizar un 
                    ambiente <span className='zian-nc'>seguro y amigable</span> para todos los jugadores, fomentando la <span className='purple-nc'>diversión</span> y la 
                    <span className='purple-nc'> camaradería.</span>
                    </p>
                </div>

                <div className='both-info'>
                    <div className='info-aboutus-nc'>
                        <h2>
                            <img src="/logro-nc.svg" alt="SVG File" />
                            Logros de NightcraftMC
                        </h2>
                        <p>
                            <span className='purple-nc'>Nightcraft</span> en su tiempo en <span className='zian-nc'>línea</span>, ha logrado establecer modos de juegos <span className='zian-nc'>interesantes</span>,
                            que apesar de lo común que son dentro de la <span className='zian-nc'>comunidad</span>, se ha logrado obtener un diferenciador
                            en este <span className='purple-nc'>ámbito.</span> Se prevé que para el futuro se pueda lograr algo así en toda la comunidad.
                        </p>
                    </div>

                    <div className='info-aboutus-nc'>
                        <h2>
                            <img src="/server-nc.svg" alt="SVG File" />
                            NightcraftMC Network
                        </h2>
                        <p>
                            <span className='purple-nc'>Nightcraft</span>, parte de la idea de un <span className='zian-nc'>servidor</span> con tematica espacial, que permite a los jugadores
                            vivir una <span className='zian-nc'>experencia</span> dentro del servidor distinta, y poder tener una <span className='purple-nc'>experiencia única</span>, que con el paso
                            de los días el equipo de administradores <span className='zian-nc'>mejorará de forma constante.</span>
                        </p>
                    </div>

                    <div className='info-aboutus-nc'>
                        <h2>
                            <img src="/aspiracion-nc.svg" alt="SVG File" />
                            Aspiración
                        </h2>
                        <p>
                        Las aspiraciones que se tienen con este proyecto llamado <span className='purple-nc'>"Nightcraft" </span>
                        son; <span className='zian-nc'>crear</span> un servidor con un tema único y original.
                        <span className='zian-nc'> Construir</span> mapas y modos impresionantes.
                        <span className='zian-nc'> Utilizar</span> el juego para crear arte y escencia.
                        <span className='zian-nc'> Compartir</span> tus creaciones con la comunidad de <span className='purple-nc'>Nightcraft.</span>
                        </p>
                    </div>
                </div>
            </div>

            <VoteNc cm_info={"¡No olvides que puedes votar por el servidor"} cm_href={"https://topmineros.com/votar/NIGHT"} outline_word={"aquí!"} cm_p={info_votes}/>

        </motion.section>
    )
}
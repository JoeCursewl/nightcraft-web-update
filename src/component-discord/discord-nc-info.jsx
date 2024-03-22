import { useState } from 'react'
import './discord-nc-info.css'
import InfoCm from './componente-info-all';

export default function DiscordInfo() {
    const [discord, setDiscord] = useState(false);
    const [support, setSupport] = useState(true);
    const [info, setInfo] = useState(false);
    const [exp, setExp] = useState(false);  
    var info_support = "En NightcraftMC, nos enorgullece ofrecer un servicio de soporte excepcional para asegurarnos de que tu experiencia en nuestro servidor sea siempre suave y agradable. Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para atender todas tus consultas, resolver problemas y brindarte la ayuda que necesitas."
    var info_discord = "Además de brindar soporte en el juego, también ofrecemos asistencia adicional a través de nuestro servidor de Discord. Nuestro equipo de moderadores y administradores está disponible para responder a tus preguntas, resolver problemas técnicos y brindarte orientación en todo momento."
    var info_variedad = "En nuestro servidor, nos enorgullece ofrecer una amplia variedad de opciones para brindarte una experiencia de juego única y emocionante. Queremos que cada jugador encuentre algo que le apasione y disfrute al máximo. Contamos con diversos modos de juego, desde el clásico Survival donde podrás explorar, construir y sobrevivir en un mundo lleno de desafíos, hasta minijuegos divertidos y competitivos donde podrás poner a prueba tus habilidades contra otros jugadores."
    var info_seguridad = "Implementamos rigurosas medidas de seguridad para proteger tus datos personales y garantizar que tu información esté a salvo. Utilizamos tecnologías avanzadas de cifrado y contamos con políticas estrictas de protección de datos para evitar cualquier acceso no autorizado."

    const changeDiscord = () => {
        setDiscord(true);
        setSupport(false);
        setInfo(false);
        setExp(false);
    }

    const changeSupport = () => {
        setDiscord(false)
        setSupport(true);
        setInfo(false);
        setExp(false);
    }

    const changeVariedad = () => {
        setDiscord(false);
        setSupport(false);
        setInfo(true);
        setExp(false);
    }

    const changeSecurity = () => {
        setDiscord(false);
        setSupport(false);
        setInfo(false);
        setExp(true);
    }



    return (
        <section className='discord-info'> 
            <div className='discord-info-all-cn'>
                <h3>
                    ¿Por qué NightcraftMC?
                </h3>
            </div>

            <div className='btns-nc-comp'>
                <div className='discord-btn-comp'>
                    <button onClick={() => {
                        changeDiscord();
                        }}>
                        <img src="/discord-we.svg" alt="Discord SVG File" />
                        Discord
                    </button>

                    <button onClick={() => changeSupport()}>
                        <img src="/support-nc-new.svg" alt="Support SVG File" />
                        Soporte
                    </button>
                </div>

                <div className='discord-btn-comp'>
                    <button onClick={() => changeSecurity()}>
                        <img src="/security-nc.svg" alt="Security SVG File" />
                        Seguridad
                    </button>

                    <button onClick={() => changeVariedad()}>
                        <img src="/variedad-nc.svg" alt="Variedad SVG File" />
                        Variedad
                    </button>
                </div>

            </div>

            {discord !== false ? <InfoCm img_nf={"/discord-we.svg"} alt_nf={"Discord SVG File"} info_cm={info_discord}/> : ""}
            {support !== false ? <InfoCm img_nf={"/support-nc-new.svg"} alt_nf={"SVG File"} info_cm={info_support}/> : ""}
            {info !== false ? <InfoCm img_nf={"/variedad-nc.svg"} alt_nf={"SVG File"} info_cm={info_variedad}/> : ""}
            {exp !== false ? <InfoCm img_nf={"/security-nc.svg"} alt_nf={"SVG File"} info_cm={info_seguridad}/> : ""}

        </section>
    )
}
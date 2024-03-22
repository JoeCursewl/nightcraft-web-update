import { useEffect, useState } from 'react';
import './status-nc.css'

export default function StatusNightcraft({...props}) {

    const [serverinfo, SetServerinfo] = useState('');
    const [error, setError] = useState('');

    async function obtenerInformacionServidor() {

            const url = 'https://api.mcsrvstat.us/3/play.nightcraft.org';
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.online) {
                    const jugadoresConectados = data.players ? data.players.online : 0;
                    SetServerinfo(jugadoresConectados);
                } else {
                    setError("El servidor se encuentra apagado.")
                }
            } catch (error) {
                setError(error)
            }
        }

    useEffect(() => {
        obtenerInformacionServidor();
    }, [serverinfo])





    return (
        <section className="status-nc-mn">
            <div className='st-nc-all'>
                <div className='ev-status-nc'>
                    <div className='img-status'>
                        <div className='status-dv'>
                            <img src="/discord-we.svg" alt="Nightcraft Logo" />
                            <p>{error === '' ? "Servidor de Discord" : error}</p>
                            <div className='weedo'>
                                <img src="/online-nc.svg" alt="Online Players SVG File" />

                            </div>
                            <p>{error === '' ? serverinfo : ""}</p>
                        </div>

                        <div className='ip-info-status'>
                            <img src="ip-nc.svg" alt="IP NightcraftMC SVG File" />
                            <a href='https://discord.nightcraft.org' target='_blank'>discord.nightcraft.org</a>
                        </div>
                    </div>

                    <div className='info-status'>
                    </div>
                </div>

                <div className='ev-status-nc'>
                    <div className='img-status'>
                        <div className='status-dv'>
                            <img src="/logo.webp" alt="Nightcraft Logo" />
                            <p>{error === '' ? "Jugadores Online" : error}</p>
                            <div className='weedo'>
                                <img src="/online-nc.svg" alt="Online Players SVG File" />

                            </div>
                            <p>{error === '' ? serverinfo : ""}</p>
                        </div>

                        <div className='ip-info-status'>
                            <img src="ip-nc.svg" alt="IP NightcraftMC SVG File" />
                            <p>play.nightcraft.org</p>
                        </div>
                    </div>

                    <div className='info-status'>
                    </div>
                </div>
            </div>
        </section>
    )
}
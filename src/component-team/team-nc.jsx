import './team-nc.css'
import VoteNc from '../component-about/vote-nc'
import TeamInfo from './team-info-nc'
import MemberNc from './members-info'
import { motion } from 'framer-motion'

export default function TeamNc() {
    var info_admins = ["Aquí se encuentran los actuales administradores del servirdor, los cuales se encargan de llevar el orden con el Equipo más bajo.",
                        "\nEste apartado puede cambiar con el paso del tiempo."]

    var info_mods = ["En este apartado se encuentran los moderadores, encargados de moderar todas las interacciones entre los usuarios",
                    "\ndentro del servidor, y en el servidor de Discord. Resolviendo dudas. Proporcionando información de utilidad y manteniendo",
                    "\nbajo control la comunidad de cada modalidad."]

    var info_devs = ["En este otro apartado, se encuentran los actuales desarrolladores del servidor,",
                    "\nque básicamente se encargan de diseñar y optimizar todas las funcionalidades dentro del servidor",
                    "\nIncluidas las modalidades, la implementación de mapas, el diseño web, el diseño de gráfico, etc."]

    var info_owners = ["Por último, en el apartado de los Owners, tenemos los encargados de mantener el servidor y los que",
                    "\ntoman la última decisión para la implementación de nuevas cosas en el servidor, y encargados de analizar",
                    "\nque rumbo tomará el servidor."]


    const nc_admins = [
        {
            "name": "zFxcu",
            "position": "Administración",
            "m_img": "./heads-nc/zfxcu_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        },
        {
            "name": "232i",
            "position": "Administración",
            "m_img": "./heads-nc/232i_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        },
        {
            "name": "Fvxbri",
            "position": "Administración",
            "m_img": "./heads-nc/fxbri_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        }
    ]

    const nc_mods = [
        {
            "name": "Capo_Alvarez",
            "position": "Moderación",
            "m_img": "./heads-nc/zfxcu_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        },
        {
            "name": "_Dalem_",
            "position": "Moderación",
            "m_img": "./heads-nc/dalem_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        }
    ]

    const nc_dev = [
        {
            "name": "Joehai",
            "position": "Desarrollador Sr",
            "m_img": "./heads-nc/joehai_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "red-nc"
        },
        {
            "name": "Ren",
            "position": "Desarrollador Sr",
            "m_img": "./heads-nc/ren_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "red-nc"
        },
        {
            "name": "Alejandro",
            "position": "Desarrollador",
            "m_img": "./heads-nc/alejandro_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "zian-nc"
        }
    ]

    const nc_owners = [
        {
            "name": "Ren",
            "position": "Fundador",
            "m_img": "./heads-nc/ren_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "red-nc"
        },
        {
            "name": "Rayzen8756",
            "position": "Owner",
            "m_img": "./heads-nc/rayzen_head_nc.png",
            "c_name": "purple-nc",
            "c_position": "red-nc"
        }
    ]

    return (
        <motion.section className='sec-team-nc' animate={{ opacity: 1 }} initial={{ opacity: -100 }} transition={{ duration: 0.8 }}>
            <div className='team-nc-all'>

                <div className='tm-mem-info'>
                    <h1 className='night-t'>Equipo de Nightcraft</h1>
                    <p>En este apartado se encuentran los <span className='purple-nc'></span> que conforman el equipo de Nightcraft Network, 
                        los encargados de mantener el <span className='purple-nc'>servidor</span> y la comunidad en orden y poder así brindar una mejor
                        experiencia de <span className='zian-nc'>juego</span> para todos.
                    </p>
                </div>

            </div>
            
            <VoteNc cm_href={"https://topmineros.com"} cm_info={"¿Terminaste de leer el apartado de equipo? Vota"} outline_word={"aquí!"} cm_p={"Votar por el servidor nos ayuda a posicionar su nombre, y hacer crecer más esta comunidad, al igual que cada que votas obtienes recompensas dentro del servidor!"}/> 

            <TeamInfo title_info={"Administradores"} p_info={info_admins}/>

            <div className='nc-members-info'>
                {nc_admins !== undefined ? nc_admins.map((admins) => (
                    <MemberNc member_name={admins.name} member_position={admins.position} member_img={admins.m_img} m_color_name={admins.c_name} m_color_p={admins.c_position}/>
                )) : ""}
            </div>

            <TeamInfo title_info={"Moderadores"} p_info={info_mods}/>

            <div className='nc-members-info'>
                {nc_mods !== undefined ? nc_mods.map((mods) => (
                    <MemberNc member_name={mods.name} member_position={mods.position} member_img={mods.m_img} m_color_name={mods.c_name} m_color_p={mods.c_position}/>
                )) : ""}
            </div>

            <TeamInfo title_info={"Equipo de Desarrollo"} p_info={info_devs}/>

            <div className='nc-members-info'>
                {nc_dev !== undefined ? nc_dev.map((devs) => (
                    <MemberNc member_name={devs.name} member_position={devs.position} member_img={devs.m_img} m_color_name={devs.c_name} m_color_p={devs.c_position}/>
                )) : ""}
            </div>

            <TeamInfo title_info={"Owners"} p_info={info_owners}/>

            <div className='nc-members-info'>
                {nc_owners !== undefined ? nc_owners.map((owners) => (
                    <MemberNc member_name={owners.name} member_position={owners.position} member_img={owners.m_img} m_color_name={owners.c_name} m_color_p={owners.c_position}/>
                )) : ""}
            </div>


        </motion.section>
    )
}
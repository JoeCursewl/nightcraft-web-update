import './team-nc.css'
import MemberNc from './members-info'

export default function TeamInfo({ title_info, p_info}) {
    return (
        <div className='team-nc-all'>

                <div className='tm-mem-info'>
                    <h2 className='night-t'>{title_info}</h2>
                    <p>
                        {p_info}
                    </p>
                </div>

        </div>
    )
}
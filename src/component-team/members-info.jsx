import React from 'react'
import '../component-about/vote-nc.css'

export default function MemberNc({ member_name, member_position, member_img, m_color_name, m_color_p}) {

    return (
        <div className='dv-contentvote-all'>

            <div className='dv-content-members'>
                <div className='flex justify-center items-center gap-4'>
                    <div>
                        <img src={member_img} alt="" />
                    </div>
                    <p className={m_color_name}>{member_name}</p>
                </div>
                <h2 className={m_color_p}>{member_position}</h2>
            </div>

        </div>
    )
}
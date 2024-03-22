import './discord-nc-info.css'
import { motion } from 'framer-motion'

export default function InfoCm({ img_nf, alt_nf, info_cm }) {
    return (
        <motion.div className='dc-vg-all' animate={{ y: 0, opacity: 1}} initial={{ y: -10, opacity: -100}} transition={{ duration: 0.4}}>
                <div className='dc-lg-nc'>
                    <img src={img_nf} alt={alt_nf} />
                </div>

                <div className='dc-info-nc'>
                    <p className=''>
                        {info_cm}
                    </p>
                </div>
        </motion.div>
    )
}
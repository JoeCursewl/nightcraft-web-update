import './card-social.css'

export default function MiniCard({ img_ref, alt_ref, href }) {
    return (
        <div className='mini-card-social'>
            <a href={href} target='_blank'><img src={img_ref} alt={alt_ref} /></a>
        </div>
    )
}
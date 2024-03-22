import './footer-nc.css'
import FooterModal from './modal-nc-info'


export default function FooterInfo() {

    return (
        <footer className='footer-nc'>
            <div className='footer-nc-all-cn'>
                <div className='ft-img-nc'>
                    <img className="logito-nc-ft" src="/logo.webp" alt="Nightcraft Logo Webp File" />
                </div>

                <div className='ft-data-links'>
                    <FooterModal /> 
                </div>

            </div>
        </footer>
    )
}
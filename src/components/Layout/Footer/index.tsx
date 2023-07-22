import './footer.css'
import lightLogo from '../../../assets/images/logo-light.svg'
import darkLogo from '../../../assets/images/logo-dark.svg'
import edamam from '../../../assets/images/edamam.svg'
const Footer = () => {
  return (
    <footer className="footer">
    <p className="copyright body-medium">
        Copyright 2023 <span style={{color:"var(--primary)"}} className='body-large'>SunilBarewar</span>
    </p>

    <a href="/" className="logo">
        <img src={lightLogo} alt="Cook.io" width="156" height="32" className="logo-light"/>

        <img src={darkLogo} alt="Cook.io" width="156" height="32" className="logo-dark"/>
    </a>

    <a href="https://www.edamam.com/" target="_blank" className="edamam">
        <img src={edamam} alt="edamam free recipe api" width="200" height="40" loading="lazy"/>
    </a>
</footer>
  )
}

export default Footer
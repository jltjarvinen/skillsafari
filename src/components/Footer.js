import React from 'react'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { rhythm, scale } from "../utils/typography"

const Socials = props => {
  const facebook = 'https://www.facebook.com/skillsafari'
  const linkedin = 'https://www.linkedin.com/company/skillsafari'
  const twitter = 'https://twitter.com/sjarvin'
  const mailto = 'mailto:satu@skillsafari.io'
  const iconsize = 32

  return (
    <div>
      <a href={facebook} target="_blank"><FaFacebook style={{margin: 5}} size={iconsize}/></a>
      <a href={twitter} target="_blank"><FaTwitter style={{margin: 5}} size={iconsize}/></a>
      <a href={linkedin} target="_blank"><FaLinkedIn style={{margin: 5}} size={iconsize}/></a>
      <a href={mailto}><FaEnvelope style={{margin: 5}} size={iconsize}/></a>
    </div>
  )
}

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p><Socials /></p>
    <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool
}

export default Footer

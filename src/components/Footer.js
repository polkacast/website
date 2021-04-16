import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMedium, faTelegram } from '@fortawesome/free-brands-svg-icons'
import ExternalLink from './ExternalLink'

const Footer = () => {
  // the first argument in track() becomes the google analytics 'Action' property after passing through segment
  // all events are of Action 'Homepage'
  const fireEvent = (category, label) => {
    window.analytics.track('Footer', {
      category,
      label
    })
  }

  return (
    <div className='footer flex-shrink-0'>
      <div className='container'>
        <div className='row' style={{ minHeight: '200px' }}>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Links</h5>
            <ul>
              <li><ExternalLink to='https://polkacastprotocol.medium.com/'>Blog</ExternalLink></li>
              <li><ExternalLink to='/docs'>Docs</ExternalLink></li>
              <li><Link to='/faq'>FAQs</Link></li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Daos</h5>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/jobs'>Careers</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Papers</h5>
            <ul>
              {/* <li><ExternalLink to='https://github.com/polkacast/docs'>Litepaper</ExternalLink></li> */}
              <li><ExternalLink to='https://github.com/polkacast/docs/blob/main/Polkacast-white-paper-1.1.pdf'>White Paper</ExternalLink></li>
            </ul>
          </div>
          <div className='col-12 col-md-4 text-md-right'>
            <ul className='list-inline social'>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'github') }}>
                <ExternalLink to='https://github.com/polkacast'><FontAwesomeIcon icon={faGithub}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'telegram') }}>
                <ExternalLink to='https://t.me/polkacast'><FontAwesomeIcon icon={faTelegram}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'twitter') }}>
                <ExternalLink to='https://twitter.com/polkacast'><FontAwesomeIcon icon={faTwitter}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'medium') }}>
                <ExternalLink to='https://polkacastprotocol.medium.com/'><FontAwesomeIcon icon={faMedium}/></ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 sub-footer'>
            <span className='sub-footer-item'>&copy; 2021 polkacast.network, inc.</span>
          </div>
          <div className='col-12 col-sm-6 sub-footer text-sm-right'>
            <ul className='list-inline'>
              {/* <li className='list-inline-item'><Link to='/legal/tos'>Terms of Service</Link></li> */}
              <li className='list-inline-item'><Link to='/legal/privacy-policy'>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

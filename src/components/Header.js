import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

function myFunction () {
  var x = document.getElementById('navbar')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

const Header = ({ location, showSidebar }) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              logo {
                link
                image
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = 'https://gateway.pinata.cloud/ipfs/QmNZAzmeg6651cEqyorrduKLzSgEb4Aoc71EZiaaKMabkW/polkacast-256.png'
      const logoTitle = 'Polkacast'
      const finalLogoLink = '/'
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img className={'img-responsive displayInline'} src={logoImg} alt={'logo'} />
              </Link>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <div className={'headerTitle displayInline'} dangerouslySetInnerHTML={{ __html: logoTitle }} />
              </Link>
              <span onClick={myFunction} className={'navBarToggle'}>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            <div id="navbar" className={'topnav'} style={{ marginRight: '30px' }}>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                <li key="protocol">
                  <Link className="sidebarLink" to="/">Protocol</Link>
                </li>
                <li key="about">
                  <Link className="sidebarLink" to="/about">About</Link>
                </li>
                <li key="jobs">
                  <Link className="sidebarLink" to="/jobs">Careers</Link>
                </li>
                <li key="contacts">
                  <Link className="sidebarLink" to="/contact">Contacts</Link>
                </li>
                <li key="faqs">
                  <Link className="sidebarLink" to="/faq">Faqs</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }}
  />
)

export default Header

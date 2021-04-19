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
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg')
      const {
        site: {
          siteMetadata: {
            logo,
            headerTitle,
            headerLinks
          }
        }
      } = data
      const finalLogoLink = logo.link !== '' ? logo.link : '/'
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img className={'img-responsive displayInline'} src={(logo.image !== '') ? logo.image : logoImg} alt={'logo'} />
              </Link>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <div className={'headerTitle displayInline'} dangerouslySetInnerHTML={{ __html: headerTitle }} />
              </Link>
              <span onClick={myFunction} className={'navBarToggle'}>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            <div id="navbar" className={'topnav'} style={{ marginRight: '30px' }}>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    // internal links get a <Link/>
                    if (link.link.charAt(0) === '/') {
                      return (
                        <li key={key}>
                          <Link className="sidebarLink" to={link.link}>{link.text}</Link>
                        </li>
                      )
                    }

                    return (
                      <li key={key}>
                        <a className="sidebarLink" href={link.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: link.text }} />
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </nav>
        </div>
      )
    }}
  />
)

export default Header

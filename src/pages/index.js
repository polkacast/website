import React from 'react'
import Head from '../components/Head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import ExternalLink from '../components/ExternalLink'
import BlogCard from '../components/BlogCard'

// all events are of Action 'Homepage'
const fireEvent = (category, label) => {
  console.log('!', category, label)
  window.analytics.track('Homepage', {
    category,
    label
  })
}

const IndexPage = () => {
  return (
    <div className='index-page'>
      <Head data={{
        title: 'Protocols',
        description: 'Documentation for Polkacast dApp and Podcather CastEdge'
      }} />
      <div className='index-blue'>
        <div className='index-row hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-8 col-lg-6'>
                <table className='hero-table'>
                  <tbody>
                    <tr>
                      <td className='highlighted-border-bottom'><span>Ipfs</span></td>
                      <td><span>Wasm</span></td>
                    </tr>
                    <tr>
                      <td className='highlighted-border-bottom'><span>Dao</span></td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ width: '75%', marginBottom: '1.5rem', backgroundColor: '#FFFFFFDD', border: '0.2rem solid transparent', borderRadius: '0.2rem' }}>The Decentralization  Podcasts  Protocol & Ep NFT for Creaters.</p>
                <ExternalLink to='https://github.com/polkacast/docs/blob/main/Polkacast-white-paper-1.1.pdf'>
                  <div
                    className='btn btn-lg btn-primary mr-4'
                    style={{ backgroundColor: '#692E6B' }}
                    onClick={ () => { fireEvent('button-click', 'download-top') }}
                  >
                    white paper
                  </div>
                </ExternalLink>
                <ExternalLink to='https://github.com/polkacast/docs/blob/main/Polkacast-white-paper-1.1.pdf'>
                  <div
                    className='btn btn-lg btn-secondary'
                    onClick={ () => { fireEvent('button-click', 'learn-more-top') }}
                  >
                    learn more
                  </div>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
        <div className='white-triangle'></div>
      </div>
      <div className='index-blue'>
        <div style={{ padding: '75px 0px 38px 0' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-9 offset-sm-0 col-md-6'>
                <h1 className='col-12 col-md-9 text-center text-md-right m-0 mb-2'>Let’s rethink what polkacast can do</h1>
                <p className='col-12 col-md-8 text-center text-md-left offset-md-4'>Polkacast is a podcast protocols and tools for doing more with creators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='index-blue'>
        <div className='index-row' style={{ paddingBottom: '80px' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/Substrate-logo.png")'
                }}>
                </div>
                <h3>BaaS</h3>
                <p>Develop an out-of-the-box podcast platform. Eps produced by podcast creators are stored in ipfs for each issue, which saves costs and increases access speed.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/dao.png")'
                }}>
                </div>
                <h3>Daos</h3>
                <p>Dual DAO governance, every user in the PolkaCast Protocol ecosystem is part of the DAO, the composition of DAO: &apos;DAC&apos; and &apos;DAU&apos;, DAC and DAU carry out a two-way restriction to balance the entire protocol network.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/solve.png")'
                }}>
                </div>
                <h3>Ip Plan</h3>
                <p>Polkacast supports early creators in the form of token support, and in this way expands the influence of creators, achieves creators and increases the adhesion of the platform.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/ipfs_logo.png")'
                }}>
                </div>
                <h3>Podcather CastEdge</h3>
                <p>Use podcather as a node to increase the interaction between users, creators, and platforms, increase more trusted nodes and edge nodes, make the access faster, and provide staking rewards to participating users to incentivize the entire ecological economy.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/NFT_Icon.png")'
                }}>
                </div>
                <h3>Ep NFT</h3>
                <p>Eps produced by podcast creators are packaged and put on the trading platform in NFT, expanding the ecology and the producer&apos; profit model.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/webrtc.png")'
                }}>
                </div>
                <h3>WebRTC+Wasm</h3>
                <p>WebRTC realizes multiplayer online podcast recording.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row'>
        <div className='container mb-5'>
          <div className='row mb-4'>
            <div className='col-12 col-md-4 px-md-1'>
              <h2 className='my-2'>Featured Polkacast</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight' style={{ position: 'relative', paddingBottom: '60px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src="/img/homepage/polkacast_platform_screen.png" className="img-fluid" />
            </div>
            <div className='col-12 col-md-6'>
              <h3 className='mt-0 mb-4'>A Decentralization  Podcasts  Protocol <br/> With Polkacast Dapp</h3>
              <div className='mb-4'>
              A  free dapp for creators, <br/>
              Focus on your creation and let Polkacast take care of the rest.
              </div>
              <div
                className='btn btn-lg btn-secondary mr-4'
                onClick={ () => { fireEvent('button-click', 'download-bottom') }}
              >
                comming soon
              </div>
              {/* <Link to='/docs'>
                <div
                  className='btn btn-lg btn-secondary'
                  onClick={ () => { fireEvent('button-click', 'learn-more-bottom') }}
                >
                  learn more
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight' style={{ position: 'relative', paddingBottom: '60px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src="/img/homepage/flutter_TestFlight.jpeg" className="img-fluid" />
            </div>
            <div className='col-12 col-md-6'>
              <h3 className='mt-0 mb-4'>Polkacast TestFlight  With Flutter dApp</h3>
              <div className='mb-4'>
              Participate in the TestFlight experience, <br/>
              get Cast token rewards.
              </div>
              <ExternalLink to='https://github.com/polkacast/podcather-castedge-dapp'>
                <div
                  className='btn btn-lg btn-secondary'
                  onClick={ () => { fireEvent('button-click', 'learn-more-top') }}
                >
                  learn more
                </div>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
      <div className='index-row spotlight' style={{ paddingBottom: '60px' }}>
        <div className='container' style={{ position: 'relative' }}>
          <div className='row'>
            <div className='col-12 col-md-6' style={{ zIndex: 5, marginRight: '30px' }}>
              <h2 className='mt-0 mb-4'>Podcather CastEdge</h2>
              <div className='mb-3'>
              Ctape  Staking & Uptime Mining.<br/>
              Get in the future with:
              </div>
              <div className='inline-code-highlight'>
              curl -fsSL https://polkacast.network/*****.sh | sh
              </div>
            </div>
            <div className='col-12 col-md-4 p-0' style={{ zIndex: 5 }}>
              <img src="/img/homepage/cli_screenshot.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight' style={{ paddingBottom: 0 }}>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='mt-0 mb-1'>Our  Story</h1>
              <div className='mb-4'>
              A decentralization  podcasts  protocol the polkacast blog
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <BlogCard
                title="what are the current issues with podcasting that need to be resolved?"
                link='https://polkacastprotocol.medium.com/polkacast-what-are-the-current-issues-with-podcasting-that-need-to-be-resolved-b80eb916df81'
                image='https://miro.medium.com/max/1996/1*TFNzjLjpnwNPjrvai-NWuA.png'
                by='Polkacast Dao'
                date='2021-05-08'
                onClick={ () => { fireEvent('blog-card-click', 'smarter-data-publishing') }}
              />
            </div>
            <div className='col-12 col-md-4'>
              <BlogCard
                title="Polkacast Roadmap & Mission"
                link='https://polkacastprotocol.medium.com/polkacast-roadmap-mission-38170118fa0e'
                image='https://miro.medium.com/max/5600/1*x36oQ47EYl_Yj0mPMu3AJg.png'
                by='Polkacast Dao'
                date='2021-05-08'
                onClick={ () => { fireEvent('blog-card-click', 'archive-google-sheets') }}
              />
            </div>

            <div className='col-12 col-md-4'>
              <BlogCard
                title="PolkaCast: Governance Model"
                link='https://polkacastprotocol.medium.com/polkacast-governance-model-65a4ba9de471'
                image='https://miro.medium.com/max/1400/1*XN-sKW2ejRP7Bvg8jfPYfQ.png'
                by='Polkacast Dao'
                date='2021-03-29'
                onClick={ () => { fireEvent('blog-card-click', 'bots-and-trolls') }}
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='col-9 offset-2 col-sm-12 offset-sm-0'>
            <div
              className='text-center more-link'
              onClick={ () => { fireEvent('more-link-click', 'blog') }}
            >
              <ExternalLink to='https://polkacastprotocol.medium.com/'>read more stories on the polkacast blog &nbsp;<FontAwesomeIcon icon={faChevronRight} /></ExternalLink>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12'>
              <h2>Roadmap</h2>
              <div className='text-center'>
                <img src="/img/homepage/roadmap.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <h2>Sign up for the Polkacast Newsletter</h2>
              <form
                className='form-inline newsletter-form input-container'
                action='https://network.us1.list-manage.com/subscribe/post?u=bc8025414f849ed62931f4e45&amp;id=e2c89f546e'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                target='_blank'
                noValidate
                onSubmit={ () => fireEvent('newsletter-form-submit', '')}
              >
                <div className='form-group mr-sm-3 mb-2'>
                  <input type='email' name='EMAIL' className='text-input index-shadow' placeholder='Your Email' id='mce-EMAIL' />
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <button type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='btn btn-primary btn-lg mb-2' style={{ height: '57px' }}>Subscribe</button>

                <div style={{
                  position: 'absolute',
                  left: '-5000px'
                }} aria-hidden='true'>
                  <input type='text' name='b_54a6a8c1171101850b8576277_b41eb6f58e' tabIndex='-1' />
                </div>
                <div id='mce-responses' className='clear'>
                  <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
                  <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
                </div>
              </form>
              <div>Receive updates on our progress and token releases</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

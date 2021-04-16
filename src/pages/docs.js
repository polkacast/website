import React from 'react'
import Head from '../components/Head'
import ExternalLink from '../components/ExternalLink'
// import Tree from '../components/sidebar/tree'

const DocsPage = () => (
  <div className='container docs-page'>
    <Head data={{
      title: 'Polkacast Docs',
      description: 'Documentation for Polkacast dApp and Podcather CastEdge'
    }} />
    <div className='docs-hero'>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-3 docs-title'>
          <h3>Polkacast Ecosystem</h3>
          <p>A Decentralization  Podcasts  Protocol.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 docs-feature-tile-container'>
          <ExternalLink to='https://github.com/polkacast/docs'>
            <div className='docs-feature-tile'>
              <div className='row'>
                <div className='col-4'>
                  <img src='/img/graphics/desktop-abstract.png' />
                </div>
                <div className='col-8'>
                  <h2>dApp</h2>
                  <p>Create podcasts and publish to dApp</p>
                </div>
              </div>
            </div>
          </ExternalLink>
        </div>
        <div className='col-12 col-md-6 docs-feature-tile-container'>
          <ExternalLink to='https://github.com/polkacast/docs'>
            <div className='docs-feature-tile dark'>
              <div className='row'>
                <div className='col-4'>
                  <img src='/img/graphics/cli-abstract.png' />
                </div>
                <div className='col-8'>
                  <h2>CastEdge</h2>
                  <p>Use Ctape Staking & Uptime Mining</p>
                </div>
              </div>
            </div>
          </ExternalLink>
        </div>
      </div>
    </div>
    {/* <div className='docs-contents'>
      <h2>CONTENTS</h2>
      <ContentLayout />
    </div> */}
  </div>
)

export default DocsPage

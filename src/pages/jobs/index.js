import React from 'react'
import { StaticQuery } from 'gatsby'

import Head from '../../components/Head'
import ExternalLink from '../../components/ExternalLink'

const JobsPage = () => (
  <div className='container jobs-page'>
    <Head data={{
      title: 'Jobs at Polkacast',
      description: 'A running list of job openings at Polkacast. Join our team! If you see it here, the job&apos;s still open.'
    }} />

    <h1>Polkacast Dao Jobs</h1>

    <p>A running list of job openings at Polkacast. Join our team! If you see it here, the job&apos;s still open.</p>
    <p>If you think you are a great fit for our team, don&apos;t hesitate to <ExternalLink to="mailto:careers@polkacast.network">contact us</ExternalLink>.</p>

    <StaticQuery
      query={graphql`
      query {
        allMdx(filter: {fileAbsolutePath: {regex: "\\/jobs/job-/"}}) {
          edges {
            node {
              fields {
                slug
                weight
                jobTitle
                jobLocation
              }
            }
          }
        }
      }
    `}
      render={({ allMdx }) => {
        return (
          <div className="alert alert-info py-3 my-5" role="alert">
            <strong>Polkacast has open positions at this time</strong>
            <br/>
            <div className='row job-row'>
              <div className='col-9'>
                <h5>Smart Contract Engineer</h5>
                <div className='details'>Remote & Dubai</div>
              </div>
              <div className='col-3 text-right'>
                <ExternalLink to='mailto:careers@polkacast.network'>
                  <div className='btn btn-primary'>View Job</div>
                </ExternalLink>
              </div>
            </div>
            <div className='row job-row'>
              <div className='col-9'>
                <h5>Senior Rust Engineer</h5>
                <div className='details'>Remote & Dubai</div>
              </div>
              <div className='col-3 text-right'>
                <ExternalLink to='mailto:careers@polkacast.network'>
                  <div className='btn btn-primary'>View Job</div>
                </ExternalLink>
              </div>
            </div>
            <div className='row job-row'>
              <div className='col-9'>
                <h5>Senior Front-End Engineer</h5>
                <div className='details'>Singapore & Dubai</div>
              </div>
              <div className='col-3 text-right'>
                <ExternalLink to='mailto:careers@polkacast.network'>
                  <div className='btn btn-primary'>View Job</div>
                </ExternalLink>
              </div>
            </div>
            <div className='row job-row'>
              <div className='col-9'>
                <h5>Graphic Designer Engineer</h5>
                <div className='details'>Singapore & Dubai</div>
              </div>
              <div className='col-3 text-right'>
                <ExternalLink to='mailto:careers@polkacast.network'>
                  <div className='btn btn-primary'>View Job</div>
                </ExternalLink>
              </div>
            </div>

          </div>
        )
      }}
    />
  </div>
)

export default JobsPage

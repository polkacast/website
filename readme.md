# Polkacast  Protocol

A Decentralization  Podcasts  Protocol.

This is the repo for [polkacast protocol](https://polkacast.network), our beloved website. Changes, fixes & pull requests are welcomed & appreciated.

## Overview

This site is built with [gatsby](https://www.gatsbyjs.org/), a javascript static site generator, using the [gatsby-gitbook-starter](https://www.gatsbyjs.org/starters/hasura/gatsby-gitbook-starter/) site template.  The template has been modified to serve both a full-featured documentation site (markdown files in `/docs`) and standard pages (jsx files in `/pages`)

## Development

You should have `node` and `yarn` already installed on your machine.

You'll also need `gatsby-cli`, which you can install with `npm install -g gatsby-cli`

To run the dev server:

- Clone this repository
- cd to the project directory
- Install dependencies `yarn`
- run the development server `gatsby develop`
- Open `http://localhost:8000` in your web browser

## config

Things such as the site title, navbar links, docs group ordering, etc are all config-driven from `config.js`.

## docs

Documentation pages can be added by creating markdown files in the `/docs` directory.  Directories in `/docs` become groups, and each documentation article must belong to a group.

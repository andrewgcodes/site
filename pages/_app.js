import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Layout from '../components/layout'
import theme from '../components/theme'

const name = 'Lachlan Campbell – @lachlanjc'
const desc = 'I’m an 18-year-old designer-developer based in NYC.'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>{name}</title>
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@lachlanjc" />
          <meta property="twitter:description" content={desc} />
          <meta property="og:title" content={name} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lachlanjc.me/" />
          <meta property="description" content={desc} />
        </Head>
        <ThemeProvider theme={theme}>
          <Global styles={theme => ({
            body: {
              fontFamily: theme.fonts.body,
              lineHeight: theme.lineHeights.body,
              fontWeight: theme.fontWeights.body,
              color: theme.colors.text,
              backgroundColor: theme.colors.background,
              margin: 0,
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              '*': {
                boxSizing: 'border-box'
              },
              img: {
                maxWidth: '100%'
              }
            }
          })} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}

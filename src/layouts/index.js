import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import PropTypes from "prop-types"
// import Link from "gatsby-link"

// import { rhythm, scale } from "../utils/typography"


import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    console.log("open ", article)

    if (article === 'intro') {
      console.log("opened intro")
    }

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    // console.log(siteTitle, "\n", siteDescription)

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="wrapper">

          <Header 
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
            allWordpressPage={this.props.data.allWordpressPage}
            siteMetadata={this.props.data.site.siteMetadata}
          />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
            pageChildren={this.props.children}
            allWordpressPage={this.props.data.allWordpressPage}
            siteMetadata={this.props.data.site.siteMetadata}
          />
          <Footer timeout={this.state.timeout} />

        </div>
        <div id="bg"></div>
      </div>
    )
  }
}

export default DefaultLayout

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        baseUrl
      }
    },
    allWordpressPage {
      edges {
        node {
          id
          title
          content
          slug
          link
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

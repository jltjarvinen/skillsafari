import React from 'react'
import '../assets/scss/main.scss'
import PropTypes from "prop-types"

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const refreshToMain = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
}

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

  componentWillMount() {
    let location = this.props.location.pathname.replace(/^\/|\/$/g, '');
    // so many hacks... direct path to blog not working
    if (location == 'blog') {
      refreshToMain()
    }
  }

  componentDidMount () {
    // remove preceding and trailing '/', not fool proof
    let location = this.props.location.pathname.replace(/^\/|\/$/g, '');

    if (location !== '') {
      this.handleOpenArticle(location)
    }
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

    let blog = "blog/"
    if (article.match(blog)) {
      article = 'blog'
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
    if (this.props.location.pathname !== '/') {
      refreshToMain()
    }
    
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

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
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
          type
          wordpress_parent
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

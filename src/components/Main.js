import React from 'react'
import Link from 'gatsby-link'

import PostContent from "../templates/post"

class Blog extends React.Component {
  render() {
    return (
      <div>
        {this.props.blog ? 
          this.props.blog.edges.map(({node}, i) => (
            <PostContent key={i} node={node}/>
          )) :
          <div>no data</div>
        }
      </div>
    )
  }
}

class Main extends React.Component {

  render_article(node) {
    let close = <Link style={{borderBottom: 'none'}} className="close" to="/" onClick={() => {this.props.onCloseArticle()}}></Link>
    return(
      (this.props.article === node.slug && this.props.articleTimeout === true) ?
        <article key={node.id} id={node.slug} className={`${this.props.article === node.slug ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{node.title}</h2>
          <div key={node.id} dangerouslySetInnerHTML={{ __html: node.content }} />
          {
            (node.slug === this.props.siteMetadata.blog) ? <Blog blog={this.props.blog}/> : null
          }
          {close}
        </article> 
      : null
    )
  }

  render() {
    let edges = this.props.allWordpressPage.edges

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        {
          edges.map(({ node }, i) => (
            (node.wordpress_parent === this.props.front.wordpress_id) ?
              this.render_article(node)
              : null
          ))
        }
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
  isArticleVisible: React.PropTypes.bool,
  pageChildren: React.PropTypes.func,
  allWordpressPage: React.PropTypes.object
}

export default Main

import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    let edges = this.props.allWordpressPage.edges

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        {
          edges.map(({ node }, i) => (
            (node.link !== this.props.siteMetadata.baseUrl) ?
              <article key={node.id} id={node.slug} className={`${this.props.article === node.slug ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">{node.title}</h2>
                {
                  (node.slug === 'blog') ? 
                    this.props.pageChildren() :
                    <div key={node.id} dangerouslySetInnerHTML={{ __html: node.content }} />
                }
                {close}
              </article> :
              null
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
  // pageChildren: React.PropTypes.object,
  allWordpressPage: React.PropTypes.object,
  siteMetadata: React.PropTypes.object
}

export default Main
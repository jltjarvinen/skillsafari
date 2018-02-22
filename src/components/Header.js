import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-check"></span>
        </div>

        <div className="content">
            <div className="inner">
                <h1>{props.siteMetadata.title}</h1>
                {
                    props.allWordpressPage.edges.map(({ node }, i) => (
                        (node.wordpress_parent === 0) ?
                            <div key={node.id} dangerouslySetInnerHTML={{ __html: node.content }} /> : 
                            null
                    ))
                }
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/blogi/" >blog</a></li>
                {
                    props.allWordpressPage.edges.map(({ node }, i) => (
                        (node.wordpress_parent !== 0) ?
                            <li key={node.id}><a href="javascript:;" onClick={() => {props.onOpenArticle(node.slug)}}>{node.slug}</a></li> : 
                            null
                    ))
                }
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool,
    allWordpressPage: React.PropTypes.object,
    siteMetadata: React.PropTypes.object
}

export default Header

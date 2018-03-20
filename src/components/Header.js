import React from 'react'

const Header = (props) => {
    return(
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-check"></span>
        </div>

        <div className="content">
            <div className="inner">
                <h1>{props.siteMetadata.title}</h1>
                <div key={props.front.id} dangerouslySetInnerHTML={{ __html: props.front.content }} />
            </div>
        </div>
        <nav>
            <ul>
                {
                    props.allWordpressPage.edges.map(({ node }, i) => (
                        (node.wordpress_parent === props.front.wordpress_id) ?
                            <li key={node.id}><a href="javascript:;" onClick={() => {props.onOpenArticle(node.slug)}}>{node.slug}</a></li> : 
                            null
                    ))
                }
            </ul>
        </nav>
    </header>
)}

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool,
    allWordpressPage: React.PropTypes.object,
    siteMetadata: React.PropTypes.object
}

export default Header

import React, { Component } from "react"
import PropTypes from "prop-types"
import PostIcons from "../components/PostIcons"

import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: post.title }} css={{ textDecoration: `none` }}/>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <PostIcons node={post} css={{ marginBottom: rhythm(1 / 2) }} />
      </div>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostIcons
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

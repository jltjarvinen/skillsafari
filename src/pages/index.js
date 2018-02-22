// import React, { Component } from "react"
// import PropTypes from "prop-types"
// import Link from "gatsby-link"
// // import ClockIcon from "react-icons/lib/fa/clock-o"
// // import TagIcon from "react-icons/lib/fa/tag"
// // import OpenIcon from "react-icons/lib/fa/folder-open"

// import PostIcons from "../components/PostIcons"

// import { rhythm } from "../utils/typography"

// const inEffect = `
//   @keyframes react-fade-in {
//     0%   { opacity: 0; }
//     50%  { opacity: 0.5; }
//     100% { opacity: 1; }
//   }
// `;

// const Content = (props) => (
//   <div>
//     {console.log(props.content)}
//     <style children={inEffect} />
//     <div style={{
//       animationDuration: '0.5s',
//       animationIterationCount: 1,
//       animationName: 'react-fade-in',
//       animationTimingFunction: 'ease-in'
//       }}>
//       <div dangerouslySetInnerHTML={{ __html: props.content }} />
//     </div>
//   </div>
// )

// class PostContent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       expanded: false
//     }
//     this.expandedText = this.expandedText.bind(this)
//   }

//   expandedText() {
//     this.setState({
//       expanded: true
//     });       
//   }

//   excerpt() {
//     return (
//       <div>
//         <div css={{ marginTop: rhythm(0), marginBottom: rhythm(-3/2) }} dangerouslySetInnerHTML={{ __html: this.props.node.excerpt }} />
//         <div css={{ marginTop: rhythm(0), marginBottom: rhythm(1) }}><a onClick={this.expandedText}>Read more</a></div>
//       </div>
//     )
//   }

//   render() {
//     return (
//       <div>
//       { 
//         (this.state.expanded) ? 
//           <Content content={this.props.node.content}/> :
//           this.excerpt() 
//       }
//       </div>
//     );
//   }
// }

// class Home extends Component {
//   render() {
//     const data = this.props.data

//     return (
//       <div>
//         {data.allWordpressPost.edges.map(({ node }, i) => (
//           <div css={{ marginTop: rhythm(0), marginBottom: rhythm(0) }} key={node.slug}>
//             {(i > 0) ? <hr css={{ marginTop: rhythm(1 / 2), marginBottom: rhythm(1 / 2) }} /> : null}
//             <Link to={"blog/" + node.slug} css={{ textDecoration: `none` }}>
//               <h3>{node.title}</h3>
//             </Link>
//             <PostContent node={node} />
//             <PostIcons node={node} css={{ marginBottom: rhythm(1 / 2) }} />
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default Home

// // Set here the ID of the home page.
// export const pageQuery = graphql`
//   query postPageQuery {
//     allWordpressPost(sort: { fields: [date], order: DESC }) {
//       edges {
//         node {
//           title
//           excerpt
//           content
//           slug
//           type
//           ...PostIcons
//         }
//       }
//     }
//   }
// `

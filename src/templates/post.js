import React, { Component } from 'react';
import { request } from 'graphql-request'
import { rhythm } from "../utils/typography"
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import moment from 'moment'

const inEffect = `
  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const Content = (props) => (
  <div>
    <style children={inEffect} />
    <div style={{
      animationDuration: '0.5s',
      animationIterationCount: 1,
      animationName: 'react-fade-in',
      animationTimingFunction: 'ease-in'
      }}>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  </div>
)

class PostContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.expandedText = this.expandedText.bind(this)
  }

  expandedText() {
    this.setState({
      expanded: true
    });       
  }

  excerpt() {
    return (
      <div>
        <div css={{ marginTop: rhythm(0), marginBottom: rhythm(-3/2) }} dangerouslySetInnerHTML={{ __html: this.props.node.excerpt }} />
        <div style={{textAlign: 'center'}} css={{ marginTop: rhythm(0), marginBottom: rhythm(1) }}>
          <a style={{borderBottom: 'none'}} onClick={this.expandedText}>
            <FaAngleDown style={{textAlign: 'center'}} size={32}/>
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>{this.props.node.title}</h3>
        <div style={{textAlign: 'left'}}>
          <a style={{borderBottom: 'none'}} href={'mailto:' + this.props.node.author.email}><FaEnvelope style={{margin: 5}} size={16}/></a>
          <b>{this.props.node.author.name}</b>
          <span style={{float: 'right'}}>
            {moment(this.props.node.date).format("ll")}
          </span>
        </div>
        {
          (this.state.expanded) ? 
            <Content content={this.props.node.content}/> :
            this.excerpt() 
        }
      </div>
    );
  }
}

export default PostContent

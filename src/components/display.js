import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {
    return (
      <th>
        <h2>{this.props.content}</h2>
      </th>
    )
  }
}

import React, { Component } from 'react'
import { Offline } from 'react-detect-offline'

export default class Internet extends Component {

  render () {
    return (
      <Offline>
				<span className="info-bar info-bar--danger info-bar--bottom">
					<div className="info-bar__content">
            <span className="mdi mdi-flash"/>
            You are not connected to the internet.
          </div>
        </span>
      </Offline>
    )
  }
}
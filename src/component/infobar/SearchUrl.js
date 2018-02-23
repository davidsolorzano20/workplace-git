import React, { Component } from 'react'
import { Offline } from 'react-detect-offline'

export default class SearchUrl extends Component {

  render () {
    return (
      <Offline>
				<span className="info-bar info-bar--primary info-bar--primary">
					<div className="info-bar__content">
            <div className="search-input-url">
              <label htmlFor="18a478a0-1837-11e8-b4d0-856f6e8678cf" className="mdi mdi-magnify"/>
              <i className="far fa-globe"/>
              <input type="url" name="18a478a0-1837-11e8-b4d0-856f6e8678cf" placeholder="Enter url service"/>
            </div>
          </div>
        </span>
      </Offline>
    )
  }
}
import React, { Component } from 'react'

export default class ButtonSidebar extends Component {

  render () {
    return (
      <span>
        <button className="sidebar__button sidebar__button--new-service">
          <i className="fal fa-globe"/>
        </button>

        <button className="sidebar__button sidebar__button--settings">
          <i className="fal fa-cog"/>
        </button>
      </span>
    )
  }
}
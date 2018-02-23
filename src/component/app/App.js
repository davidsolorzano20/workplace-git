import React, { Component } from 'react'
import ButtonSidebar from './ButtonSidebar'
import WebView from './WebView'
import LinkServices from './LinkServices'
import Internet from '../infobar/Internet'
import Search from '../infobar/SearchUrl'

export default class App extends Component {
  render () {
    return (
      <div data-reactroot="">
        <div className="app">
          {/* Sidebar */}
          <div className="sidebar">
            <div>
              <ul className="tabs">

                {/*GitHub*/}
                <LinkServices
                  img={''}
                  link={''}
                  id={''}
                />

                {/*GitLab*/}
                <LinkServices
                  img={''}
                  link={''}
                  id={''}
                />

                {/*BitBucket*/}
                <LinkServices
                  img={''}
                  link={''}
                  id={''}
                />

              </ul>
            </div>

            <ButtonSidebar/>
          </div>


          {/*WebServices*/}

          <div className="app__service">
            {/*<SearchUrl/>*/}
            <Internet/>

            <div className="services tab-content">

              {/*GitHub*/}
              <WebView
                index={0}
                src={'http://sunica.local/'}
                partition={'123'}
                name={''}
              />

              {/*GitLab*/}
              <WebView
                index={1}
                src={'http://sunica.local/'}
                partition={'342'}
                name={''}
              />

              {/*BitBucket*/}
              <WebView
                index={1}
                src={'http://sunica.local/'}
                partition={'343'}
                name={''}
              />

            </div>

            {/*<div className="services">
              <span className="">
                <div className="services__no-service">
                  <img src="./assets/images/logo.svg" alt=""/>
                    <h1>Welcome to Workplace Git</h1>
                    <span className="">
                      <a className="button">
                        Get started
                      </a>
                    </span>
                </div>
              </span>
            </div>*/}


          </div>
        </div>
      </div>
    );
  }
}

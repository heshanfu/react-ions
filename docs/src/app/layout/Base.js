import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import throttle from 'lodash/throttle'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Main from './Main'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

class Base extends React.Component {
  constructor(props) {
    super(props)

    this.throttle = throttle(this.handleScroll, 200)
  }

  state = {
    breadcrumbActive: false,
    sidebarCollapsed: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttle)
  }

  componentWillReceiveProps() {
    this.setState({sidebarCollapsed: false})
  }

  handleScroll = (event) => {
    let target = event.target || event.srcElement
    let scrollTop = target.body.scrollTop || target.documentElement.scrollTop
    this.setState({ breadcrumbActive: scrollTop > 30 })
  }

  handleSidebarClick = () => {
    this.setState({sidebarCollapsed: !this.state.sidebarCollapsed})
  }

  render() {
    const cx = classNames.bind(style)
    const breadcrumbClass = cx(style.breadcrumbs)
    const breadcrumbActive = cx(style.breadcrumbs, style['breadcrumb-active'])
    const contentClass = cx(style['content-wrap'])
    const contentClassSidebarActive = cx(style['content-wrap'], style['sidebar-active'])

    let currentBasePage = this.props.routes[1].path ? this.props.routes[1].path : null

    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar collapsed={!this.state.sidebarCollapsed} onSidebarClick={this.handleSidebarClick} />
          <div className={!this.state.sidebarCollapsed ? contentClass : contentClassSidebarActive}>
            { currentBasePage ?
            <div className={!this.state.breadcrumbActive ? breadcrumbClass : breadcrumbActive}>
              <Breadcrumb routes={this.props.routes} />
            </div>
            : null
            }
            <Main children={this.props.children} />
          </div>
        </div>
      </div>
    )
  }
}

export default Base

import React from 'react'
import Toggle from 'react-conventions/lib/Toggle'
import style from './style'

class ExampleToggleCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: 'Value is false'
  }

  handleChange = (event) => {
    this.setState({status: 'Value is ' + event.target.value});
  }

  render() {
    return(
      <div>
        <Toggle value={false} changeCallback={this.handleChange} />
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleToggleCallback

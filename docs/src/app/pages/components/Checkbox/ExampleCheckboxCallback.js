import React from 'react'
import Checkbox from 'react-conventions/lib/Checkbox'
import style from './style'

class ExampleCheckboxCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: 'Checked state is false'
  }

  handleChange = (event) => {
    this.setState({status: 'Checked state is ' + event.target.checked});
  }

  render() {
    return(
      <div>
        <Checkbox label="Checkbox with callback" value="checked" changeCallback={this.handleChange} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleCheckboxCallback

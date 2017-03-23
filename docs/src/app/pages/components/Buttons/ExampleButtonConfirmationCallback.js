import React from 'react'
import ButtonConfirmation from 'react-ions/lib/Button/ButtonConfirmation'
import style from './style'

class ExampleButtonConfirmationCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: 'Callback was not fired.'
  }

  handleConfirmation = (event) => {
    this.setState({status: 'Callback was fired.'}, () => {
      setTimeout(() => {
        this.setState({status: 'Callback was not fired.'})
      }, 3000)
    })
  }

  render() {
    return(
      <div className={style['custom-confirmation-wrapper']}>
        <ButtonConfirmation prompt={'Would you like to see the callback fire?'} position={'left'} handleConfirmation={this.handleConfirmation}>Test</ButtonConfirmation>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleButtonConfirmationCallback
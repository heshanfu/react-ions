import React from 'react'
import Modal from 'react-ions/lib/Modal'
import Button from 'react-ions/lib/Button'

class ExampleModalCustomTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleSubmit = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <Button onClick={this.handleClose} optClass="inverted">Cancel</Button>,
      <Button onClick={this.handleSubmit}>Submit</Button>
    ];
    const style = {
      fontSize: '30px'
    }

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title={<h1 style={style} className='example-class'>Custom Title</h1>}
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          closeOnAction={true}
        >
          <p>The actions in this window were passed in as an array of React objects.</p>
          <p>This modal can only be closed by selecting one of the actions.</p>
        </Modal>
      </div>
    );
  }
}

export default ExampleModalCustomTitle

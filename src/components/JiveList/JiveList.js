import React from 'react'
import optclass from '../internal/OptClass'
import Icon from 'react-conventions/lib/Icon/Icon'
import Input from 'react-conventions/lib/Input/Input'
import TagList from '../internal/TagList'
import style from './style.scss'

class JiveList extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * The values of the options to be selected.
     */
    value: React.PropTypes.array,
    /**
     * Which field in the option object will be used as the value of the JiveList component.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the JiveList component.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the JiveList component is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A callback function to be called when an option is selected.
     */
    handleChange: React.PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  state = {
    value: this.props.value || []
  }

  componentWillMount = () => {
    // Set state
    if (this.state.value instanceof Array && this.state.value.length > 0) {
      this.setState({value: this.state.value})
    }
    // No value is passed in
    else {
      this.setState({value: []})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      // Set state
      if (nextProps.value instanceof Array && nextProps.value.length === 0) {
        this.setState({value: nextProps.value})
      }
      // No value is passed in
      else {
        this.setState({value: []})
      }
    }
  }

  onRemove = (index) => {
    const values = this.state.value.slice()
    values.splice(index, 1)
    this.setState({selected: this.getSelectedOptions(values), value: values}, () => {
      if (this.props.changeCallback) {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: this.state.value
          }
        })
      }
    })
  }

  clearInput = () => {
    if (typeof this.props.handleChange === 'function') {
      event.target.value = ''
    }
  }

  handleChange = (event) => {
    if (event.charCode !== 13 && event.type !== 'click' || event.target.value === '') {
      this.setState({currentValue: event.target.value})
    } else {
      let values = this.state.value
      values.push({
        display: event.target.value,
        value: event.target.value
      })
      this.setState({selected: this.getSelectedOptions(values), value: values}, () => {
        if (this.props.changeCallback) {
          this.props.changeCallback({
            target: {
              name: this.props.name,
              value: this.state.value,
              options: this.state.selected
            }
          })
        }
      })
      this.clearInput()
    }
  }

  handleClick = () => {
    this.handleChange({
      type: 'click',
      target: {
        value: this.state.currentValue
      }
    })
  }

  getSelectedOptions = (values) => {
    let selectedValues = []

    values.map((value, index) => {
      this.state.value.map((option, index) => {
        if (option[this.props.valueProp] === value) {
          selectedValues.push(option)
        }
      })
    })

    return selectedValues
  }

  render() {
    const jiveListClasses = optclass(style, 'jive-list-wrapper', this.props.optClass)

    return (
      <div className={jiveListClasses}>
        <Input placeholder='Type something and hit enter' onKeyUp={this.handleChange} onKeyPress={this.handleChange} />
        <Icon name='icon-add-1-1' className={style['jive-list-add-item']} width='14' height='14' fill='#9198A0' onClick={this.handleClick} />
        <TagList tags={this.state.value} displayProp={this.props.displayProp} onRemove={this.onRemove} />
      </div>
    )
  }
}

export default JiveList

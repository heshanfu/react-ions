import React from 'react'
import classNames from 'classnames/bind'
import Radio from './Radio'
import style from './style.scss'

class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: this.props.value,
    options: []
  }

  static defaultProps = {
    disabled: false,
    required: false,
    labelPosition: 'right'
  }

  static propTypes = {
    /**
     * Text shown above the radio group.
     */
    label: React.PropTypes.string,
    /**
     * The name that will be applied to all radio buttons inside it.
     */
    name: React.PropTypes.string.isRequired,
    /**
     * Whether the radio group is required.
     */
    required: React.PropTypes.bool,
    /**
     * Whether the radio group is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A list of options for the radio group.
     */
    options: React.PropTypes.array,
    /**
     * Which option is checked.
     */
    value: React.PropTypes.string,
    /**
     * Where the label will be placed for all radio buttons. This will override any labelPosition properties defined for an individual radio button.
     */
    labelPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * A callback function to be called when an option is changed.
     */
    changeCallback: React.PropTypes.func
  }

  componentWillMount = () => {
    if (typeof this.state.value !== 'undefined') {
      this.checkItem(this.state.value, this.props.options)
    }

    if (this.props.children) {
      let childOptions = this.props.children.map((child) => {
        return { name: child.name, label: child.label }
      })

      this.setState({ options: childOptions })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value }, () => {
        this.checkItem(nextProps.value, nextProps.options)
      })
    }
  }

  handleChange = (event, value) => {
    event.persist()
    if (value !== this.state.value) {
      this.setState({value: value}, () => {
        this.checkItem(value, this.state.options || this.props.options)
      })
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(event, value)
      }
    }
  }

  checkItem = (value, options) => {
    let index = this.getIndex(value, options)
    if (index >= 0) {
      options[index].checked = true
    }
  }

  getIndex = (value, options) => {
    let optionIndex = -1
    options.map((radio, index) => {
      if (radio.value === value) {
        optionIndex = index
      }
    })

    return optionIndex
  }

  getOptions = () => {
    const groupName = this.props.name
    const groupLabelPosition = this.props.labelPosition
    const { options, label, name, value, required, labelPosition, changeCallback, ...other } = this.props

    //this means explicit radio buttons were defined (usually paired with other form fields)
    //we create an options array in the state (because there is no options in props) for checkItem to use
    if (this.props.children) {
      return this.props.children.map((child, index) => {
        if (child.type === Radio) {
          return React.cloneElement(child, {
            key: index,
            name: groupName,
            checked: this.state.value === child.props.value,
            changeCallback: this.handleChange,
            labelPosition: groupLabelPosition
          })
        }
        else {
          return child
        }
      })
    }
    //this means a normal RadioGroup with an options array was defined
    else {
      return this.props.options.map((option) =>
        <div key={option.value}>
          <Radio
            value={option.value}
            label={option.label}
            name={groupName}
            checked={this.state.value === option.value}
            labelPosition={groupLabelPosition}
            optClass={option.optClass}
            changeCallback={this.handleChange}
            {...other} />
        </div>
      )
    }
  }

  render() {
    const cx = classNames.bind(style)
    const radioGroupClass = cx(style['radio-group'], this.props.optClass)

    return (
      <div className={radioGroupClass}>
        {this.props.required ? <span className={style.asterisk}>*</span> : null}
        {this.props.label ? <label className={style['radio-group-label']}>{this.props.label}</label> : null}
        {this.getOptions()}
      </div>
    )
  }
}

export default RadioGroup

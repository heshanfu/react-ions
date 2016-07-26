import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Spinner/Spinner'
import CodeExample from 'private/modules/CodeExample'
import ExampleSpinnerDefault from './ExampleSpinnerDefault'
import exampleSpinnerDefaultCode from '!raw!./ExampleSpinnerDefault'
import ExampleSpinnerBounce from './ExampleSpinnerBounce'
import exampleSpinnerBounceCode from '!raw!./ExampleSpinnerBounce'
import style from 'private/css/content'
import localStyle from './style.scss'

const description = {
  spinnerDefault: 'This is the default **spinner component**. When `position=\'fixed\'` is passed as a prop, the spinner will fill the entire screen.',
  spinnerBounce: 'This is variation **spinner component**.'
}

const SpinnerPage = (props) => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.block}>
          <CodeExample
            title='Spinner Example'
            description={description.spinnerDefault}
            markup={exampleSpinnerDefaultCode}
            optClass={localStyle['component-override']}
          >
            <ExampleSpinnerDefault />
          </CodeExample>
          <CodeExample
            title='Spinner Bounce Example'
            description={description.spinnerBounce}
            markup={exampleSpinnerBounceCode}
            optClass={localStyle['component-override']}
          >
            <ExampleSpinnerBounce />
          </CodeExample>
        </div>
        <div className={style.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  )
}

export default SpinnerPage
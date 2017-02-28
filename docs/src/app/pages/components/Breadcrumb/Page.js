import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-ions/lib/Breadcrumb/Breadcrumb';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleBreadcrumbDefault from './ExampleBreadcrumbDefault'
import exampleBreadcrumbDefaultCode from '!raw!./ExampleBreadcrumbDefault'
import ExampleBreadcrumbTwoSubpages from './ExampleBreadcrumbTwoSubpages'
import exampleBreadcrumbTwoSubpagesCode from '!raw!./ExampleBreadcrumbTwoSubpages'

const description = {
  breadcrumbDefault: 'This is the `breadcrumb component` showing a page with a subpage.',
  breadcrumbTwoSubpages: 'This is the `breadcrumb component` showing a page and two subpages.'
};

const BreadcrumbsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Breadcrumb'
          description={description.breadcrumbDefault}
          markup={exampleBreadcrumbDefaultCode}>
          <ExampleBreadcrumbDefault />
        </CodeExample>
        <CodeExample
          title='Breadcrumb With Two Subpages'
          description={description.breadcrumbTwoSubpages}
          markup={exampleBreadcrumbTwoSubpagesCode}>
          <ExampleBreadcrumbTwoSubpages />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default BreadcrumbsPage

import React from 'react'
import CodeBlock from './codeBlock'
// import AnchorTag from './anchor'

const p = props => <p className='paragraph' {...props} />
const pre = props => <pre className='pre' {...props} />

export default {
  // h1: props => <h1 className='heading1' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  // h2: props => <h2 className='heading2' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  // h3: props => <h3 className='heading3' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  // h4: props => <h4 className='heading4' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  // h5: props => <h5 className='heading5' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  // h6: props => <h6 className='heading6' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  p,
  pre,
  code: CodeBlock
  // a: AnchorTag
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}

# canvas-lti-auto-resizer

> A React component that automatically tells Canvas to resize the containing iframe to it&#x27;s content size

[![NPM](https://img.shields.io/npm/v/canvas-lti-auto-resizer.svg)](https://www.npmjs.com/package/canvas-lti-auto-resizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save canvas-lti-auto-resizer
```

## Usage

```tsx
import React from 'react'

import { CanvasLTIAutoResizer } from 'canvas-lti-auto-resizer'

const MyLTIComponent = (props) => {

  return (<CanvasLTIAutoResizer additional={50}>
    <MyLTIComponent />
  </CanvasLTIAutoResizer>)
}
```

## License

MIT © [stuartf](https://github.com/stuartf)

import React from 'react'

import { ExampleComponent, AceConfiguration } from 'slimer-react'
import 'slimer-react/dist/index.css'

const App = () => {
  const _config = AceConfiguration.init('AK2A79936')
  console.log(JSON.stringify(_config, null, 2))

  return <ExampleComponent text='Create React Library Example 😄' />
}

export default App

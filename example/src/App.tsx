import React from 'react'

import {ExampleComponent, AceConfiguration, ACS} from 'slimer-react'
import 'slimer-react/dist/index.css'

const App = () => {
  const _config = AceConfiguration.init('AK2A79936')
  ACS.configure(_config)
    .then(response => {
      console.log('SDK Promise 초기화::in then!!')
      console.log('response: ' + JSON.stringify(response, null, 2))
    })
    .catch(err => {
      console.log('SDK Promise 초기화::in reject!!')
      console.log('err: ' + JSON.stringify(err, null, 2))
    })

  return <ExampleComponent text='Create React Library Example 😄' />
}

export default App

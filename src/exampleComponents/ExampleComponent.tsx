import * as React from 'react'
import styles from './styles.module.css'
import {getRandomIntInclusive} from './utils'
import {ACParams, ACS} from '../components'

interface Props {
  text: string
}

export const ExampleComponent = ({text}: Props) => {
  const keyOfLocalStorageName = 'test'
  const onGetLocalStorageClick = () => {
    console.log(`clicked onGetLocalStorageClick!!!`)
    const result = localStorage.getItem(keyOfLocalStorageName)
    console.log(`${keyOfLocalStorageName}: ${result}`)
  }

  const onSetLocalStorageClick = () => {
    console.log(`clicked onSetLocalStorageClick!!!`)
    try {
      const ranValue = getRandomIntInclusive(1, 100)
      localStorage.setItem(keyOfLocalStorageName, `${ranValue}`)
      console.log(`set ${ranValue}`)
    } catch (error) {
      console.error(error)
    }
  }

  const onSendPL = () => {
    console.log(`clicked onSendPL!!!`)

    const randomValue = getRandomIntInclusive(0, 999).toString()
    const url = `>>ExampleComponent::sendPL<< >>${randomValue}<<`
    const params = ACParams.init(ACParams.TYPE.EVENT, url)

    ACS.send(params)
      .then(response => {
        console.log('onSendPL::in then!!')
        if (response) {
          console.log('response: ' + JSON.stringify(response, null, 2))
          alert(`success sdk send`)
        } else {
          console.log('response is undefined.')
          alert(`success sdk send but response is undefined`)
        }
      })
      .catch(err => {
        console.log('onSendPL::in reject!!')
        if (err) {
          console.log('err: ' + JSON.stringify(err, null, 2))
          alert(`fail sdk send`)
        } else {
          console.log('err is undefined.')
          alert(`fail sdk send but err is undefined`)
        }
      })
  }

  return (
    <div className={styles.test}>
      Example Component: {text} <br />
      <button onClick={onSendPL}>send PL</button> <br />
      <button onClick={onSetLocalStorageClick}>onSetLocalStorageClick</button> <br />
      <button onClick={onGetLocalStorageClick}>onGetLocalStorageClick</button>
    </div>
  )
}

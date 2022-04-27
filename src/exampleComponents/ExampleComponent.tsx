import * as React from 'react'
import styles from './styles.module.css'
import {getRandomIntInclusive} from './utils'

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

  return (
    <div className={styles.test}>
      Example Component: {text} <br />
      <button onClick={onSetLocalStorageClick}>onSetLocalStorageClick</button> <br />
      <button onClick={onGetLocalStorageClick}>onGetLocalStorageClick</button>
    </div>
  )
}

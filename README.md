# @jinsang/slimer-react

Library for [ACE Counter]('https://www.acecounter.com/www2/main.amz').

## TOC

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Release Notes](#release-notes)

## Installation

Using npm:

```shell
npm install --save @jinsang/slimer-react
```

or using yarn:

```shell
yarn add @jinsang/slimer-react
```

## Usage

```js
import {
  AceConfiguration,
  ACParams,
  ACS,
  ACEResponseToCaller,
  ACProduct,
  ACEGender,
  ACEMaritalStatus,
} from '@jinsang/slimer-react'
```

## API

Note that many APIs are platform-specific.

---

### getApiLevel()

Gets the API level.

#### Examples

```js
DeviceInfo.getApiLevel().then(apiLevel => {
  // iOS: ?
  // Android: 25
  // Windows: ?
})
```

#### Notes

> See [API Levels](https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels)

---

## Release Notes

See the [CHANGELOG.md](https://github.com/react-native-device-info/react-native-device-info/blob/master/CHANGELOG.md).

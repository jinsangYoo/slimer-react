// add this after other import statements
import { CustomHeader } from './shared/components/Header'

// Modify the JSX in App component
const App = () => {
  return (
    <View styles={styles.screenContainer}>
      <Text style={styles.text}>I'm a React Native component</Text>
    </View>
  )
}

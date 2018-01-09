import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import SuggestingSearchScreen from '../Containers/SuggestingSearch/SuggestingSearch.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SuggestingSearchScreen: { screen: SuggestingSearchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SuggestingSearchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

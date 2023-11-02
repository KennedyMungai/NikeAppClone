import { NavigationContainer } from '@react-navigation/native'
import ProductsScreen from '../../screens/ProductsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Products' component={ProductsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

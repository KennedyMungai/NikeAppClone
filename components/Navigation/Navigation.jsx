import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailScreen from '../../screens/ProductDetailScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ShoppingCartScreen from '../../screens/ShoppingCartScreen'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Products'
					component={ProductsScreen}
					options={{
						headerRight: () => (
							<Pressable>
								<Feather
									name='shopping-cart'
									size={24}
									color='black'
								/>
							</Pressable>
						)
					}}
				/>
				<Stack.Screen
					name='Product Details'
					component={ProductDetailScreen}
					options={{ presentation: 'modal' }}
				/>
				<Stack.Screen
					name='ShoppingCart'
					component={ShoppingCartScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

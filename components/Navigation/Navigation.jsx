import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailScreen from '../../screens/ProductDetailScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ShoppingCartScreen from '../../screens/ShoppingCartScreen'
import { Pressable, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../../constants/colors'

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
							<Pressable style={{ flexDirection: 'row', gap: 5 }}>
								<Feather
									name='shopping-cart'
									size={24}
									color={colors.eerieBlack}
								/>
								<Text
									style={{
										color: colors.middleGreen,
										fontSize: 16
									}}
								>
									1
								</Text>
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

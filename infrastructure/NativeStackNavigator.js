import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Product } from "../screens/Product";
import { Home } from "../screens/Home";
import { Categories } from "../screens/Categories";
import { Profile } from "../screens/Profile";
import { Deals } from "../screens/Deals";

const Stack = createNativeStackNavigator();

export function NativeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="My Home" component={Home} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Product Details" component={Product} />
            <Stack.Screen name="Deals" component={Deals} options={{headerShown:true}}/>
        </Stack.Navigator>
    )
}
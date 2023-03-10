import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Themes } from "../assets/themes";
import { products } from "../assets/demo-products";
import { Categories } from "./Categories";
import { Profile } from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

function HomeScreen ({ navigation }) {
    return (
        <CustomSafeAreaView>

            <View style={styles.content}>

                <Image style={styles.carouselImage}
                    source={require('../assets/images/flash.jpg')} />
            </View>
            <View style={styles.deals}>
                <View style={[styles.recentDeals, { backgroundColor: Themes.colors.blue100 }]}>
                    <Text style={styles.dealsHeading}>Recent Deals</Text>
                    <TouchableOpacity style={styles.moreDeals}>
                        <Text>See all Deals</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productsList}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.product}
                                    onPress={() => navigation.navigate('Product Details')}>
                                    <View style={{ alignItems: 'center', marginBottom: Themes.sizes[1] }}>
                                        <Image source={item.thumbnail} style={styles.thumbnail} />
                                    </View>
                                    <Text style={styles.productName}>{item.productName}</Text>
                                    <Text style={styles.productPrice}>₦{item.price}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        key={({ item }) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} />
                </View>

            </View>
            <View style={styles.sponsored}>
                <View style={[styles.recentDeals, { backgroundColor: Themes.colors.purple100 }]}>
                    <Text style={styles.dealsHeading}>Recent Deals</Text>
                    <TouchableOpacity style={styles.moreDeals}>
                        <Text>See all Deals</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productsList}>
                    <TouchableOpacity style={styles.product}>
                        <View style={{ alignItems: 'center', marginBottom: Themes.sizes[1] }}>
                            <Image source={require('../assets/images/myfi.webp')} style={styles.thumbnail} />
                        </View>
                        <Text style={styles.productName}>Airtel Broadband 4G Rechargeable myfi</Text>
                        <Text style={styles.productPrice}>₦15500</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </CustomSafeAreaView>
    )
}

export function Home () {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Categories') {
                iconName = focused ? 'md-file-tray-stacked' : 'ios-file-tray-stacked-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Themes.colors.blue300,
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name='Categories' component={Categories} options={{headerShown:false}}/>
            <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
           
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: Themes.sizes[3],
        justifyContent: 'center'
    },
    brandName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Themes.colors.purple500,
        marginBottom: 20
    },
    carouselImage: {
        height: 100,
        width: '100%',
        borderRadius: 8
    },
    deals: {
        marginVertical: Themes.sizes[2],
        marginHorizontal: Themes.sizes[2],
        flex: 2.5
    },
    recentDeals: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    dealsHeading: {
        fontSize: 22
    },
    moreDeals: {
        color: '#FFC6D3'
    },
    sponsored: {
        flex: 2.5,
        paddingHorizontal: Themes.sizes[2]
    },
    productsList: {
        flex: 2.5,
        marginTop: Themes.sizes[2]
    },
    product: {
        flex: 1,
        width: 200,
        padding: Themes.sizes[2],
        borderWidth: 1,
        bordercolor: Themes.colors.gray400,
        borderRadius: 1,
        marginRight: Themes.sizes[3]

    },
    thumbnail: {
        height: 120,
        width: 120
    },
    productName: {
        fontSize: Themes.fontSizePoint.title
    },
    productPrice: {
        fontSize: Themes.fontSizePoint.title,
        fontWeight: 'bold',
        marginTop: Themes.sizes[1]
    }
})
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons, MaterialIcons, Feather} from '@expo/vector-icons'

import HomeScreen from './Screens/Home/index'
import WalletScreen from './Screens/Wallet/index'
import PayScreen from './Screens/Pay/index'
import PayButton from './Components/PayButton/index'

const Tab = createBottomTabNavigator()
const icons = {
    Home: {lib: AntDesign, name: 'home'},
    Wallet: {lib: AntDesign, name:'creditcard'},
    Notifications: {lib: Ionicons, name:'ios-notifications-outline'},
    Settings: {lib:AntDesign, name: 'setting'}
}

export default function Navigation(){
    return (
        <Tab.Navigator 
            screenOptions = {({ route, navigation }) => ({
                tabBarIcon: ({ color,size, focused }) => {
                    if (route.name === 'Pay'){
                        return (
                          <PayButton 
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                          /> 
                        )
                    }
                    const {lib:Icon, name} = icons[route.name]
                    return <Icon name={name} size={size} color={color}/>
                },
            })}
            tabBarOptions = {{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255,0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >
            <Tab.Screen options={{title: 'Início'}} name="Home" component={HomeScreen}/>
            <Tab.Screen options={{title: 'Carteira'}} name="Wallet" component={WalletScreen}/>
            <Tab.Screen options={{title: ''}} name="Pay" component={PayScreen}/>
            <Tab.Screen options={{title: 'Notificações'}} name="Notifications" component={PayScreen}/>
            <Tab.Screen options={{title: 'Ajustes'}} name="Settings" component={PayScreen}/>
        </Tab.Navigator>
    )
}
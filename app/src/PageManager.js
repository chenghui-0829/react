import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNav} from "./menu";

const App = createStackNavigator({
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: "#ff0000",
                },
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    color: "#fff"
                }
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    });

export default createAppContainer(App);
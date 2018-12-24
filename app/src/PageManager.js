import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNav} from "./menu";
import DbList from "./page/DbList";

const App = createStackNavigator(
    {
        Main: {
            screen: TabNav,
        },
        DbLists: {
            screen: DbList,
            navigationOptions: () => ({
                headerBackImage: require('../static/img/menu_home_select_icon.png')
            })
        }
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ff0000',
                height: 45
            },
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                color: "#fff",
                fontSize: 16,
                fontWeight: 'normal',
            },
        },
    }
);

export default createAppContainer(App);
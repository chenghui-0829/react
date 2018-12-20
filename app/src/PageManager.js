import React from 'react';
import {StackNavigator} from 'react-navigation';
import {TabNav} from "./menu";

const App = StackNavigator({
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    });

export default App;
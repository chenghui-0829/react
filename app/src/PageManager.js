import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNav} from "./menu";
import DbPage from "./page/DbPage";
import CjPage from "./page/CjPage";
import PkPage from "./page/PkPage";
import ExChangePage from "./page/ExChangePage";
import AddCjPage from "./page/AddCjPage";

const App = createStackNavigator(
    {
        Main: TabNav,
        Db: DbPage,
        Cj: CjPage,
        Pk: PkPage,
        ExChange: ExChangePage,
        AddCjPage:AddCjPage
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
        }
    }
);

export default createAppContainer(App);
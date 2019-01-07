import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {TabNav} from "./menu";
import DbPage from "./page/home/DbPage";
import CjPage from "./page/home/CjPage";
import PkPage from "./page/home/PkPage";
import ExChangePage from "./page/home/ExChangePage";
import AddCjPage from "./page/home/AddCjPage";
import Login from "./page/mine/Login";
import "./utils/Storage"
import CjDetailsPage from "./page/home/CjDetailsPage";

const App = createStackNavigator(
    {
        Main: TabNav,
        Db: DbPage,
        Cj: CjPage,
        Pk: PkPage,
        ExChange: ExChangePage,
        AddCjPage: AddCjPage,
        Login: Login,
        CjDetailsPage: CjDetailsPage
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
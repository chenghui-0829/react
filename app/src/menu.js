import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import HomePage from './page/Home';
import OpenPage from './page/Open';
import MinePage from './page/Mine';

export const TabNav = createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
        },
        Open: {
            screen: OpenPage,
        },
        Mine: {
            screen: MinePage,
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#ff0000',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                borderTopWidth: 0.5,
                paddingTop: 5,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 10,
            },
            tabStyle: {
                height: 45
            },
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: false,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
        initialRouteName: 'Home',
    });

TabNav.navigationOptions = ({navigation}) => {

    const {routeName} = navigation.state.routes[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = "";
    if (routeName === "Home") {
        headerTitle = "首页"
    } else if (routeName === "Open") {
        headerTitle = "开奖"
    } else if (routeName === "Mine") {
        headerTitle = "我的"
    }
    return {
        headerTitle,
    };
};

export default TabNav;
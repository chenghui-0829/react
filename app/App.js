/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Home from 'src/page/Home'
import Open from 'src/page/Open'
import Mine from 'src/page/Mine'

export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'home',
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'home'}
                    title="首页"
                    // renderIcon={() => <image source={'../static/img/menu_home_icon.png'}/>}
                    // renderSelectedIcon={() => <image source={'../static/img/menu_home_select_icon.png'}/>}
                    onPress={() => this.setState({currentTab: 'home'})}>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'open'}
                    title="开奖"
                    // renderIcon={() => <image source={'../static/img/menu_open_icon.png'}/>}
                    // renderSelectedIcon={() => <image source={'../static/img/menu_open_select_icon.png'}/>}
                    onPress={() => this.setState({currentTab: 'open'})}>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.currentTab === 'mine'}
                    title="我的"
                    // renderIcon={() => <image source={'../static/img/menu_mine_icon.png'}/>}
                    // renderSelectedIcon={() => <image source={'../static/img/menu_mine_select_icon.png'}/>}
                    onPress={() => this.setState({currentTab: 'mine'})}>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({});

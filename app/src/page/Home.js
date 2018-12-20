import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Home extends React.Component {

    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../static/img/menu_home_icon.png') : require('../static/img/menu_home_select_icon.png')}
                style={{width: 26, height: 26}}/>
        )
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>这是首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});
export default Home;
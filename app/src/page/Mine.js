import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Mine extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../static/img/menu_mine_icon.png') : require('../static/img/menu_mine_select_icon.png')}
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
                <Text>我的</Text>
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
export default Mine;
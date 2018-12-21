import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class Mine extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../static/img/menu_mine_select_icon.png') : require('../static/img/menu_mine_icon.png')}
                style={{width: 20, height: 20}}/>
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
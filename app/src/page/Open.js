import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Open extends React.Component {
    static navigationOptions = {
        tabBarLabel: '开奖',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../static/img/menu_open_icon.png') : require('../static/img/menu_open_select_icon.png')}
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
                <Text>open</Text>
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
export default Open;
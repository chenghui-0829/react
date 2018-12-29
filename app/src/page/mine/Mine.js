import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

class Mine extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../../static/img/menu_mine_select_icon.png') : require('../../static/img/menu_mine_icon.png')}
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

                <TouchableOpacity TouchableOpacity activeOpacity={1}
                                  onPress={() => this.props.navigation.push('Login')}>
                    <View style={styles.user_view}>

                        <View style={{width: 80, height: 80, borderRadius: 40}}>
                            <Image roundAsCircle={true} style={styles.head_image}
                                   source={{uri: 'http://www.17qq.com/img_qqtouxiang/81272201.jpeg'}}
                            />
                        </View>
                        <View style={{marginLeft: 12}}>
                            {/*<Text>要做的蛮多</Text>*/}
                            {/*<Text>15927299226</Text>*/}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},

    user_view: {
        padding: 12,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },

    head_image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ff0000',
        resizeMode: 'cover',
    }
});
export default Mine;
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

                        <Image roundAsCircle={true} style={styles.head_image}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546491801057&di=e7121bd39b3482021ec60e24e0f01c48&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F07%2F24%2F555e89e7e6384180%2521600x600.jpg'}}
                        />
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
        resizeMode: 'cover',
    }
});
export default Mine;
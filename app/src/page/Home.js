import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

class Home extends React.Component {

    static navigationOptions = {

        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => (
            <Image
                source={focused ? require('../static/img/menu_home_select_icon.png') : require('../static/img/menu_home_icon.png')}
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
                <View style={styles.wrapper}>
                    <Swiper
                        showsButtons={false}
                        showsPagination={true}
                        autoplay={true}
                        dot={<View style={styles.dot}/>}
                        activeDot={<View style={styles.activeDot}/>}
                        autoplayTimeout={2.5}>
                        <View>
                            <Image style={{width: '100%', height: '100%'}}
                                   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545390817367&di=fc1a8ba94ecf6c6f6aa3368e6beedc79&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F582283bc16790.jpg'}}/>
                        </View>
                        <View>
                            <Image style={{width: '100%', height: '100%'}}
                                   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545390856012&di=0336639349aa3799f25d1d9c8de8f2a7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fc9fcc3cec3fdfc035a9f2f95df3f8794a4c2263c.jpg'}}/>
                        </View>
                        <View>
                            <Image style={{width: '100%', height: '100%'}}
                                   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545390933249&di=f0818c27e2693c594651cda883fd4261&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3624525885%2C3959898217%26fm%3D214%26gp%3D0.jpg'}}/>
                        </View>
                    </Swiper>
                </View>

                <View style={styles.games}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Cj')}>
                        <View style={styles.gameType}>
                            <Image style={{width: 50, height: 50}}
                                   source={require('../static/img/cj_icon.jpg')}/>
                            <Text style={styles.gameName}>抽奖</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Pk')}>
                        <View style={styles.gameType}>
                            <Image style={{width: 50, height: 50}}
                                   source={require('../static/img/pk_icon.jpg')}/>
                            <Text style={styles.gameName}>PK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('ExChange')}>
                        <View style={styles.gameType}>
                            <Image style={{width: 50, height: 50}}
                                   source={require('../static/img/exchange_icon.jpg')}/>
                            <Text style={styles.gameName}>交换</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.push('Db')}>
                        <View style={styles.gameType}>
                            <Image style={{width: 50, height: 50}}
                                   source={require('../static/img/db_icon.jpg')}/>
                            <Text style={styles.gameName}>夺宝</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        height: 180
    },
    dot: {
        backgroundColor: '#fff',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDot: {
        backgroundColor: '#ff0000',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
    },
    gameType: {
        marginTop: 20,
        alignItems: 'center'
    },
    gameName: {
        fontSize: 14,
        marginTop: 10,
        color: '#333'
    },
    games: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default Home;
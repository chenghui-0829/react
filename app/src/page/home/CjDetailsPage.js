import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

import BackImage from "../../component/BackImage";

class CjDetailsPage extends React.Component {


    static navigationOptions = {

        title: '抽奖详情',
        headerBackImage: <BackImage/>,
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    joinCj = () => {
        let url = 'http://192.168.1.199:8080/getCjList';
        fetch(url, {
            method: 'GET'
        }).then(response =>
            response.json()
        ).then(result => {
            console.log(result)
            this.setState({
                data: result.data
            })
        }).catch(e => {
            console.log(e)
        })
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
                <View style={{padding: 12, backgroundColor: '#ffffff'}}>
                    <View style={styles.item_top}>
                        <Image style={styles.head_image}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546491801057&di=e7121bd39b3482021ec60e24e0f01c48&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F07%2F24%2F555e89e7e6384180%2521600x600.jpg'}}
                        />
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 16}}>123</Text>
                            <Text style={{fontSize: 12}}>456</Text>
                        </View>
                        <Text style={{fontSize: 14, color: '#ff0000', marginLeft: 'auto'}}> 进行中</Text>
                    </View>
                    <Text style={{marginTop: 10}}>抽奖主题: </Text>
                    <Text style={{marginTop: 10}}>奖品内容: </Text>
                </View>

                <View style={styles.cyjl_view}>
                    <Text>参与记录:</Text>
                    <Text style={{marginLeft: 10, color: 'red'}}>未参与</Text>
                </View>

                <Text style={{backgroundColor: '#ffffff', padding: 12, marginTop: 10}}>最新参与</Text>
                <FlatList
                    renderItem={({item, index}) => {
                        return (
                            <View style={styles.item_top}>
                                <Image style={styles.head_image}
                                       source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546491801057&di=e7121bd39b3482021ec60e24e0f01c48&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F07%2F24%2F555e89e7e6384180%2521600x600.jpg'}}
                                />
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontSize: 16}}>{123}</Text>
                                    <Text style={{fontSize: 12}}> {123}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
                <Text style={styles.ljcy_text}>立即参与</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    head_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    item_top: {
        flex: 0,
        flexDirection: 'row'
    },
    cyjl_view: {
        marginTop: 10,
        flex: 0,
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#ffffff'
    },
    ljcy_text: {
        backgroundColor: 'red',
        padding: 12,
        marginTop: 10,
        color: '#ffffff',
        textAlign: 'center',
        flex: 0,
        marginTop: 'auto'
    }

});
export default CjDetailsPage;
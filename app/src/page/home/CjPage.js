import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import BackImage from "../../component/BackImage";

class CjPage extends React.Component {


    static navigationOptions = ({navigation}) => ({
        title: '抽奖',
        headerBackImage: <BackImage/>,
        headerRight: (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.state.params.navigatePress()}>
                <Image
                    style={{height: 25, width: 25, marginRight: 12}}
                    source={require('../../static/img/add_icon.png')}
                /></TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({navigatePress: this.addCjEvent})
        this.initData();
    }

    initData = () => {
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


    addCjEvent = () => {
        let _that = this;
        this.props.navigation.navigate("AddCjPage", {
            callBack: function () {
                _that.initData();
            }
        });
    };

    render() {
        return (
            <View style={{backgroundColor: '#f7f7f7', flex: 1}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.cjId.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} style={styles.item}>
                                <View style={styles.item_top}>
                                    <Image style={styles.head_image}
                                           source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546491801057&di=e7121bd39b3482021ec60e24e0f01c48&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F07%2F24%2F555e89e7e6384180%2521600x600.jpg'}}
                                    />
                                    <View style={{marginLeft: 10}}>
                                        <Text style={{fontSize: 16}}>{item.fqUser}</Text>
                                        <Text style={{fontSize: 12}}> {item.creatTime}</Text>
                                    </View>
                                    <Text style={{fontSize: 14, color: '#ff0000', marginLeft: 'auto'}}> 进行中</Text>
                                </View>
                                <Text style={{marginTop: 10}}>抽奖主题: {item.cjzt}</Text>
                                <Text style={{marginTop: 10}}>奖品内容: {item.jpnr}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({

    item: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    head_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    item_top: {
        flex: 0,
        flexDirection: 'row'
    }

});
export default CjPage;
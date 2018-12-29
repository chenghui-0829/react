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

    }

    addCjEvent = () => {
        this.props.navigation.push('AddCjPage');
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
                                <Text>发起人:{item.fqUser}</Text>
                                <Text>抽奖主题:{item.cjzt}</Text>
                                <Text>奖品内容:{item.jpnr}</Text>
                                <Text>发起时间:{item.creatTime}</Text>
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
        backgroundColor: '#ffffff',
        margin: 10

    }

});
export default CjPage;
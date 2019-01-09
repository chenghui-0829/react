import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import HttpUtil from "../../utils/HttpUtil";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: ''
        }
    }

// (response) =>
//     response.json()
// ).then((result) => {
//     console.log(result)
//
    login = () => {
        let url = 'http://192.168.1.199:8080/login';
        let params = {"tel": this.state.tel};
        HttpUtil.get(url, params, (result) => {
            if (result.code === 200) {
                storage.save({
                    key: 'userTel',
                    data: {
                        tel: this.state.tel
                    }
                });
                this.props.navigation.goBack();
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image style={{marginTop: 80, width: 60, height: 60}}
                           source={require('../../static/img/cj_icon.jpg')}
                    />
                </View>
                <View style={styles.content}>
                    <Text>手机号</Text>
                    <TextInput style={styles.input}
                               placeholder="请输入手机号"
                               onChangeText={(tel) => this.setState({tel})}
                    />
                </View>
                <Text style={styles.tjText} onPress={this.login}>登录</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    content: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 50,
        marginBottom: 30,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        borderColor: '#ff0000',
        borderWidth: 1,
        marginLeft: 12,
        height: 35,
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0
    },
    tjText: {
        color: '#ffffff',
        textAlign: 'center',
        height: 40,
        margin: 12,
        fontSize: 16,
        borderRadius: 3,
        backgroundColor: '#ff0000',
        textAlignVertical: 'center'
    }
});
export default Login;
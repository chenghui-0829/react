import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import BackImage from "../../component/BackImage";
import HttpUtil from "../../utils/HttpUtil";

class AddCjPage extends React.Component {

    static navigationOptions = {
        title: '发起抽奖',
        headerBackImage: <BackImage/>,
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {
            useTel: '',
            cjztText: '',
            jpnrText: '',
            cytjText: ''
        }
    }

    tjEvent = async () => {

        await storage.load({
            key: 'userTel'
        }).then(result => {
            this.setState({useTel: result.tel})
        }).catch(e => {
            console.log(e)
        });


        let url = '/createCj';

        let params = new FormData();
        params.append("cjzt", this.state.cjztText);
        params.append("jpnr", this.state.jpnrText);
        params.append("cytj", this.state.cytjText);
        params.append("fqUser", this.state.useTel);

        HttpUtil.post(url, params, (result) => {
            if (result.code === 200) {
                this.props.navigation.state.params.callBack();
                this.props.navigation.goBack();
            }
        });
    };

    render() {
        return (
            <View>
                <View style={styles.content}>
                    <Text>抽奖主题</Text>
                    <TextInput style={styles.input}
                               placeholder="请输入抽奖主题"
                               onChangeText={(cjztText) => this.setState({cjztText})}
                    />
                </View>
                <View style={styles.content}>
                    <Text>奖品内容</Text>
                    <TextInput style={styles.input}
                               placeholder="请输入奖品内容"
                               onChangeText={(jpnrText) => this.setState({jpnrText})}
                    />
                </View>
                <View style={styles.content}>
                    <Text>参与条件</Text>
                    <TextInput style={styles.input}
                               placeholder="请输入参与条件(选填)"
                               onChangeText={(cytjText) => this.setState({cytjText})}
                    />
                </View>
                <Text style={styles.tjText} onPress={this.tjEvent}>提交</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    content: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
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

export default AddCjPage;
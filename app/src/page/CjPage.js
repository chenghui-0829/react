import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import BackImage from "../component/BackImage";

class CjPage extends React.Component {


    static navigationOptions = {
        title: '抽奖',
        headerRight: <View/>,
        headerBackImage: <BackImage/>
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
export default CjPage;
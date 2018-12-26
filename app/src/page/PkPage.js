import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import BackImage from "../component/BackImage";

class PkPage extends React.Component {

    static navigationOptions = {
        title: '交换',
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
export default PkPage;
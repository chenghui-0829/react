import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

class DbList extends React.Component {

    static navigationOptions = {
        title: '夺宝',
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>夺宝页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
export default DbList;
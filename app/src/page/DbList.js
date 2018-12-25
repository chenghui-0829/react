import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
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
                <FlatList
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image source={require('../static/img/btc_icon.png')}/>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
export default DbList;
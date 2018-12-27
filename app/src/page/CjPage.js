import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import BackImage from "../component/BackImage";

class CjPage extends React.Component {


    static navigationOptions = ({navigation}) => ({
        title: '抽奖',
        headerBackImage: <BackImage/>,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.state.params.navigatePress()}>
                <Image
                    style={{height: 25, width: 25, marginRight: 12}}
                    source={require('../static/img/add_icon.png')}
                /></TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.navigation.setParams({navigatePress: this.addCjEvent})
    }

    addCjEvent = () => {
        this.props.navigation.push('AddCjPage');
    };

    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
export default CjPage;
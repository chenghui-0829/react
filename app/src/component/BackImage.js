import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

class BackImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Image
                source={require('../static/img/back_icon.png')}
            />
        );
    }
}

const styles = StyleSheet.create({});
export default BackImage;
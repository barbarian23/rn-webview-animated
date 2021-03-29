import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { loadingStyles as style } from '../assets/style/component/loading.style';

class Loading extends Component {

    constructor(props) {
        super(props);
        //this.spinValue = "";
        this.state = {
            rolling: new Animated.Value(0)
        };
        this.rolling = this.rolling.bind(this);
    }

    rolling() {
        // Animated.timing(this.state.rolling, {
        //     toValue: 360,
        //     duration: 5000
        // }).start();
        Animated.loop(
        Animated.timing(this.state.rolling, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true  // To make use of native driver for performance
          })
        ).start();
    };

    componentDidMount() {
        this.rolling();
    }


    render() {
        const spin = this.state.rolling.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        return (
            <View style={style.parent}>
                <Animated.View
                    style={[style.loadingIndicator, { transform: [{ rotate: spin }] }]}
                />
            </View>
        );
    }
}

export default Loading;
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { errorStyles as style } from '../assets/style/component/error.style';

class Error extends Component {

    constructor(props){
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    refresh(){
        this.props.callRefresh();
    }

    render() {
        return (
            <View style={style.parent}>
                <Text style={style.errorText}>{"Có lỗi mạng "}</Text><TouchableOpacity onPress={this.refresh}><Text style={style.partryAgainnt}>{"Bấm để thử lại"}</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Error;
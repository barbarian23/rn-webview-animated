import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View } from "react-native";
import { HOME_URI } from '../../constanst/home/home.constant'
import { homeStyles as style } from '../../assets/style/home/home.style';
import Loading from '../../component/loading.component';
import Error from '../../component/error.component';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isSuccess: true
        }
        this.webview;
        this.loading = this.loading.bind(this);
        this.loadSuccess = this.loadSuccess.bind(this);
        this.callRefresh = this.callRefresh.bind(this);
    }

    callRefresh(){
        this.webview && this.webview.reload();
    }

    loading(state) {
        console.log("loading",state);
        this.setState({ loading: state });
        state && this.setState({ loadSuccess: true });
    }

    loadSuccess(state) {
        console.log("loadSuccess",state);
        this.setState({ loadSuccess: state });
    }

    render() {
        return (
            <View style={style.parent}>
                <WebView
                    ref={WEBVIEW_REF => (this.webview = WEBVIEW_REF)}
                    source={{uri: HOME_URI}}
                    startInLoadingState={true}
                    onLoadStart={(syntheticEvent) => this.loading(true)}
                    onLoadEnd={(syntheticEvent) => this.loading(false)}
                    onError={(syntheticEvent) => this.loadSuccess(false)}
                />
                {
                    this.state.loading ?
                        <Loading />
                        :
                        null
                }
                {
                    this.state.loadSuccess ?
                        null
                        :
                        <Error callRefresh={this.callRefresh}/>
                }
            </View>
        );
    }
}

export default HomeScreen;
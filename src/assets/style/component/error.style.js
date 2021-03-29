import {
    StyleSheet
} from 'react-native';

export const errorStyles = StyleSheet.create({
    parent: {
        position: "absolute",
        zIndex:2,
        bottom: 10,
        left: 5,
        right: 5,
        backgroundColor:"grey",
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    errorText:{
        fontSize: 15,
        color:"red",
    },
    tryAgain: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 15,
        color:"green",
    }
});

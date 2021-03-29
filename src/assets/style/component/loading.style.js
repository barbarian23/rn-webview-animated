import {
    StyleSheet
  } from 'react-native';

export const loadingStyles = StyleSheet.create({
    parent: {
        position:"absolute",
        zIndex:2,
        top:0,
        left:0,
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      height:"100%",
      opacity:0.7,
      backgroundColor:"black"
    },
    loadingIndicator: {
        borderWidth:5,
        borderRadius: 50,
        borderTopColor: "#3498db",
        width: 50,
        height: 50,
    },
  });
  
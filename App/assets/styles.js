import {StyleSheet} from 'react-native';

const genericStyles = StyleSheet.create({
    horizontalRow : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    verticalRow : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center' ,
        
    },
    grayText : {
        color : '#BCBEC0',
        fontSize : 15   
    },
    blackText : {
        color : '#231F20',
        fontSize : 18,
    },
    coloredText : {
        color : '#17F1D7',
        fontSize : 18,
    },
    greenText :{
        color : '#00CF91',
        fontSize : 18,
    },
    boldText : {
        fontWeight : 'bold'
    },
    wellText :{
        margin : 3,
        paddingHorizontal :13 ,
        paddingVertical : 5,
        borderRadius : 40,
        borderWidth : .5,
        borderColor : '#D1D3D4'
    },
    headingText :{
        marginVertical : 15,
        fontWeight : 'bold',
        fontSize : 15,
        color : '#8C8C8C'
    }
});

export default genericStyles;
const windowWidth = Dimensions.get('window').width;
import {Dimensions } from 'react-native';
module.exports ={
    
    body: {
        flex: 1,
        backgroundColor: '#fff'
      },
      playerInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30
      },
      playerTxt: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1.2,
        color: '#fff'
      },
      mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 60
      },
      cell_00: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6
      },
      cell_01: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6
      },
      cell_02: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
        borderLeftWidth: 6,
      },
      cell_10: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
      },
      cell_11: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cell_12: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
      },
      cell_20: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderTopWidth: 6,
      },
      cell_21: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 6,
      },
      cell_22: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
        borderTopWidth: 6,
      },
      icon: {
        height: 62,
        width: 62
      },
      cancelBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20
      },
      cancelIcon: {
        height: 80,
        width: 80
      }

}

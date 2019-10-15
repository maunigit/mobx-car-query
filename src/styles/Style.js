import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeContainer: { 
        flex: 1,         
        textAlign: 'center',        
        justifyContent: 'center'
    },
    container: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    paragraphText: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',      
      justifyContent: 'space-around'
    },
});
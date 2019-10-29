import { StyleSheet } from 'react-native';

/**
 * Global style
 */
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
    safeArea: {
      flex: 1
    },
    titleDisable: {
      color: 'gray',
      fontSize: 20,
      fontWeight: 'bold',
    },
    titleEnable: {  
      color: 'black',    
      fontSize: 20,
      fontWeight: 'bold',
    },
    descriptionDisable: {
      color: 'gray',
      fontSize: 16,
    },
    descriptionEnable: {
      color: 'black',    
      fontSize: 16,
    },
    icon: { width: 30, height: 30 },
});
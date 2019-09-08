import React from 'react';
import {ThemeProvider , Button} from 'react-native-elements';
import {headerStyles as styles} from 'C:/elements/src/styles.js';
import {TouchableOpacity , Text } from 'react-native';

const theme ={
    Button: {
    titleStyle: {
    color: 'black',
    },
  },
};

class HomeScreen extends React.Component{
    render (){
       
        return(  
            <ThemeProvider theme = {theme} >
                <Button title="Home">
                onPress={() => {
                        this.props.navigation.navigate ('Home')           
                    }}>
                </Button>
                
            </ThemeProvider >  
           

          );
    }
}
export default HomeScreen;




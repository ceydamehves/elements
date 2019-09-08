import React from 'react';
import {ThemeProvider , Button , Header} from 'react-native-elements';
import {headerStyles as styles} from 'C:/elements/src/styles.js';
import {TouchableOpacity , Text , Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';


const theme ={
    Button: {
        type : "outline",
        
        titleStyle: {
            color: 'magenta',
        },
    },
};

class HomeScreen extends React.Component{
    render (){
       
        return(
            <ThemeProvider theme = {theme}>
                  
            <Header> 
                <Icon 
                    name='arrow-back'
                    iconStyle={{ icon: 'arrow-back', color: '#fff', marginBottom: 20 }} 
                    onPress={() => {
                        this.props.navigation.navigate ('Home')           
                    }}></Icon> 
                <Icon 
                    name='home'
                    iconStyle={{ icon: 'home', color: '#fff', marginBottom: 20 }} 
                    onPress={() => {
                        this.props.navigation.navigate ('Home')           
                    }}></Icon>          
                <Icon 
                    name='menu'
                    iconStyle={{ icon: 'menu', color: '#fff', marginBottom: 20}} 
                    onPress={() => {
                        this.props.navigation.navigate ('firstpage')           
                    }}></Icon>
                
                    
            </Header>
                <Button buttonStyle={{borderRadius: 30, marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10, width: Dimensions.get('window').width * 0.95, height: Dimensions.get('window').width * 0.2}}
                title="Go to FirstPage"
                onPress={() => {
                        this.props.navigation.navigate ('firstpage')           
                    }}>
                </Button>
                <Button buttonStyle={{borderRadius: 30, marginLeft: 10, marginRight: 10, marginBottom: 10, width: Dimensions.get('window').width * 0.95, height: Dimensions.get('window').width * 0.2}}
                title="Go to SecondPage"/>
            </ThemeProvider >  
           

          );
    }
}
export default HomeScreen;




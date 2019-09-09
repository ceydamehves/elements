import React from 'react';
import {ThemeProvider , Button , Header} from 'react-native-elements';
import {headerStyles as styles} from 'C:/elements/src/styles.js';
import {TouchableOpacity , Text , Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const theme ={
    Button: {
        type : "outline",
        
        titleStyle: {
            color: 'black',
            size: 48
        },
    },
};

class Home extends React.Component{
    render (){
       
        return(
            <ThemeProvider theme = {theme}>
                  
            <Header
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                colors: ['magenta', 'pink'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}>        
                <Icon 
                    name='menu'
                    iconStyle={{ icon: 'menu', color: '#fff', marginBottom: 20}} 
                    onPress={() => {
                        this.props.navigation.navigate ('firstpage')           
                    }}></Icon>
                <Button
                    buttonStyle={{ marginBottom: 20, borderRadius: 30, style: { color: '#fff' }}} 
                    title="Welcome to Elements"
                    onPress={() => {
                    }}
                ></Button>
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
export default Home;




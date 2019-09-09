import React from 'react';
import {ThemeProvider , Button , Header , Icon , SearchBar} from 'react-native-elements';
import {headerStyles as styles} from 'C:/elements/src/styles.js';
import {TouchableOpacity , Text , Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const theme ={
    Button: {
    titleStyle: {
    color: 'black',
    },
    Header: {
        barStyle:'light-content'
    },
  },
};

state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  const { search } = this.state;
class firstpage extends React.Component{
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
                <SearchBar 
                    lightTheme= 'true'
                    placeholderTextColor= "#fff"
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
            
            </ThemeProvider >  
            
           
           

          );
    }
}
export default firstpage;





import React, { Component }  from 'react';

import {TextInput} from 'react-native';
import {Button,Card,CardSection} from './common'

class LogInForm extends Component{
    render()
    {
        return(
            <Card>

                <CardSection/>
                <TextInput style={styles.inputStyle}/>
                <CardSection/>

                <CardSection>
                    <Button>Submit</Button>
                </CardSection>

            </Card>
        );


    }
}

 const styles={
    inputStyle:{
        width:1000,
        height:40
    }
 }

export default LogInForm;
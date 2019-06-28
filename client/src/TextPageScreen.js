import React, { Component } from 'react';
import './App.css';
import Dictaphone from  './WriteAReviewScreen';
<<<<<<< HEAD
=======
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

>>>>>>> Changes


export default class TextPageScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: this.props.appActions.dataSlots['ds_PhoneNumber'],
<<<<<<< HEAD
        body: 'TEST'
=======
        body: this.props.appActions.dataSlots['ds_Messages']
>>>>>>> Changes
      },
      submitting: false,
      error: false
    };
   
    
  }

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow, img_Number

  
 
  onClick_elButton = (ev) => {
    // Go to screen 'Sent'
    this.props.appActions.goToScreen('sent', { transitionId: 'fadeIn' });
  
  }

  myCallback = (dataFromChild) => {
    console.log(dataFromChild);
    this.props.appActions.updateDataSlot("ds_Messages", dataFromChild);
    const newVal= dataFromChild;
  console.log(newVal)
  this.setState(prevState => ({
    message: {                   // object that we want to update
        ...prevState.message,    // keep all other key-value pairs
        body: newVal       // update the value of specific key
    }
}))
   
       
}



onSubmit(event) {
  event.preventDefault();

  console.log(event.target.value)
  
  this.setState({ submitting: true });
  
  fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.message)
  })
    .then(res => res.json())
    
    .then(data => {
      if (data.success) {
        this.setState({
          error: false,
          submitting: false,
          message: {
            to: this.props.appActions.dataSlots['ds_PhoneNumber'],
            body: ''
          }
<<<<<<< HEAD
        });
=======
     
        });
        this.props.appActions.goToScreen('sent', { transitionId: 'fadeIn' });
>>>>>>> Changes
      } else {
        this.setState({
          error: true,
          submitting: false
        });
<<<<<<< HEAD
      }
    });
=======
        this.props.appActions.goToScreen('unsent', { transitionId: 'fadeIn' });
      }
    });
    
>>>>>>> Changes
}

  

  
  render() {
  

    
    const { } = this.props
    
    
<<<<<<< HEAD
    const final_message = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Messages'] : '');
    const phone_number = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_PhoneNumber'] : '');
   
    

  
    
    
     
    
     return (
       <div>
      <Dictaphone callbackFromParent={this.myCallback}/>

      
        <p type="text">
        Your Message: <code>{final_message}</code>
      </p>
      <p>{phone_number} </p>
      <p>{final_message}</p>

      <button value= {phone_number} onClick={this.onSubmit.bind(this)}>TEST BUTTON</button>
      
     

=======
    //const final_message = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Messages'] : '');
    const phone_number = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_PhoneNumber'] : '');
    const nameforbutton = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots["ds_selectedFriendName"] : '');

    const backgroundColorScreen = {backgroundColor: '#fff6e8', width: '100vw', height: '100vh'}


     const sendStyle = {
      backgroundColor: '#643200',
      height: '100px',
      width: '80vw',
      textAlign: 'center',
      color: 'white',
      margin: '0 auto'

      
    }
   
    const yellow = {
      backgroundColor: 'yellow',
      color: '#643200',
      fontSize: '18px',
      padding: '5px'
    }

    const addMargin = {
      marginTop: '30px',
      textAlign: 'center'
    }
     
    
     return (
       <div className="backgroundColor" style= {backgroundColorScreen}>
      <Dictaphone callbackFromParent={this.myCallback}/>


    <Container>
      <Button value= {phone_number} style={sendStyle} onClick={this.onSubmit.bind(this)}>3. SEND TO <code>{nameforbutton}</code></Button>
      <p style={addMargin}>(Hint: You can click on the <span style={yellow}> YELLOW </span> message block to try your message again.)</p> 
      
      </Container> 
>>>>>>> Changes
      </div>
    )
  }
}
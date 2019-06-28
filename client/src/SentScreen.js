import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
<<<<<<< HEAD
import firestore from 'firebase/firestore';
=======

>>>>>>> Changes

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class SentScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elSendButton = (ev) => {
    // Go to screen 'Friends'
    this.props.appActions.goToScreen('friends', { transitionId: 'fadeIn' });
  

  
  }
  
  
  onClick_elButton2 = (ev) => {
    // 'Sign out (lock gate)' action.
    this.clearSavedLogin();
    this.props.appActions.goToScreen('login');
  
  }
  
<<<<<<< HEAD
  
  onClick_elButton = (ev) => {
    // Go to screen 'Text Page'
    this.props.appActions.goToScreen('textpage', { transitionId: 'fadeIn' });
  
  }
=======

>>>>>>> Changes
  
  
  clearSavedLogin() {
    // Logout
    firebase.auth().signOut();
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
<<<<<<< HEAD
      layoutFlowStyle.height = '100vh';
=======
      //layoutFlowStyle.height = '-30vh';
>>>>>>> Changes
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fff6e8',
     };
<<<<<<< HEAD
    const style_elSendButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elSendButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text4 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_selectedFriendName'] : '');
    
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
=======
  
>>>>>>> Changes
    const style_elText = {
        fontSize: 28.0,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
<<<<<<< HEAD
=======
        marginTop: '0px',
        marginBottom: '30px'
>>>>>>> Changes
     };
    const value_text = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Messages'] : '');
    
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
<<<<<<< HEAD
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
=======
        width: '80vw'
     };
    const style_elButton2_outer = {
      display: 'block',
      textTransform: 'uppercase',
      color: '#feffff',
      textAlign: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
      width: '100vw',
      marginBottom: '20px',
      marginRight: '40px',
      marginLeft: '40px'

>>>>>>> Changes
     };
    const style_elButton = {
        display: 'block',
        textTransform: 'uppercase',
        color: '#feffff',
        textAlign: 'center',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
<<<<<<< HEAD
=======
      
>>>>>>> Changes
      <div className="AppScreen SentScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />
<<<<<<< HEAD
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elSendButton' style={style_elSendButton_outer}>
            <Button className='actionFont' style={style_elSendButton}  color="accent" onClick={this.onClick_elSendButton} >
              {this.props.locStrings.addreview_button_596452}
            </Button>
          
          </div>
          
          <div className='elText4'>
            <div className='baseFont' style={style_elText4}>
              <div>{value_text4 !== undefined ? value_text4 : (<span className="propValueMissing">{this.props.locStrings.writeareview_text4_525177}</span>)}</div>
=======

>>>>>>> Changes
            </div>
          
          </div>
          
<<<<<<< HEAD
          <div className='elText3'>
            <div className='baseFont' style={style_elText3}>
              <div>{this.props.locStrings.writeareview_text3_601020}</div>
            </div>
          
          </div>
          
          <div className='elText'>
            <div className='font-helvetica' style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.writeareview_text_386455}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elButton2' style={style_elButton2_outer}>
            <Button className='actionFont' style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.writeareview_button2_69276}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elButton' style={style_elButton} onClick={this.onClick_elButton} >
              {this.props.locStrings.writeareview_button_160588}
            </button>
            <div className='baseFont elTextBlock' style={style_elTextBlock}>
              <div>{this.props.locStrings.sent_textblock_322951}</div>
            </div>
          </div>
        </div>
      </div>
=======
         
        <div className="layoutFlow" >
          
          <div className='elText'>
            <div className='font-helvetica' style={style_elText}>
              <div>Your message "<code>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.writeareview_text_386455}</span>)}</code>" was sent!</div>
            </div>
          
          </div>
          <div>
          <div className='elButton2' style={style_elButton2_outer}>
            <Button className='actionFont' style={style_elButton2}  color="accent" onClick={this.onClick_elSendButton} >
              Send Another Text
            </Button>
          
          </div>

          <div style={style_elButton2_outer}>
            <Button className='actionFont' style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              Logout
            </Button>
          
          </div>
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont elTextBlock' style={style_elTextBlock}>
              <div>{this.props.locStrings.welcome_textblock_484319}</div>
            </div>
            <div className='baseFont elTextBlock2'>
              <div>{this.props.locStrings.welcome_textblock2_308696}</div>
            </div>
          </div>
        </div>

        </div>
          
         
>>>>>>> Changes
    )
  }
  

<<<<<<< HEAD
}
=======
}
>>>>>>> Changes

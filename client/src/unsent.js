import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class UnsentScreen extends Component {

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
      //layoutFlowStyle.height = '-30vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fff6e8',
     };
  
    const style_elText = {
        fontSize: 28.0,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        marginTop: '0px',
        marginBottom: '30px'
     };
    const value_text = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_Messages'] : '');
    
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
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
      <div className="AppScreen SentScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />

            </div>
          
          </div>
          
         
        <div className="layoutFlow" >
          
          <div className='elText'>
            <div className='font-helvetica' style={style_elText}>
              <div>Oh no! Your message "<code>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.writeareview_text_386455}</span>)}</code>" was not sent</div>
            </div>
          
          </div>
          <div>
          <div className='elButton2' style={style_elButton2_outer}>
            <Button className='actionFont' style={style_elButton2}  color="accent" onClick={this.onClick_elSendButton} >
              Try Again
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
          
         
    )
  }
  

}

import React, { Component } from 'react';
import './App.css';
import textinggrandma from './images/textinggrandma.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class WelcomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Friends'
    this.props.appActions.goToScreen('friends', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText3 = (ev) => {
    // Go to screen 'Login'
    this.props.appActions.goToScreen('login', { transitionId: 'fadeIn' });
  
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
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#ffe99d',
     };
    const style_elText2 = {
        fontSize: 30.1,
        color: '#643200',
        textAlign: 'center',
     };
    const value_text2 = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserName'] : '');
    
    const style_elText = {
        fontSize: 50,
        color: '#643200',
        textAlign: 'center',
     };
    const style_elButton = {
        display: 'block',
        fontSize: 31.4,
        fontFamily: "'Helvetica', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#643200',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText3 = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#643200',
        textAlign: 'center',
     };
    const style_elText3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elTextBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elTextBlock2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_WelcomeScreen_elText2_978435">
          <div className='elText2'>
            <div className='font-markerFeltThin' style={style_elText2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.screen6_text2_978435}</span>)}</div>
            </div>
          
          </div>

          
          
          <div className='elText'>
            <div className='font-markerFeltThin' style={style_elText}>
              <div>{this.props.locStrings.welcome_text_360004}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button className='' style={style_elButton} onClick={this.onClick_elButton} >
              {this.props.locStrings.screen6_button_259480}
            </Button>
          
          </div>
          
          <div className='elText3' style={style_elText3_outer}>
            <div className='' style={style_elText3} onClick={this.onClick_elText3} >
              <div>{this.props.locStrings.screen6_text3_514289}</div>
            </div>
          
          </div>
          
          </div>
        </div>

        <div className='style_icon'>
          <img src={textinggrandma} alt="" style={{width: '50px', display: 'block', margin: 'auto', padding: '10px'}} />
          </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='baseFont elTextBlock' style={style_elTextBlock}>
              <div>{this.props.locStrings.welcome_textblock_484319}</div>
            </div>
            <div className='baseFont elTextBlock2' style={style_elTextBlock2}>
              <div>{this.props.locStrings.welcome_textblock2_308696}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

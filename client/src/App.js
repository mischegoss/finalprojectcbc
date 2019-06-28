import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import SentScreen from './SentScreen.js';
import TextPageScreen from './TextPageScreen.js';
import FriendsScreen from './FriendsScreen.js';
import WelcomeScreen from './WelcomeScreen.js';
<<<<<<< HEAD
import Dictaphone from  './WriteAReviewScreen'
=======
import UnsentScreen from  './unsent.js'
>>>>>>> Changes
import LoginScreen from './LoginScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';

import DataSheet_sheet2 from './DataSheet_sheet2.js';
import firebase from 'firebase';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['sheet2'] = new DataSheet_sheet2('sheet2', this.dataSheetDidUpdate);
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    //this.dataSheets['pickerNumberOfRows'] = new DataSheet_pickerNumberOfRows('pickerNumberOfRows', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_selectedRestaurantId'] = "4r2BhNHW8guC9SaDbzoG";
    this.dataSlots['ds_numberOfRestaurants'] = "10";
    this.dataSlots['ds_SlotUserID'] = "";
    this.dataSlots['ds_SlotUserName'] = "";
    this.dataSlots['ds_SlotUserEmail'] = "";
    this.dataSlots['ds_SlotReviewRating'] = "0";
    this.dataSlots['ds_selectedFriendName'] = "";
    this.dataSlots['ds_Messages'] = "";
    this.dataSlots['ds_PhoneNumber'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'firebase 1'
    firebase.initializeApp({apiKey: "AIzaSyD98BZnif_88GJQuy_cF67rBJHn_xianFs",
            authDomain: "texterimages.firebaseapp.com",
            databaseURL: "https://texterimages.firebaseio.com",
            projectId: "texterimages",
            storageBucket: "texterimages.appspot.com",
            messagingSenderId: "592534977480",
            appId: "1:592534977480:web:ee43d9435e5a242d"
    
    
    });
    firebase.firestore().settings({});
    
    this.serviceOptions_sheet2 = {
      dataSlots: this.dataSlots,
      servicePath: "Textees",
      query: "",
    };
    this.dataSheets['sheet2'].firebase = firebase;
    

    this.state = {
      currentScreen: 'login',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_sheet2.servicePath = this.dataSheets['sheet2'].expandSlotTemplateString("Textees", this.dataSlots);
    this.loadData_firebase1(this.dataSheets['sheet2'], this.serviceOptions_sheet2, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['sheet2'].expandSlotTemplateString("Textees", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_sheet2.servicePath = servicePath;
        this.loadData_firebase1(this.dataSheets['sheet2'], this.serviceOptions_sheet2, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_firebase1 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Firebase (Cloud Firestore)'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
      dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const db = firebase.firestore();
    const collection = db.collection(options.servicePath);
    const query = dataSheet.expandSlotTemplateString(options.query, this.dataSlots);
    let queryObj;
    
    if (query.length < 1) {
      queryObj = collection;
    } else {
      console.log("loading firebase data for '%s' with query: %s", options.servicePath, query);
      try {
        queryObj = eval(`(function(c){ return c.${query}; })(collection)`);
      } catch (e) {
        console.log("** error creating firebase query object from '%s': ", query, e)
        return;
      }
    }
    
    queryObj.onSnapshot(
      (querySnapshot) => {
        let jsonArr = [];
        
        if (querySnapshot.docs) {
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), document_key: doc.id };
            jsonArr.push(data);
          });
        } else if (querySnapshot.data) {
          const doc = querySnapshot;
          const data = { ...doc.data(), document_key: doc.id };
          jsonArr.push(data);
        }    
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);  
      },
      (err) => {
        fetchComplete(err, options);
      });  
    
    
     /*
    dbLoadingPromise.get().then((querySnapshot) => {
        let jsonArr = [];
    
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), key: doc.id };
          jsonArr.push(data);
        });
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);
      },
      (err) => {
        fetchComplete(err, options);
      });  
      */
    
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_selectedRestaurantId': this.dataSlots['ds_selectedRestaurantId'],
        'ds_numberOfRestaurants': this.dataSlots['ds_numberOfRestaurants'],
        'ds_SlotUserID': this.dataSlots['ds_SlotUserID'],
        'ds_SlotUserName': this.dataSlots['ds_SlotUserName'],
        'ds_SlotUserEmail': this.dataSlots['ds_SlotUserEmail'],
        'ds_SlotUserPhoto': this.dataSlots['ds_SlotUserPhoto'],
        'ds_SlotReviewRating': this.dataSlots['ds_SlotReviewRating'],
        'ds_selectedFriendName': this.dataSlots['ds_selectedFriendName'],
        'ds_Messages': this.dataSlots['ds_Messages'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_TextPageScreen = this.dataSheets['sheet2'].items[parseInt((this.dataSlots.ds_selectedRestaurantId !== undefined) ? this.dataSlots.ds_selectedRestaurantId : 0, 10)];
      const screenData_TextPageScreen = {
        ...dataSheetRow_TextPageScreen,
        dataSheetRow: dataSheetRow_TextPageScreen,
      }

      


     
      switch (screenId) {
        default:
          return null;
        case 'sent':
          return (<SentScreen {...screenProps} />)
        case 'textpage':
          return (<TextPageScreen {...screenProps} {...screenData_TextPageScreen}/>)
        case 'friends':
          return (<FriendsScreen {...screenProps} />)
        case 'welcome':
          return (<WelcomeScreen {...screenProps} />)
        case 'login':
          return (<LoginScreen {...screenProps} />)
<<<<<<< HEAD
=======
          case 'unsent':
            return (<UnsentScreen {...screenProps} />)
>>>>>>> Changes
        
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}


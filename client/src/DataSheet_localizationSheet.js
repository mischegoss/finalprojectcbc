import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_button_596452";
    item['en'] = "SEND ANOTHER TEXT";
    
    i
    item = {};
    this.items.push(item);
    item['key'] = "restaurants_textcopy_152181";
    item['en'] = "(limit)";
    
    
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantitem_button_813725";
    item['en'] = "TEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "addrestaurant_restaurantopeninghourscopy_70912";
    item['en'] = "Cover image URL";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtextcopy_367397";
    item['en'] = "Your name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addreview_reviewtextcopy2_313895";
    item['en'] = "Title...";
    
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantcoverimageurl_837276";
    item['en'] = "Cover image URL";
    
    item = {};
    
    
    i
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_text_343965";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textcopy_1026884";
    item['en'] = "(Reviewer name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text_365780";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_textdescriptioncopy_421084";
    item['en'] = "(restaurant www)";
    
    
    item = {};
    this.items.push(item);
    item['key'] = "addarestaurant2_restaurantcoverimageurl_136197";
    item['en'] = "Cover image URL";
    
    
    
    item = {};
    this.items.push(item);
    item['key'] = "screen6_text_448293";
    item['en'] = "WELCOME";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen6_text_240612";
    item['en'] = "WELCOME";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen6_text2_978435";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen6_button_259480";
    item['en'] = "ENTER";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen6_text3_514289";
    item['en'] = "Not You? Click Here";
    
    item = {};
    this.items.push(item);
    item['key'] = "restaurantdetails_button_689558";
    item['en'] = "SEND";
    
    item = {};
    this.items.push(item);
    item['key'] = "loginmain_text2_672263";
    item['en'] = "(REDNER)";
    
    item = {};
    this.items.push(item);
    item['key'] = "loginmain_text3_188557";
    item['en'] = "Go to User Management";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_textarea_34792";
    item['en'] = "Message goes here";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_text_463095";
    item['en'] = "(Phone)";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_button2_69276";
    item['en'] = "LOG OUT";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text_386455";
    item['en'] = "(SENT!)";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text2_308571";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text3_601020";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "writeareview_text4_525177";
    item['en'] = "(Name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_textblock_106410";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "sent_textblock_322951";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "friends_textblock_465473";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textblock_384546";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textblock_484319";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_textblock2_308696";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_942905";
    item['en'] = "WELCOME \n";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_975654";
    item['en'] = "AlteTalker! ";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_text_360004";
    item['en'] = "Glad to see you,  ";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_button2_514814";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_button2_820710";
    item['en'] = "STOP";
    
    item = {};
    this.items.push(item);
    item['key'] = "textpage_button3_497984";
    item['en'] = "START";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}

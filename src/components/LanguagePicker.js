/**
 * # LanguagePicker.js
 *
 */
'use strict'
/**
 * ## Imports
 *
 * React
 */
import React from 'react'
import
{
  StyleSheet,
  View,
  Picker
} from 'react-native'

/**
 * ## Styles
 */
let styles = StyleSheet.create({
  centered: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

let LanguagePicker = React.createClass({

  _onLanguageChange (lang) {
    this.props.setLanguage(lang)
  },

  render () {
    return (
      <View style={styles.centered}>
        <Picker style={{width: 200}}
          selectedValue={this.props.language}
          onValueChange={(lang) => this._onLanguageChange(lang)}>
          <Picker.Item label="Danish" value="Danish" />
          <Picker.Item label="Dutch" value="Dutch" />
          <Picker.Item label="English" value="English" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="German" value="German" />
          <Picker.Item label="Icelandic" value="Icelandic" />
          <Picker.Item label="Italian" value="Italian" />
          <Picker.Item label="Norwegian" value="Norwegian" />
          <Picker.Item label="Portuguese" value="Portuguese" />
          <Picker.Item label="Romanian" value="Romanian" />
          <Picker.Item label="Russian" value="Russian" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="Swedish" value="Swedish" />
          <Picker.Item label="Turkish" value="Turkish" />
          <Picker.Item label="Welsh" value="Welsh" />
        </Picker>
      </View>
    )
  }

})

module.exports = LanguagePicker

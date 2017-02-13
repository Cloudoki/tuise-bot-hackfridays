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
          <Picker.Item label="Portuguese" value="Portuguese" />
          <Picker.Item label="Dutch" value="Dutch" />
          <Picker.Item label="Spanish" value="Spanish" />
        </Picker>
      </View>
    )
  }

})

module.exports = LanguagePicker

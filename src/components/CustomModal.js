import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

const CustomModal = (props) => {
  return (
    <View style={props.modalContainer}>
      <Text style={props.textStyle}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 500,
    width: 500,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3
  },
  textStyle: {
    fontSize: 30
  }
})

CustomModal.defaultProps = {
  modalContainer: styles.modalContainer,
  textStyle: styles.textStyle,
  text: 'Modal'
}

CustomModal.propTypes = {
  text: PropTypes.string
}

export default CustomModal
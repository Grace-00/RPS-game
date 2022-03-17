import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CustomInput(props) {

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)

    const getName = (e) => {
        props.callbackName(e)
    }
    return (
        <View style={props.inputContainer}>
            <TextInput
                placeholder={props.placeholder}
                style={[props.inputStyle, { outlineColor: isFocused ? `${props.outlineColor}` : '' }]}
                onFocus={handleFocus}
                onChangeText={getName}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 200
    },
    inputStyle: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,

    }
})

CustomInput.defaultProps = {
    inputContainer: styles.inputContainer,
    inputStyle: styles.inputStyle,
    placeholder: 'name',
    outlineColor: '#00b4d8',
}

CustomInput.propTypes = {
    placeholder: PropTypes.string,
    callbackName: PropTypes.func
}
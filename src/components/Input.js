import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Input(props) {

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        outlineColor: '#00b4d8',
    }
})

Input.defaultProps = {
    inputContainer: styles.inputContainer,
    inputStyle: styles.inputStyle,
    placeholder: 'name'
}

Input.propTypes = {
    placeholder: PropTypes.string,
    callbackName: PropTypes.func
}
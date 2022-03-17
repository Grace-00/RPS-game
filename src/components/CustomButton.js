import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

export default function CustomButton(props) {

    const handlePress = () => {
        props.callbackPress()
    }
    return (
        <View style={props.buttonContainer}>
            <Pressable
                style={[props.buttonStyle, { backgroundColor: props.backgroundColor }]}
                onPress={handlePress}>
                <Text
                    style={props.textStyle}>
                    {props.label}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200
    },
    buttonStyle: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textStyle: {
        color: 'white'
    }
})

CustomButton.defaultProps = {
    buttonContainer: styles.buttonContainer,
    buttonStyle: styles.buttonStyle,
    textStyle: styles.textStyle,
    label: 'Press',
    backgroundColor: '#00b4d8'
}

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    callbackPress: PropTypes.func
}
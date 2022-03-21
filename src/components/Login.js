import React from 'react'
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Login(props) {

    const getName = (e) => {
        props.handleInput(e)
    }

    const handlePress = () => {
        props.handleButton()
    }

    return (
        <View style={props.loginContainer}>
            <CustomInput callbackName={getName} />
            <CustomButton callbackPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    flex: 1
})


Login.defaultProps = {
    loginContainer: styles.loginContainer
}

Login.propTypes = {
    handleButton: PropTypes.func,
    handleInput: PropTypes.func,
}


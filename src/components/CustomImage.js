import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

export default function CustomImage(props) {
    const handlePress = () => {
        props.callbackPress()
    }
    return (
        <View style={props.imageContainer}>
            <Pressable onPress={handlePress} >
                <Image source={props.imageURI} style={props.imageStyle} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    imageStyle: {
        width: 50,
        height: 50,
    }
})

CustomImage.defaultProps = {
    imageContainer: styles.imageContainer,
    imageStyle: styles.imageStyle
}

CustomImage.propTypes = {
    imageURI: PropTypes.string.isRequired,
    callbackPress: PropTypes.func
}
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

export default function CustomRank(props) {

    const renderItem = ({ item }) => {
        return (
            <View style={[props.itemStyle, { flexDirection: props.orientation }]}>
                <Text style={props.nameStyle}>{item.name}</Text>
                <Text style={props.scoreStyle}>{item.score}</Text>
            </View>

        )

    }

    return (
        <View style={props.rankContainer}>
            <Text>{props.label}</Text>
            <View style={props.flatlistContainer}>
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rankContainer: {
        width: 200
    },
    flatlistContainer: {
        height: 200
    },
    itemStyle: {
        height: 50,
        justifyContent: 'space-between',
        paddingBottom: 7
    },
    scoreStyle: {
        flexBasis: '32%',

    },
    nameStyle: {
        flexBasis: '32%',
    }

})

CustomRank.defaultProps = {
    rankContainer: styles.rankContainer,
    flatlistContainer: styles.flatlistContainer,
    itemStyle: styles.itemStyle,
    scoreStyle: styles.scoreStyle,
    nameStyle: styles.nameStyle,
    orientation: 'row',
    label: 'Ranking',
}

CustomRank.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,
    name: PropTypes.string,
    score: PropTypes.number
}
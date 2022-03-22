import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getData, getRandomNumber, storeData } from './utils/utils'
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'

const Game = (props) => {
    const assetGame = ['scissors', 'paper', 'rock']
    let arrOfPlayers = []
    const [state, setState] = useState({
        pcPoints: 0,
        player: {
            name: props.name,
            points: 0,
            winner: ""
        },
        pcChoice: ''
    })
    
    /* chiamata per salvare i player */
    const savePlayer = async () => {
        //prende valore dell'array e lo salva in existingPlayers come oggetto JSON
        let existingPlayers = await getData("arrayOfPlayers");
        console.log('existing players', existingPlayers)
        //copia tutti gli elementi di existingPlayers(key,value) in arrOfPlayers
        //non permette di azzerare l'array ad ogni azione
        Object.assign(arrOfPlayers, existingPlayers);
        const foundPlayer = arrOfPlayers.find(obj => {
            if (obj.name === state.player.name) {
                return obj;
            }
        });
        if (foundPlayer === undefined) {
            arrOfPlayers.push(state.player)
        }
        else {
            if (foundPlayer.points < state.player.points) {
                arrOfPlayers.splice(arrOfPlayers.indexOf(foundPlayer), 1);
                arrOfPlayers.push(state.player);
            }
        }
        await storeData("arrayOfPlayers", arrOfPlayers);
    }

    const match = (typeCard) => () => {

        let pcChoice = assetGame[getRandomNumber(0, 2)];

        let oneMoreUser = null;
        let oneMorePc = null;
        let winner = ""
        //player wins
        if ((typeCard === assetGame[0] && pcChoice === assetGame[1])
            || (typeCard === assetGame[1] && pcChoice === assetGame[2])
            || (typeCard === assetGame[2] && pcChoice === assetGame[0])) {
            oneMoreUser = 1
            oneMorePc = 0
            winner = "You win!"
            //tie
        } else if ((typeCard === assetGame[0] && pcChoice === assetGame[0])
            || (typeCard === assetGame[1] && pcChoice === assetGame[1])
            || (typeCard === assetGame[2] && pcChoice === assetGame[2])) {
            oneMoreUser = 0
            oneMorePc = 0
            winner = "It's a tie!"
            //player loses
        } else if ((pcChoice === assetGame[0] && typeCard === assetGame[1])
            || (pcChoice === assetGame[1] && typeCard === assetGame[2])
            || (pcChoice === assetGame[2] && typeCard === assetGame[0])) {
            oneMoreUser = 0
            oneMorePc = 1
            winner = "You lose!"
        }
        setState({
            pcPoints: state.pcPoints + oneMorePc,
            player: {
                points: state.player.points + oneMoreUser,
                name: props.namePlayer
            },
            winner: winner,
            pcChoice: pcChoice
        })
    }

    return (
        <>
            <View style={props.outerGameContainer}>
                <View style={props.gameContainer}>
                    <View style={props.viewGame}>
                        <CustomImage
                            imageContainer={props.imageContainer}
                            imageStyle={props.imageStyle}
                            imageURI={rock}
                            callbackPress={match('rock')} />
                        <CustomImage
                            imageContainer={props.imageContainer}
                            imageStyle={props.imageStyle}
                            imageURI={paper}
                            callbackPress={match('paper')} />
                        <CustomImage
                            imageContainer={props.imageContainer}
                            imageStyle={props.imageStyle}
                            imageURI={scissors}
                            callbackPress={match('scissors')} />
                    </View>
                    <View style={props.viewTexts}>
                        <View style={props.viewTexts}>
                            <Text style={props.textStyle}>YOUR POINTS</Text>
                            <Text style={props.textStyle}>
                                {state.player.points}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={props.gameContainer}>
                    <View style={props.viewGame}>
                        {
                            (state.pcChoice === 'rock' &&
                                <CustomImage
                                    imageContainer={props.imageContainer}
                                    imageStyle={props.imageStyle}
                                    imageURI={rock} />)
                            ||
                            (state.pcChoice === 'paper' &&
                                <CustomImage
                                    imageContainer={props.imageContainer}
                                    imageStyle={props.imageStyle}
                                    imageURI={paper} />)
                            ||
                            (state.pcChoice === 'scissors' &&
                                <CustomImage
                                    imageContainer={props.imageContainer}
                                    imageStyle={props.imageStyle}
                                    imageURI={scissors} />)
                        }
                    </View>
                    <Text style={props.textStyle}>PC POINTS</Text>
                    <Text style={props.textStyle}>
                        {state.pcPoints}
                    </Text>
                </View>

            </View>
            <Text style={props.textStyle}>
                {state.winner}
            </Text>
            <CustomButton style={props.buttonStyle} callbackPress={savePlayer} label='Registrami' />
        </>
    )
}

const styles = StyleSheet.create({
    outerGameContainer: {
        flexDirection: 'row',
    },
    gameContainer: {
        flex: 1,
        height: 500,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        justifyContent: 'center',
    },
    viewGame: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40
    },
    viewTexts: {
    },
    textStyle: {
        textAlign: 'center'
    }
})

Game.defaultProps = {
    outerGameContainer: styles.outerGameContainer,
    gameContainer: styles.gameContainer,
    viewGame: styles.viewGame,
    viewTexts: styles.viewTexts,
    textStyle: styles.textStyle,
}



export default Game
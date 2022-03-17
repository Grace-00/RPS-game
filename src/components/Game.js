import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { getData, getRandomNumber, storeData } from './utils/utils'
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import rock from '../assets/rock.svg'
import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'


const Game = (props) => {
    const assetGame = ['scissors', 'paper', 'rock']
    let arrOfPlayers = []
    const [state, setState] = useState({
        pcPoints: 0,
        player: {
            name: props.name,
            points: 0,
            winner: ""
        }
    })
    /* chiamata per salvare i player */
    const savePlayer = async () => {
        //prende valore dell'array e lo salva in existingPlayers come oggetto JSON
        let existingPlayers = await getData("arrayOfPlayers");
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

        let flagCase = null;
        let oneMoreUser = null;
        let oneMorePc = null;
        let winner = ""
        //player wins
        if ((typeCard === assetGame[0] && pcChoice === assetGame[1])
            || (typeCard === assetGame[1] && pcChoice === assetGame[2])
            || (typeCard === assetGame[2] && pcChoice === assetGame[0])) {
            flagCase = true
            oneMoreUser = 1
            oneMorePc = 0
            winner = "You win!"
            //tie
        } else if ((typeCard === assetGame[0] && pcChoice === assetGame[0])
            || (typeCard === assetGame[1] && pcChoice === assetGame[1])
            || (typeCard === assetGame[2] && pcChoice === assetGame[2])) {
            flagCase = false
            oneMoreUser = 0
            oneMorePc = 0
            winner = "It's a tie!"
            //player loses
        } else if ((pcChoice === assetGame[0] && typeCard === assetGame[1])
            || (pcChoice === assetGame[1] && typeCard === assetGame[2])
            || (pcChoice === assetGame[2] && typeCard === assetGame[0])) {
            flagCase = false
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
            winner: winner
        })
    }

    return (
        <>
            <View>
                <Text>{props.name}</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <CustomImage imageURI={rock} callbackPress={match('rock')} />
                    <CustomImage imageURI={paper} callbackPress={match('paper')} />
                    <CustomImage imageURI={scissors} callbackPress={match('scissors')} />
                </View>
                <View style={{ width: 200 }}>
                    <Text style={{ textAlign: 'center' }}>
                        {state.winner}
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                        {state.player.points}
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                        {state.pcPoints}
                    </Text>
                </View>
            </View>

            <CustomButton callbackPress={savePlayer} label='Registrami' />
        </>
    )
}

export default Game
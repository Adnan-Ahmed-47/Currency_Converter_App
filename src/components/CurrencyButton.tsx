import React from 'react'
// u can definitely avoid propsWithChildren but if in case u want 100% shurity that whatever the data u r passing in this component should be of some particular type, then this is being used.
import { PropsWithChildren } from 'react'

import { View, Text, StyleSheet } from 'react-native'

// To utilize propsWithChildren , we declare the type 
type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element =>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: '#ffffff',
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: '#2d3436',
    }
})

export default CurrencyButton;
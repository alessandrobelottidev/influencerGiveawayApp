import { View, Image, StyleSheet, Pressable } from 'react-native'

export default function Starter({ setSplash }) {

    function splash() {
        console.log('splash')
        setSplash(false)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => splash()}>
                <Image style={styles.logo} source={require('../assets/splash.png')} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#000',
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
    }
})
import { Pressable, View, StyleSheet, Text } from "react-native"

const HeaderButton = ({onPress}) =>{
    return (
        <Pressable onPress={onPress}>
            <View style={styles.buttonBody}>
                <Text style={styles.text}>Test</Text>
            </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    buttonBody:{
        paddingHorizontal: 24,
        paddingVertical: 6,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#285f9b'
    },
    text: {
        fontWeight:'600',
        fontSize: 16,
        color: '#285f9b'
    }
});

export default HeaderButton;
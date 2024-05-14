import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Color from "../../Colors/Color";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default function HeaderHome(){
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../img/logo.jpg')} />
            <View style={styles.right_side}>
                <FontAwesome5 name="search" size={27} color="white" />
                <MaterialCommunityIcons name="bell-ring" size={27} color="white" />
                <MaterialIcons name="settings" size={27} color="white" />
                <FontAwesome name="user" size={27} color="white" />
            </View>
      </View> 
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: Color.bordercolor,
        paddingHorizontal: 15,
        width: '100%',
        height: 70,
        elevation: 25,
    },
    text: {
        color: Color.textcolor,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        padding: 5,
    },
    right_side: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    }
});
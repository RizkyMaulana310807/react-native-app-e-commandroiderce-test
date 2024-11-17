import { React } from "react";
import { View, Button } from "react-native-web";
const Hal1 = ({ navigation }) => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Button
            title='Masuk'
            onPress={() => {navigation.replace('Hal2', 'Hal1')}}
            />
        </View>
    )
}

export default Hal1;
import { FC,  } from "react";
import { Text, View,  StyleSheet, Image, Linking, TouchableOpacity } from "react-native";

interface FlatCardProps {
    title: string;
    color: string
}

const FlatCard: FC<FlatCardProps> = ({ title, color }) => {

    const openUrl = (url: string) => {
        Linking.openURL(url);
    }

    return(
        <TouchableOpacity onPress={() => openUrl("https://hashnode.com/n/react-native")}>
        <View style={style.mainContainer}>
            <Image source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography'
            }} style={style.cardImage} />
            <Text style={style.mainText}>{title}</Text>
                <Text style={style.clickMe} >click Me</Text>
        </View> 
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    mainContainer: {
       backgroundColor: 'white',
       height: 220,
       width: 190,
       borderRadius: 7,
       justifyContent: 'center',
       alignItems: 'center',
       margin: 8,
       borderColor: 'black',
       borderWidth: 1,
       shadowOffset: {
        height: 1,
        width: 1
       },
       shadowColor: 'black'
    },
    mainText: {
        color: 'black',
        fontSize: 20,
        textTransform: 'capitalize'
    },
    cardImage:{
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    clickMe: {
       color: 'gray'
    }
})

export default FlatCard;

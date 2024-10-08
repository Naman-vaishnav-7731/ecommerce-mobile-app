import {
    Text, SafeAreaView, View, StyleSheet, useColorScheme,
    ScrollView, TouchableHighlight, Image
} from "react-native";
import FlatList from "../../components/flatList/FlatList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/NavigationStack";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";

// Define Here Props Type of Home Screeen
type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Home">

const Home = ({ navigation }: HomeScreenProps) => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text style={isDarkMode ? style.lightText : style.darkText}>
                    Mini Mart
                    <Icon name="eye" size={24} color="black"  />
                </Text>
            </View>
            <View>
                <TouchableHighlight underlayColor={'white'} onPress={() => navigation.navigate('ProductScreen')}>
                    <Image source={require('./banner.png')} style={style.cardImage} />
                </TouchableHighlight>
            </View>
            <FlatList />
        </SafeAreaView>
    )
}

export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white'
    },
    lightText: {
        color: 'black',
        fontSize: 30,
        padding: 5,
        fontFamily: 'cursive',
    },
    darkText: {
        color: "black",
    },
    cardImage: {
        height: 500,
        width: 400,
        resizeMode: 'cover',
    }
})
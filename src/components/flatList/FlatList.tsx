import { FC } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Alert } from "react-native";
import FlatCard from "./FlatCard";

const items = [
    { name: "Node.js", color: "red" },
    { name: "React", color: "blue" },
    { name: "Vue.js", color: "green" },
    { name: "Angular", color: "orange" },
    { name: "Django", color: "purple" },
    { name: "Flask", color: "yellow" }
];

const FlatList: FC = () => {
    return (
        <View style={style.mainContainer}>
            <Text style={style.heading}>Top 5 Products</Text>
            <ScrollView horizontal={true}>
                <FlatCard title={"Shoe"} color={""} />
                <FlatCard title={"Shoe"} color={""} />
                <FlatCard title={"Shoe"} color={""} />
                <FlatCard title={"Shoe"} color={""} />
                <FlatCard title={"Shoe"} color={""} />
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        padding: 7
    },
    heading: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    }
})

export default FlatList;

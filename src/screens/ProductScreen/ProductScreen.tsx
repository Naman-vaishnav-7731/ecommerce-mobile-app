import { Text, View, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/NavigationStack";
import api from "../../networking/apiclient";
import { useEffect, useState } from "react";

type ProductScreenProps = NativeStackScreenProps<RootStackParamsList, 'ProductScreen'>

interface Product {
    id: number;
    title: string;
    price: number;
    images: []
}

const ProductCard = ({ item, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image
                source={{ uri: item?.images?.length > 0 ? item.images[0] : "https://eapi.savierp.com/media/DummyImage.png" }}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item?.title}</Text>
                <Text style={styles.productPrice}>{item?.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ProductScreen = ({ navigation }: ProductScreenProps) => {

    const [productData, setProductData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await api.get('/products');
            setLoading(false);
            if (response?.status == 200 && response?.data) {
                setProductData(response?.data);
            } else {
                setProductData([])
            }
        } catch (error) {
            setLoading(false);
            console.log("error==>", error)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const renderItem = ({ item }: { item: Product }) => (
        <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetailScreen', { productId: item?.id })}
        />
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="red" />
            </View>

        )
    }

    return (
        <FlatList
            renderItem={renderItem}
            data={productData?.products}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10
    },
    cardContainer: {
        width: 180,
        borderRadius: 15,
        backgroundColor: '#f8f8f8',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        margin: 10,
        overflow: 'hidden',
        padding: 5
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textContainer: {
        padding: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#E91E63',
        marginTop: 5,
    },
    clickMe: {
        color: 'gray'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default ProductScreen;
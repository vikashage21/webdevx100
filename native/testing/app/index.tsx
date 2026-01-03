import { ScrollView, Text, View, StyleSheet , FlatList} from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Button } from "@react-navigation/elements";

export default function Index() {
  // defining the type of product

  type ratingType = {
    rate: number;
    count: number;
  };

  interface productType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ratingType;
    title: string;
  }

  // creating a state for storing the data

  const [product, setProducts] = useState<productType[]>([]);

  //  fetching  the data from api

  useEffect(() => {
    // calling the function

    fetchDataApi();
  }, []);

  // defining the function to fetch the data

  async function fetchDataApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView
    >
     
        {product?.map((items) => {
          {
            return (
              <View key={items.id} style={styles.card}>
                <Image
                  source={{uri:items.image}}
                  style={{
                    width: 150,
                    height: 200,
                    marginBottom: 10,
                  }}
                ></Image>
                <Text>{items.category}</Text>
                <Text>${items.price}</Text>
                <Button>buy now</Button>
              </View>
            );
          }
        })}
        .
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({

 
  card: {
   
   backgroundColor: "#fff",
    padding: 16,
    marginTop:2,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3, // shadow for Android
    
  },
});

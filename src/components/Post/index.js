import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            "https://cf.bstatic.com/images/hotel/max1024x768/232/232147488.jpg",
        }}
      />

      {/* Text of bed bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type and description */}
      <Text style={styles.description}>
        Entrire Flat. Sint non duis aliqua ut laboris adipisicing non nisi aute
        non Lorem velit.
      </Text>

      {/* Old and New price */}
      <Text styl={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text> &nbsp;&nbsp;
        <Text style={styles.newPrice}>$30</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;

import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostCarouselItem = (props) => {
  const width = useWindowDimensions().width;

  const post = props.post;
  const navigation = useNavigation();

  const gotoPostDetailPage = () => {
    navigation.navigate("Post", { postId: post.id });
  };

  return (
    <Pressable
      onPress={gotoPostDetailPage}
      style={[styles.container, { width: width - 60 }]}
    >
      {/* Image */}
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
          loadingIndicatorSource={{
            source: require("../../../assets/images/load.gif"),
          }}
        />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {/* Text of bed bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice} </Text>/ night
          </Text>

          {/*  Total price */}
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;

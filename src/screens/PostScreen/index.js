import React from "react";
import { View, Text } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import places from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/native";
const PostScreen = (props) => {
  const route = useRoute();
  // console.log(route.params);
  const post = places.find((place) => place.id === route.params.postId);
  return (
    <View>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;

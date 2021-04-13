import React from "react";
import { View, Text, FlatList } from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post/index";

const SearchResultScreen = (props) => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post post={item} />}
      ></FlatList>
    </View>
  );
};

export default SearchResultScreen;

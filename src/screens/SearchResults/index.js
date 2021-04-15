import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

import feed from "../../../assets/data/feed";
import Post from "../../components/Post/index";
const SearchResultScreen = (props) => {
  const [posts, setPosts] = useState([]);
  const { guests } = props;
  // console.warn(guests);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: {
                ge: guests,
              },
            },
          })
        );
        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <Text>Your Post : {posts[0] ? posts[0].title : "empty"}</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      ></FlatList>
    </View>
  );
};

export default SearchResultScreen;

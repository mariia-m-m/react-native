import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { authSignOut } from "../redux/auth/authOperations";
import { db } from "../firebase/config";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };

  const signOut = () => {
    dispatch(authSignOut());
  };

  return (
    <View style={styles.container}>
      <Button style={styles.btn} title="signOut" onPress={signOut} />
      <View>
        <FlatList
          data={userPosts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 200 }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    marginTop: 50,
  },
});

export default ProfileScreen;

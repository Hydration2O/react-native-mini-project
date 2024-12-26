import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyProfile from "./ProfileData";

const ProfilePage = () => {
  const navigation = useNavigation();
  const [profileCopy, setProfileCopy] = useState({ ...MyProfile });
  useEffect(() => {
    setProfileCopy({ ...MyProfile });
  }, [MyProfile]);
  return (
    <View>
      <Image
        source={{
          uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fart.ngfiles.com%2Fimages%2F2361000%2F2361628_umberman_plimbo-male.jpg%3Ff1645240449&f=1&nofb=1&ipt=f1e262ffeec6bb2e7eaf4d10ae532ef8c9a484f85c4da25109320a704afd70be&ipo=images",
        }}
        width={"45%"}
        height={130}
      />
      <Text>Name:{profileCopy.name}</Text>
      <Text>Networth:{profileCopy.networth}</Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          navigation.navigate("ProfileEditPage");
        }}
      />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});

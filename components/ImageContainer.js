import { FlatList, StyleSheet, View } from "react-native";
import ImageView from "./ImageView";

function ImageContainer(props) {
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={props.photos}
        alwaysBounceVertical={false}
        numColumns={4}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={(itemData) => {
          return (
            <ImageView imageUri={itemData.item.uri} />
          );
        }}
      />
    </View>
  );
}

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 11,
    width: "100%",
  },
});

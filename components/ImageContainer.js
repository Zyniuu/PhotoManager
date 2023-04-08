import { StyleSheet, View } from "react-native";

function ImageContainer(props) {
  return <View style={styles.imageContainer}>{props.children}</View>;
}

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 11,
    width: "100%",
  },
});

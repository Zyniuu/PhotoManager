import { Image, Pressable, StyleSheet } from "react-native";

function ImageButton(props) {
  return (
    <Pressable onPress={props.onShowCamera} android_ripple={{ color: "#f8f1e9" }} style={styles.btn}>
      <Image
        style={styles.image}
        source={require("../assets/images/camera.png")}
      />
    </Pressable>
  );
}

export default ImageButton;

const styles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
  },

  btn: {
    height: "100%",
    width: "17%",
    justifyContent: "center",
    alignItems: "center",
  },
});

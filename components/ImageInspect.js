import {
  Modal,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

function ImageInspect(props) {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onCloseImageScreen}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={props.onCloseImageScreen}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{ uri: props.imageUri }}
          resizeMode="contain"
        />
      </View>
    </Modal>
  );
}

export default ImageInspect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 30,
  },
  closeButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
  },
  closeButtonText: {
    fontWeight: "bold",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

import { StyleSheet, View } from "react-native";
import CameraView from "./CameraView";
import ImageButton from "./ImageButton";
import { useState } from "react";

function NavigationBar(props) {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showCameraViewHandler() {
        setModalIsVisible(true);
    }

    function closeCameraViewHandler() {
        setModalIsVisible(false);
    }

  return (
    <View style={styles.navigationBar}>
        <CameraView visible={modalIsVisible} onCloseCamera={closeCameraViewHandler} />
      <ImageButton onShowCamera={showCameraViewHandler} />
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  navigationBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c84648",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

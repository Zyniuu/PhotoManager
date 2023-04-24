import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity
  } from "react-native";
  import ImageInspect from "./ImageInspect";
  import { useState } from "react";
   
  function ImageView(props) {
    const [modalIsVisible, setModalIsVisible] = useState(false);
   
    function showImageScreenHandler() {
      setModalIsVisible(true);
    }
   
    function closeImageScreenHandler() {
      setModalIsVisible(false);
    }
   
    return (
      <View style={styles.imageView}>
        <ImageInspect
          visible={modalIsVisible}
          onCloseImageScreen={closeImageScreenHandler}
          imageUri={props.imageUri} // przekazanie informacji o zdjęciu do komponentu ImageInspect
        />
        <TouchableOpacity onPress={showImageScreenHandler}>
          <Image style={styles.image} source={{ uri: props.imageUri }} />
        </TouchableOpacity>
      </View>
    );
  }
   
  export default ImageView;
   
  const styles = StyleSheet.create({
    imageView: {
      height: 100,
      width: "24%",
      margin: "0.5%",
    },
    image: {
      height: "100%",
      width: "100%",
    },
  });
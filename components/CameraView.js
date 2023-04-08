import { useEffect, useRef, useState } from "react";
import { Modal, StyleSheet, View, Text, Pressable } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

function CameraView(props) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() =>{
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  }
  else if(!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  if (hasMediaLibraryPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  }
  else if(!hasMediaLibraryPermission) {
    return <Text>Permission for media not granted. Please change this in settings.</Text>
  }

  async function takePic() {
    let options = {
      quality: 1,
      bas64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }

  if (photo) {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
      props.onCloseCamera();
    });
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <Camera style={styles.cameraView} ref={cameraRef}>
        <Pressable android_ripple={{color: 'white'}} style={styles.btnOut} onPress={takePic}>
          <View style={styles.btnIn}></View>
        </Pressable>
      </Camera>
    </Modal>
  );
}

export default CameraView;

const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  btnOut: {
    padding: 7,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 30,
    borderRadius: 30,
  },

  btnIn: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: 'white'
  }
});

import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppContainer from "./components/AppContainer";
import ImageContainer from "./components/ImageContainer";
import NavigationBar from "./components/NavigationBar";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  const [photosArray, setPhotosArray] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    const images = [];
    let assets = await MediaLibrary.getAssetsAsync();

    do {
      assets.assets.map(elem => {
        images.push({id: elem.id, uri: elem.uri, creationTime: elem.creationTime});
      });
      assets = await MediaLibrary.getAssetsAsync({after: assets.endCursor});
    } while(assets.hasNextPage);

    images.sort((a, b) => {
      return b.creationTime - a.creationTime;
    });

    setPhotosArray(images);
  }

  return (
    <>
      <StatusBar style="auto" />
      <AppContainer>
        <ImageContainer photos={photosArray}></ImageContainer>
        <NavigationBar loadPictures={getPhotos} />
      </AppContainer>
    </>
  );
}
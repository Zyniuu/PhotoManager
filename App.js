import AppContainer from "./components/AppContainer";
import ImageContainer from "./components/ImageContainer";
import NavigationBar from "./components/NavigationBar";
import ImageButton from "./components/ImageButton";

export default function App() {
  return (
    <AppContainer>
      <ImageContainer></ImageContainer>
      <NavigationBar />
    </AppContainer>
  );
}

import { StyleSheet, View } from "react-native";

function AppContainer(props) {
  return <View style={styles.appContainer}>{props.children}</View>;
}

export default AppContainer;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f8f1e9",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30
  },
});

import { Image, StyleSheet } from "react-native";

function ImageView(props) {
    return (
        <Image style={styles.image} source={{uri: props.imageUri}} />
    );
}

export default ImageView;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: '24%',
        margin: '0.5%'
    }
});
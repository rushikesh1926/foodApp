import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTitle({title,color,onPress}){
    return (
        <View style={[styles.gridItem,{backgroundColor:color}]}>
            <Pressable style={styles.button} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    }
})
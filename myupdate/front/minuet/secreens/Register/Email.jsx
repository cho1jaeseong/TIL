import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { GlobalColor } from "../../util/colors";

const Email = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.text}>
                    패스워드를 입력해주세요
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="패스워드" style={styles.inputText} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable>
                    <View>
                        <Text>
                            확인
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#000", // 언더바의 색상을 지정합니다.
        width: "90%", // TextInput 컴포넌트의 너비를 조정합니다.
        marginTop: 20, // 위쪽 여백을 지정합니다.
    },
    inputText: {
        fontSize: 16,
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 16
    },
    middleContainer: {
        flex: 2,
        paddingLeft: 16,
        alignContent: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
});

export default Email;

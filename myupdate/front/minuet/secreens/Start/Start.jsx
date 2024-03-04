import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { GlobalColor } from "../../util/colors";

const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.text}>
                    뉴스의 모든것
                </Text>
                <Text style={styles.text}>
                    Minuet에서 간편하게
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.middleText}>
                    Minuet는 다양합니다.
                </Text>
                <Text style={styles.middleText}>
                    <Text style={{ color: GlobalColor.colors.primary_red }}>100,000만 건</Text>의 뉴스를 요약된 <Text style={{ color: GlobalColor.colors.primary_red }}>1건</Text>의 뉴스로
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <View>
                        <Text style={styles.whiteText}>
                            로그인
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Email')}>
                    <View>
                        <Text style={styles.whiteText} >
                            회원가입
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
        fontSize: 30,
        fontWeight: "bold",
    },
    middleText: {
        fontSize: 16,
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#000", // 언더바의 색상을 지정합니다.
        width: "80%", // TextInput 컴포넌트의 너비를 조정합니다.
        marginTop: 20, // 위쪽 여백을 지정합니다.
    },
    inputText: {
        fontSize: 16,
    },
    upperContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 16
    },
    middleContainer: {
        flex: 2,
        paddingLeft: 16
    },
    bottomContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,

    },
    button: {
        backgroundColor: GlobalColor.colors.primary_black,
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: 'white',
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Start;

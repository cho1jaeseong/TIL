import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView } from "react-native";
import { GlobalColor } from "../../util/colors";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(false);

    // 이메일 유효성 검사 함수
    const validateEmail = (text) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setIsValidEmail(regex.test(text));
        setEmail(text);
    }
    // 비밀번호 유효성 검사 함수
    const validatePassword = (text) => {
        // 비밀번호는 최소 6자 이상이고, 특수 문자를 포함해야 합니다.
        const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        setIsValidPassword(regex.test(text));
        setPassword(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.text}>
                    로그인 해주세요
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="이메일" style={styles.inputText} value={email} onChangeText={(e) => validateEmail(e)} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="패스워드" style={styles.inputText} value={password} onChangeText={(e) => validatePassword(e)} secureTextEntry={true} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                {email && password ?                 
                    <>                
                        {isValidEmail && isValidPassword ?
                            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                                <View>
                                    <Text style={styles.whiteText} >
                                        확인
                                    </Text>
                                </View>
                            </Pressable>
                            :
                            <Text>
                                이메일 혹은 비밀번호가 유효하지 않습니다.
                            </Text>
                        }
                    </>
                :
                <></>
                }
            </View>
            <StatusBar style="light"/>
        </SafeAreaView>
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
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 32
    },
    middleContainer: {
        flex: 1,
        paddingLeft: 32,
        alignContent: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 1,
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

export default Login;

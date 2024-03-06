import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { GlobalColor } from "../../util/colors";
import { useDispatch } from "react-redux";
import { setCreateUserDetails } from "../../store/createUserSlice";

const UserDetails = ({ navigation }) => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [birthdate, setBirthdate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const dispatch = useDispatch();

    const createUserDetails = () => {
        dispatch(setCreateUserDetails({ name, gender, birthdate: birthdate.toISOString() }));
        navigation.navigate('Home');
    }

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setBirthdate(selectedDate);
        }
    };

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.text}>
                    회원 정보를 입력해주세요
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="이름"
                        style={styles.inputText}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>성별</Text>
                    <View style={styles.genderContainer}>
                        <View style={styles.radioContainer}>
                            <Text style={styles.radioLabel}>남성</Text>
                            <Pressable
                                style={[styles.radioButton, { backgroundColor: gender === 'male' ? '#ccc' : 'white' }]}
                                onPress={() => setGender('male')}
                            />
                        </View>
                        <View style={styles.radioContainer}>
                            <Text style={styles.radioLabel}>여성</Text>
                            <Pressable
                                style={[styles.radioButton, { backgroundColor: gender === 'female' ? '#ccc' : 'white' }]}
                                onPress={() => setGender('female')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>생년월일</Text>
                    <Pressable style={styles.datePickerButton} onPress={openDatePicker}>
                        <Text style={styles.datePickerText}>{birthdate.toISOString().split('T')[0]}</Text>
                    </Pressable>
                    {showDatePicker && (
                        <DateTimePicker
                            value={birthdate}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.button} onPress={createUserDetails}>
                    <Text style={styles.whiteText}>확인</Text>
                </Pressable>
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
        marginVertical: 10,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputText: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 32,
        paddingBottom: 20,
    },
    middleContainer: {
        flex: 3,
        paddingHorizontal: 32,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: GlobalColor.colors.primary_black,
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    genderContainer: {
        flexDirection: 'row',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioLabel: {
        marginRight: 5,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
    },
    datePickerButton: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    datePickerText: {
        fontSize: 16,
        paddingVertical: 10,
    },
});

export default UserDetails;

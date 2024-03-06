import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../store/testSlice';

const Home = ({navigation}) => {
    
    const dispatch = useDispatch()
    const testValue = useSelector(state => state.test)
    const createUserInfo = useSelector(state => state.createUser)
    console.log(createUserInfo)

    return (
        <View>
            <Text>
                Home, {testValue.value? 'ture' : 'false'}
            </Text>
            <Button 
                title='Go to Test'
                onPress={() => navigation.navigate('Test')}
            />
            <Button
                title='Value Change'
                onPress={() => dispatch(changeValue())}
            />
        </View>
    )
}

export default Home
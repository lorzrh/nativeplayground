import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View
            style={{
                backgroundColor: '#F4CE14',
                marginBottom:20,
            }}>
            <Text
                style={{
                    color: 'black',
                    textAlign: 'center',
                }}>
                All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}
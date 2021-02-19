import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Button,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
    const units = [
        { name: "건담", model: "RX-78-2" }, 
        { name: "자쿠II", model: "MS-06F"},
        { name: "건탱크", model: "RX-75"}, 
        { name: "건캐논", model: "RX-77-2"},
    ]
    
    const onClick = (item) => {
        alert(item.name + " " + item.model)
    }
    
    const renderItem = ({item}) => {
        return (
            <TouchableWithoutFeedback onPress={() => onClick(item)}>
                <View style={styles.item}
                    onPress={() => alert('Press')}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.model}>{item.model}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Button title="눌러주세요"
          onPress={() => alert('눌렸습니다')}/>
      <FlatList 
        data={units}
        keyExtractor={(item) => item.model}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
        padding: 8,
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around', // row 방향에 대해 균등하게 배치
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 8,
        padding: 10,
        
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset: {
                 width: 0,
                 height: 3,
                }
            },
            android: {
                elevation: 3,
            }
        })
    },
    name: {
        flex: 2,
        fontWeight: 'bold',
    },
    model: {
        flex: 1,
        marginLeft: 8,
        padding: 8,
        textAlign: 'center',
        color: 'darkblue',
    }
});

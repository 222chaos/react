/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import TodoListItem from './RecipeTitle';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
function App(): JSX.Element {
  function change() {
    setTodo([...todo, value1]);
    onChangeText1('');
  }
  function onDelete(index: any) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  function swapItem(index1: any, index2: any) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo([...todo]);
  }
  const [todo, setTodo] = useState<Array<any>>([]);
  const [value1, onChangeText1] = React.useState('');
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: '#e6f7ff',
        height: screenHeight + 20,
        width: screenWidth,
      }}>
      <View>
        <Text
          style={{
            fontStyle: 'italic',
            padding: 5,
            color: '#1890ff',
            top: 10,
            left: 10,
            fontSize: 24,
          }}>
          Todo 🍅
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <ScrollView
          style={{
            position: 'relative',
            top: 15,
          }}>
          <View
            style={{
              position: 'relative',
              right: 295,
              width: 80,
              flexWrap: 'wrap',
              display: 'flex',
            }}>
            {todo.map((item, index) => {
              return (
                <TodoListItem
                  content={item}
                  splitLine={index % 5 === 0}
                  onDelete={onDelete}
                  index={index}
                  swapItem={swapItem}
                  change={change}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'relative',
          width: 290,
          left: screenWidth / 48,
          top: 30,
        }}>
        <TextInput
          style={{
            height: 48,
            borderRadius: 4,
            backgroundColor: '#bae7ff',
            color: 'black',
          }}
          multiline
          numberOfLines={4}
          onChangeText={(text: any) => onChangeText1(text)}
          value={value1}
        />
      </View>
      <View
        style={{
          borderRadius: 4,
          backgroundColor: '#1190ff',
          height: 48,
          width: 65,
          left: (screenWidth * 7) / 9,
          top: -18,
        }}></View>

      <View
        style={{
          position: 'relative',
          width: 40,
          left: (screenWidth * 9) / 11,
          top: -52,
        }}>
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={'#69c0ff'}
          onPress={() => {
            change();
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 14,
            }}>
            Push
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default App;

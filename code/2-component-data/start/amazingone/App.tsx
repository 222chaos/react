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
      <View style={{}}>
        <View>
          <Text
            style={{
              fontStyle: 'italic',
              padding: 5,
              color: '#1890ff',
              top: 10,
              left: 10,
              fontSize: 32,
            }}>
            Todo🍅
          </Text>
        </View>
        <ScrollView
          style={{
            position: 'relative',
            top: 30,
            height: 520,
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
        <View
          style={{
            position: 'relative',
            width: 360,
            left: 8,
            top: 70,
          }}>
          <TextInput
            style={{
              //
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
            position: 'relative',
            width: 70,
            left: 300,
            top: 70,
          }}>
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={'#1aaf00'}
            onPress={() => {
              change();
            }}>
            <Text
              style={{
                color: '#69c0ff',
                fontSize: 30,
              }}>
              Push
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
export default App;

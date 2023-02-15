/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {View, Button, TextInput, Text, Dimensions} from 'react-native';

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
  //Math.floor((total + pagesize - 1) / pagesize));
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: 'papayawhip',
        height: screenHeight + 20,
        width: screenWidth,
      }}>
      <View style={{}}>
        <View>
          <Text
            style={{
              fontStyle: 'italic',
              padding: 5,
              color: 'purple',
              top: 10,
              left: 10,
              fontSize: 50,
            }}>
            Todo🍅
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            width: 370,
            top: 680,
            backgroundColor: value1,
            borderBottomColor: '#000000',
          }}>
          <TextInput
            style={{
              backgroundColor: 'oldlace',
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
            width: 370,
            left: 5,
            top: 700,
          }}>
          <Button
            title="OK"
            onPress={() => {
              change();
            }}
          />
        </View>
        <View style={{position: 'absolute', right: 55, top: 100}}>
          <Text
            style={{
              lineHeight: 20,
              position: 'absolute',
              textAlign: 'right',
              right: 5,
              width: 80,
              flexWrap: 'wrap',
              display: 'flex',
            }}>
            {todo.map((item, index) => {
              return (
                <View>
                  <TodoListItem
                    content={item}
                    splitLine={(index + 1) % 5 === 0}
                    onDelete={onDelete}
                    index={index}
                    swapItem={swapItem}
                    change={change}
                  />
                </View>
              );
            })}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {View, Button, TextInput, Text} from 'react-native';

import TodoListItem from './RecipeTitle';

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
    <View style={{padding: 10}}>
      <View>
        <View>
          <Text
            style={{
              fontSize: 30,
            }}>
            Todo
          </Text>
        </View>
        <View
          style={{
            backgroundColor: value1,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={(text: any) => onChangeText1(text)}
            value={value1}
          />
        </View>
        <Button
          title="OK"
          onPress={() => {
            change();
          }}
        />
        <View>
          <Text
            style={{
              lineHeight: 60,
              position: 'absolute',
              textAlign: 'right',
              right: 50,
              width: 100,
              flexWrap: 'wrap',
              display: 'flex',
              flexDirection: 'row',
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

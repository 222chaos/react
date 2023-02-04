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
    setTodo([...todo, state]);
    updateState('');
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
  const [state, updateState] = useState<any>('');
  const [value1, onChangeText1] = React.useState('');
  //Math.floor((total + pagesize - 1) / pagesize));
  return (
    <View>
      <Text>
        <Text>Todo</Text>
        <TextInput onChangeText={text => onChangeText1(text)} value={value1} />
        <Button
          title="Orz"
          onPress={() => {
            change();
          }}
        />
        <View>
          <Text>
            <View>
              <Text>{state}</Text>
            </View>
            {todo.map((item, index) => {
              return (
                <TodoListItem
                  content={item}
                  splitLine={(index + 1) % 5 === 0}
                  onDelete={onDelete}
                  index={index}
                  swapItem={swapItem}
                  change={change}
                />
              );
            })}
          </Text>
        </View>
      </Text>
    </View>
  );
}
export default App;

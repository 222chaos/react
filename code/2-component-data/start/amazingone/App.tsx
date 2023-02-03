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
  const [state, updateState] = useState<any>('0');
  const [stateTitle, updateStateTitle] = useState<any>('im title');
  const [stateDesc, updateStateDesc] = useState<any>('im desc');
  const [clickPageNum, setClickPageNum] = useState<any>(1);
  let total = 0;
  const [todo1, setTode] = useState(() => {
    const todoList = [1];
    return todoList;
  });
  const [value1, onChangeText1] = React.useState('0');
  const [value2, onChangeText2] = React.useState('im title');
  const [value3, onChangeText3] = React.useState('im desc');
  let pagesize = 5;
  const [pageNum] = useState<any>(() => {
    let i = (total + pagesize - 1) / pagesize;
    while (1) {
      if (i % 1 === 0) {
        return i;
      } else {
        total = total - 1;
        i = (total + pagesize - 1) / pagesize;
      }
    }
  });

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
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangeText2(text)}
          value={value2}
        />
        <Button
          title="Title"
          onPress={() => {
            if (stateDesc === '') {
              return;
            }
            setTode([...todo1, {title: stateTitle, desc: stateDesc}]);
            updateStateTitle('');
            onChangeText2('');
            updateStateDesc('');
            onChangeText3('');
          }}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => onChangeText3(text)}
          value={value3}
        />
        <Button
          title="Desc"
          onPress={() => {
            if (stateTitle === '') {
              return;
            }
            setTode([...todo1, {title: stateTitle, desc: stateDesc}]);
            updateStateDesc('');
            onChangeText3('');
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
            {todo1.map((obj, index) => {
              if (
                index > (clickPageNum - 1) * pagesize - 1 &&
                index < clickPageNum * pagesize
              ) {
                return (
                  <View>
                    <Text>
                      <View>
                        <Text>{obj.title}</Text>
                      </View>
                      <View>
                        <Text>{obj.desc}</Text>
                      </View>
                      <Text>......</Text>
                    </Text>
                  </View>
                );
              }
            })}
            {new Array(pageNum).fill(null).map((_, index) => {
              return (
                <Button
                  title="{index + 1}"
                  color={index !== clickPageNum - 1 ? 'white' : 'red'}
                  onPress={() => {
                    setClickPageNum(index + 1);
                  }}
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

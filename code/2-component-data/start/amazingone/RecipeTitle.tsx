import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function TodoListItem(props: any) {
  const hover = 1;
  const [descState, updatedescState] = useState<string>('1');
  const [desctodo, setdescTodo] = useState<Array<string>>([]);
  const [value1, onChangeText1] = React.useState('0');
  function descChange() {
    setdescTodo([...desctodo, descState]);
    updatedescState('');
  }
  return (
    <View>
      <Text>
        <View>
          <Text>{props.content}</Text>
        </View>
        <View>
          <Text style={{}}>
            <Text> </Text>
            {hover === 1 ? (
              <Button
                title="↑"
                onPress={() => {
                  props.swapItem(props.index - 1, props.index);
                }}
              />
            ) : null}
            <Text> </Text>
            {hover === 1 ? (
              <Button
                title="↓"
                onPress={() => {
                  props.swapItem(props.index, props.index + 1);
                }}
              />
            ) : null}
            <Text> </Text>
            {hover === 1 ? (
              <Button
                title="×"
                onPress={() => {
                  props.onDelete(props.index);
                }}
              />
            ) : null}
            <Text> </Text>
            {hover === 1 ? (
              <TextInput
                onChangeText={text => onChangeText1(text)}
                value={value1}
              />
            ) : null}
            <Text> </Text>
            {hover === 1 ? (
              <Button
                title="Orz"
                onPress={() => {
                  console.log(desctodo);
                  descChange();
                }}
              />
            ) : null}
            <Text> </Text>
          </Text>
        </View>
        {desctodo.map((item, _) => (
          <View>
            <Text>{item}</Text>
          </View>
        ))}
      </Text>
      <View>
        {props.splitLine ? (
          <Text
            style={{
              fontSize: 30,
            }}>
            …………
          </Text>
        ) : null}
      </View>
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)

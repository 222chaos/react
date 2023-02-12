import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
function TodoListItem(props: any) {
  const hover = 1;
  const [desctodo, _] = useState<Array<string>>([]);
  const [value1, onChangeText1] = React.useState('0');
  return (
    <View>
      <View style={{paddingTop: 10}}>
        <Text
          style={{
            height: 0,
            width: '100%',
            borderWidth: 0.5,
            borderColor: '#EEE',
            borderStyle: 'solid',
          }}>
          --------------------------------------------
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: 'black',
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            {props.content}
          </Text>
        </View>
        <View style={{position: 'absolute', left: 160, top: 10}}>
          <Text>
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
          </Text>
        </View>
        {desctodo.map((item, _) => (
          <View>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
      <View style={{}}>
        <Text
          style={{
            height: 0,
            width: '100%',
            borderWidth: 0.5,
            borderColor: '#EEE',
            borderStyle: 'solid',
          }}>
          --------------------------------------------
        </Text>
      </View>
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)

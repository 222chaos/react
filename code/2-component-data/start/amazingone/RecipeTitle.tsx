import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
function TodoListItem(props: any) {
  const hover = 1;
  const [desctodo, _] = useState<Array<string>>([]);
  const [value1, onChangeText1] = React.useState('0');
  return (
    <View style={{}}>
      <View
        style={{
          padding: 2,
          backgroundColor: 'silver',
        }}>
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            {props.content}
          </Text>
        </View>
        <View style={{position: 'absolute', left: 220, top: 10}}>
          <Text> </Text>
          {hover === 1 ? (
            <View style={{position: 'absolute', top: 100}}>
              <View>
                <Button
                  title="↑"
                  onPress={() => {
                    props.swapItem(props.index - 1, props.index);
                  }}
                />
              </View>
            </View>
          ) : null}
          <Text> </Text>
          {hover === 1 ? (
            <View style={{position: 'relative', top: 10}}>
              <Button
                title="↓"
                onPress={() => {
                  props.swapItem(props.index, props.index + 1);
                }}
              />
            </View>
          ) : null}
          <Text> </Text>
          {hover === 1 ? (
            <View style={{width: 40, height: 40}}>
              <Button
                title="×"
                onPress={() => {
                  props.onDelete(props.index);
                }}
              />
            </View>
          ) : null}
          <Text> </Text>
          {hover === 1 ? (
            <TextInput
              onChangeText={text => onChangeText1(text)}
              value={value1}
            />
          ) : null}
          <Text> </Text>
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
            width: '80%',
            borderWidth: 0.18182,
            borderColor: 'rgba(255, 255, 255, 0.18182)',
            borderStyle: 'solid',
          }}>
          -----------------------------------------------------
        </Text>
      </View>
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)

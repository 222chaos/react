import React, {useState} from 'react';
import {Button, Text, TextInput, View, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
function TodoListItem(props: any) {
  const hover = 1;
  const [desctodo, _] = useState<Array<string>>([]);
  const [value1, onChangeText1] = React.useState('0');
  return (
    <View>
      <Text
        style={{
          padding: 10,
          backgroundColor: 'black',
          height: screenHeight + 999,
          width: screenWidth + 999,
        }}>
        <View>
          <Text>{props.content}</Text>
          <Text
            style={{
              height: 0,
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#EEE',
              borderStyle: 'dashed',
            }}>
            123
          </Text>
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
          </Text>
        </View>
        {desctodo.map((item, _) => (
          <View>
            <Text>{item}</Text>
          </View>
        ))}
      </Text>
      <View>
        <View
          style={{
            right: 250,
            height: 0,
            width: '3000%',
            borderWidth: 0.5,
            borderColor: '#EE',
            borderStyle: 'dashed',
          }}></View>
      </View>
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)

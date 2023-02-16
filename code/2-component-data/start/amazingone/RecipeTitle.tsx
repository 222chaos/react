import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
function TodoListItem(props: any) {
  const hover = 1;
  return (
    <View style={{}}>
      <View
        style={{
          padding: 2,
          backgroundColor: 'silver',
        }}>
        <View
          style={{
            padding: 16,
            left: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontStyle: 'italic',
              color: 'black',
            }}>
            {props.content}
          </Text>
        </View>
        <View style={{position: 'absolute', top: 8}}>
          <View style={{left: 10, height: 18, width: 28}}>
            <Text>——</Text>
          </View>
          {hover === 1 ? (
            <View style={{}}>
              <View
                style={{
                  position: 'absolute',
                  top: -8,
                  left: 7.5,
                  height: 30,
                  width: 20,
                }}>
                <TouchableHighlight
                  activeOpacity={0.9}
                  underlayColor={'#1aaf00'}
                  onPress={() => {
                    props.swapItem(props.index - 1, props.index);
                  }}>
                  <Text style={{fontSize: 20}}>↑</Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : null}
          <Text> </Text>
          {hover === 1 ? (
            <View
              style={{
                position: 'absolute',
                top: 2,
                left: 330,
                width: 18,
              }}>
              <TouchableHighlight
                activeOpacity={0.9}
                underlayColor={'#1aaf00'}
                onPress={() => {
                  props.onDelete(props.index);
                }}>
                <Text style={{fontSize: 30}}>×</Text>
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            height: 0,
            width: '100%',
            borderWidth: 0.18182,
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderStyle: 'solid',
          }}>
          ------------------------------------------------------------------
        </Text>
      </View>
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)

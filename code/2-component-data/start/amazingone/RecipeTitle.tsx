/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
function TodoListItem(props: any) {
  const hover = 1;
  return (
    <View style={{}}>
      <View
        style={{
          left: 298,
          height: 48,
          padding: 4,
          backgroundColor: 'rgba(186,231,255,0.8)',
          borderRadius: 4,
        }}>
        <View
          style={{
            padding: 7,
            left: 30,
            top: 4,
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
        <View style={{backgroundColor: '', position: 'relative', top: -36}}>
          <View style={{left: 10, height: 18, width: 28}}>
            <Text style={{color: '#69c0ff'}}>——</Text>
          </View>
          {hover === 1 ? (
            <View style={{}}>
              <View
                style={{
                  position: 'relative',
                  top: -8,
                  left: 7.5,
                  height: 30,
                  width: 20,
                }}>
                <TouchableHighlight
                  activeOpacity={0.9}
                  underlayColor={'#bae7ff'}
                  onPress={() => {
                    props.swapItem(props.index, 0);
                  }}>
                  <Text style={{fontSize: 20, color: '#69c0ff'}}>↑</Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : null}
          <Text> </Text>
          {hover === 1 ? (
            <View
              style={{
                position: 'relative',
                top: -65,
                left: 330,
                width: 18,
              }}>
              <TouchableHighlight
                activeOpacity={0.9}
                underlayColor={'#bae7ff'}
                onPress={() => {
                  props.onDelete(props.index);
                }}>
                <Text style={{fontSize: 30, color: '#69c0ff'}}>×</Text>
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            padding: 4,
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

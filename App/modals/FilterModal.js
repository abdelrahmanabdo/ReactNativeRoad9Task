import React, {Component} from 'react';
import { Text, TouchableOpacity, View ,Dimensions } from 'react-native';
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {AirbnbRating} from 'react-native-ratings';
import RangeSlider from 'react-native-range-slider'


const windowWidth = Dimensions.get('window').width;
export default class FilterModal extends Component {
  constructor(props){
      super(props);
      this.state = {
        providerName : '' ,
        rating : 0,
        rangeLow : 0,
        rangeHigh : 10000
      }
  }
  render() {
    return (
    <Modal
       isVisible={this.props.showModal}
       style = {{alignItems : 'center' , justifyContent : 'center'}}>
      <View style={{width : windowWidth - 50 , height : 450 , backgroundColor : '#fff' , borderRadius : 10, padding :20 }}>
          <View style = {{flex:1 , flexDirection : 'column' , justifyContent: 'center' , alignItems : 'center' ,
                          borderBottomWidth : .5 , borderBottomColor : 'gray'}}>
            <View style={{flex : 1, flexDirection :'row' , justifyContent : 'space-between' ,
                          width : '100%'
                          }}>
                <Text style={{fontSize : 20 , fontWeight : 'bold'}}>
                  Filter
                </Text>
                <FontAwesome name="times"
                             color='#D1D3D4'
                             style={{fontSize : 20 }}/>
            </View>
            <View style={{flex:1,width:'100%'}}>
              <TextInput 
                  editable={true}
                  style={{ borderBottomWidth : .5 , borderBottomColor : 'gray'}}
                  maxLength={40}
                  placeholder='Service Provider Name'
                  placeholderTextColor="gray"
                  textAlign='left'
                  value={this.state.providerName}
                  onChangeText={(value)=>this.setState({ fullName: value})}                       
              />
            </View>
            <View style={{flex:1,width :'100%'}}>
              <Collapse>
                  <CollapseHeader >
                    <View style={{width:'100%' , height : 30 , flexDirection : 'row' , justifyContent : 'space-between'}}>
                      <Text style={{ fontSize : 19 , fontWeight : 'bold'}}>Rating</Text>
                      <FontAwesome name="chevron-down" style={{color : '#D1D3D4'}}/>
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                  <AirbnbRating
                    count={5}
                    defaultRating={5}
                    size={15}
                    showRating ={false}
                    onFinishRating={(rating)=>this.setState({rating}) }
                  />
                </CollapseBody>
              </Collapse>
            </View>
            <View style={{flex:1,width :'100%'}}>
            <Collapse>
                <CollapseHeader >
                  <View style={{width:'100%' , height : 30 , flexDirection : 'row' , justifyContent : 'space-between'}}>
                    <Text style={{ fontSize : 19 , fontWeight : 'bold'}}>Price Range</Text>
                    <FontAwesome name="chevron-down" style={{color : '#D1D3D4'}}/>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                <RangeSlider
                  minValue={0}
                  maxValue={100}
                  tintColor={'#da0f22'}
                  handleBorderWidth={1}
                  handleBorderColor="#454d55"
                  selectedMinimum={20}
                  selectedMaximum={40}
                  style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
                  onChange={ (data)=>{ console.log(data);} }
                />
              </CollapseBody>
            </Collapse>
            </View>
          </View>
          <TouchableOpacity  onPress={this.props.onPress} 
                             style={{bottom:0 , height : 80 ,
                                     justifyContent: 'center',alignItems:'center'  
                                    }}>
              <Text style={{ fontSize : 23 , fontWeight : 'bold' ,color : '#17F1D7'}}>Filter</Text>
          </TouchableOpacity>
      </View>
    </Modal>
    )
  }
}
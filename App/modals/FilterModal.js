import React, {Component} from 'react';
import { Text, TouchableOpacity, View ,Dimensions } from 'react-native';

//3rd party modules
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {AirbnbRating} from 'react-native-ratings';
import RangeSlider from 'rn-range-slider';

//Window Dimensions
const windowWidth = Dimensions.get('window').width;
export default class FilterModal extends Component {
  constructor(props){
      super(props);
      this.state = {
        providerName : '' ,
        rating :  5,
        rangeLow : 0,
        rangeHigh : 10000
      }
  }

  render() {
    return (
    <Modal
       isVisible={this.props.showModal}
       style = {{alignItems:'center', justifyContent:'center'}}>
      <View style={{width:windowWidth - 50 , height:400 , backgroundColor:'#fff' , borderRadius : 10, padding :20 }}>
          <View style={{flex:1 , flexDirection : 'column' , justifyContent: 'center' , alignItems : 'center' ,
                        borderBottomWidth : .5 , borderBottomColor : '#D1D3D4'}}>
            <View style={{
                          flex : 1, flexDirection :'row' ,
                          justifyContent : 'space-between',width : '100%'
                        }}>
                <Text style={{fontSize : 20 , fontWeight : 'bold'}}>
                  Filter
                </Text>
                <TouchableOpacity
                  onPress={this.props.onPress}
                >
                 <FontAwesome name="times"
                              color='#D1D3D4'
                              style={{fontSize : 20 }}/>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,width :'100%'}}>
              <TextInput 
                  editable={true}
                  style={{ borderBottomWidth : .5 , borderBottomColor : 'gray',padding :10}}
                  maxLength={40}
                  placeholder='Service Provider Name'
                  placeholderTextColor="gray"
                  textAlign='left'
                  value={this.state.providerName}
                  onChangeText={(value)=>this.setState({ providerName: value})}                       
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
                      defaultRating={this.state.rating}
                      size={15}
                      showRating ={false}
                      onFinishRating={(rating)=>this.setState({rating : rating}) }
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
                  gravity={'center'}
                  min={200}
                  style={{ margin : 0 }}
                  max={1000}
                  step={0}
                  labelStyle = 'none'
                  valueType='number'
                  selectionColor="#3df"
                  blankColor="#f618"
                  onValueChanged={(low,high) => {
                      this.setState({rangeLow: low, rangeHigh: high})
                  }}/>     
              </CollapseBody>
            </Collapse>
            </View>
          </View>
          <TouchableOpacity  onPress={()=>this.props.onPress({rating : this.state.rating , providerName : this.state.providerName})} 
                             style={{bottom:0 , height : 70 ,
                                     justifyContent: 'center',alignItems:'center'  
                                    }}>
              <Text style={{ fontSize : 23 , fontWeight : 'bold' ,color : '#17F1D7'}}>Filter</Text>
          </TouchableOpacity>
      </View>
    </Modal>
    )
  }
}
import React, { Component } from 'react';
import { ScrollView , View , StyleSheet , Dimensions ,
         Text , Image ,StatusBar ,TouchableOpacity} from 'react-native';

//3rd party modules
import { SliderBox } from "react-native-image-slider-box";
import {AirbnbRating} from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
import Carousel from 'react-native-snap-carousel';

// Genric style
import genericStyles from '../assets/styles';

//Screen dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const SECTIONS = [
  {
    title: 'Terms And Conditions ',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
  },
];

class SingleService extends Component {
   constructor(props ) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
      ],
      otherServices : [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'A professional Cardio trainer with international skills',
          image : "https://source.unsplash.com/1024x768/?nature",
          rating : 3,
          profession : 'Trainer',
          price : '1,400',
          currency : "SAR"
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'No Pain no gain',
          image : "https://entrepreneurhandbook.co.uk/wp-content/uploads/2015/06/Online-business-idea-generation.jpg",
          rating : 2,
          profession : 'Trainer',
          price : '2,400',
          currency : "SAR"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          image : "https://image.shutterstock.com/image-photo/customer-service-team-support-care-260nw-373731340.jpg",
          rating : 5,
          profession : 'Trainer',
          price : '3,500',
          currency : "SAR"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e23d72',
          title: 'A Professional cardio Trainer with interional Skills',
          image : "https://image.shutterstock.com/image-photo/beautiful-female-operator-talking-on-260nw-1042300345.jpg",
          rating : 5,
          profession : 'Trainer',
          price : '3,000',
          currency : "SAR"
        },
        {
          id: '58694a3f-3da1-471f-bd96-145571e29d72',
          title: 'Have Super intelligent good boy in less than 5 sessions',
          image : "https://source.unsplash.com/1024x768/?tree",
          rating : 4,
          profession : 'Trainer',
          price : '3,500',
          currency : "SAR"
        },
        {
          id: '58694a3f-33a1-471f-bd96-145571e29d72',
          title: 'No Pain no gain',
          image : "https://source.unsplash.com/1024x768/?water",
          rating : 2,
          profession : 'Trainer',
          price : '3,300',
          currency : "SAR"
        },
      ],
      activeSections: [0],
      service : {},
    };

  }

  static getDerivedStateFromProps(props, state) {
    var serviceData =  props.route.params.service;
    return {
       service : serviceData
    }
  }

  _renderSectionTitle = section => {
    return (<View></View>);
  };
 
  _renderHeader = section => {
    return (
      <View style={styles.collapseHeader}>
        <Text style={{color : 'gray',fontWeight : 'bold'}}>{section.title}</Text>
        <FontAwesome name="chevron-down" style={{color : '#D1D3D4'}}/>
      </View>
    );
  };
 
  _renderContent = section => {
    return (
      <View style={styles.collapseContent}>
        <Text>{section.content}</Text>
      </View>
    );
  };
 
  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('SingleService' ,{service : item})}
              style={styles.item}
              activeOpacity ={.8}
      >
        <Image style={styles.image} source={{uri : item.image }} />
          <View style={styles.content}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.profession}>{item.profession}</Text>
          <View style={{justifyContent :'flex-start' , alignItems : 'flex-start'}}>  
              <AirbnbRating
                    count={5}
                    defaultRating={4}
                    size={15}
                    showRating ={false}
              />
              <Text style={styles.price}>{item.price} {item.currency}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SliderBox 
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE" />
          <View style={[styles.section , styles.topSection]}>
              <View>
                <Text style={[genericStyles.blackText , genericStyles.boldText]}>
                  {this.state.service.title}
                </Text>
              </View>
              <View style={genericStyles.horizontalRow}>
                <AirbnbRating
                    count={5}
                    defaultRating={this.state.service.rating}
                    size={15}
                    showRating ={false}
                />
                <Text style={[genericStyles.grayText]}>100 Delivery orders</Text>
              </View>
              <View style={genericStyles.horizontalRow}>
                <Text style={[genericStyles.grayText]}>{this.state.service.profession}</Text>
                <Text style={[genericStyles.coloredText , genericStyles.boldText]}>{this.state.service.price} {this.state.service.currency} <Text style={{color : 'gray' , fontWeight : 'normal',fontSize : 15}}>/ Hour</Text></Text>
              </View>
              <View style={genericStyles.horizontalRow}>
                 <Text  style={[genericStyles.greenText , genericStyles.boldText]}>Active</Text>
              </View>
          </View>
          <View style={[styles.section , styles.details]}>
              <View style={genericStyles.verticalRow , { borderBottomWidth : .5 , borderBottomColor : '#BCBEC0'}}>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start', paddingVertical : 7 }]}>
                  <Image style={styles.userAvatar}
                         source={{uri : this.state.service.image}} />
                  <Text style={{marginHorizontal : 5 , fontSize : 17}}>Username</Text>
                </View>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start', paddingVertical : 7 }]}>
                    <FontAwesome  name="envelope" color="gray" style={styles.icon}/>
                    <Text>email@domain.com</Text>
                </View>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start', paddingVertical : 7 }]}>
                    <FontAwesome  name="phone" color="gray" style={styles.icon}/>
                    <Text>+201096742196</Text>
                </View>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start', paddingVertical : 7 }]}>
                    <FontAwesome  name="map-marker" color="gray"  style={styles.icon}/>
                    <Text> Jeddah , KSA</Text>
                </View>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start', paddingVertical : 7 }]}>
                    <Text style={[genericStyles.balackText , genericStyles.boldText , {fontSize : 18}]}>Speaks :  </Text>
                    <View style={genericStyles.wellText}>
                        <Text>English</Text>
                    </View>
                    <View style={genericStyles.wellText}>
                        <Text >Arabic</Text>
                    </View>
                </View>
                <View style={[genericStyles.horizontalRow , { justifyContent : 'center' ,margin: 15,}]}>
                    <Text style={[genericStyles.coloredText , genericStyles.boldText]}>MESSAGE PROVIDER</Text>
                </View>
              </View>
              <View style={genericStyles.verticalRow , { paddingBottom : 20 ,borderBottomWidth : .5 , borderBottomColor : '#BCBEC0'}}>
                <Text style={genericStyles.headingText}>Description</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              </View>
              <View style={genericStyles.verticalRow , { paddingBottom : 15 ,borderBottomWidth : .5 , borderBottomColor : '#BCBEC0'}}>
                    <Text style={genericStyles.headingText}>Languages</Text>
                    <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start'}] }>
                      <View style={genericStyles.wellText}>
                          <Text>English</Text>
                      </View>
                      <View style={genericStyles.wellText}>
                          <Text >Arabic</Text>
                      </View>            
                    </View>        
             </View>
             <Accordion
                  sections={SECTIONS}
                  activeSections={this.state.activeSections}
                  renderSectionTitle={this._renderSectionTitle}
                  renderHeader={this._renderHeader}
                  renderContent={this._renderContent}
                  onChange={this._updateSections}
                  containerStyle	 = {{paddingBottom : 15 ,borderBottomWidth : .5 , borderBottomColor : '#BCBEC0'}}
            />
            <View style={genericStyles.verticalRow , { paddingBottom : 15}}>
                    <Text style={genericStyles.headingText}>Reviews</Text>
                    <View style={[genericStyles.horizontalRow , { justifyContent : 'flex-start'}] }>
                      <View style={genericStyles.wellText}>
                          <Text>English</Text>
                      </View>
                      <View style={genericStyles.wellText}>
                          <Text >Arabic</Text>
                      </View>            
                    </View>        
             </View>
          </View>
          <View style={[styles.otherServices , {alignItems : 'flex-start'}]}>
            <Text style={[genericStyles.headingText , genericStyles.boldText , { fontSize : 22 ,color : '#1A2026' } ]}>OTHER SERVICES</Text>
          </View>
          <Carousel
                layout={'default'}
                ref={(c) => { this._carousel = c; }}
                data={this.state.otherServices}
                renderItem={this._renderItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                sliderHeight={0}
                firstItem = {0}
                containerCustomStyle={props => {
                  return {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor : 'red'
                  }
                }}
              />
          <TouchableOpacity 
                style={styles.requestServiceButton}
                onPress={()=> {}}
          >
            <Text style={[genericStyles.blackText,genericStyles.boldText ]}>REQUEST SERVICE</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default SingleService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"#fff",
  },
  section : {
    width : windowWidth - 20,
    borderWidth : 1,
    borderColor :'#E6E7E8' ,
    borderRadius : 15,
    margin : 10,
    padding :15 ,
    flexDirection:  'column'
  },
  topSection : {
    backgroundColor :"#F1F2F2",
    justifyContent: 'space-between',
    alignItems:'flex-start'
  },
  details : {
    justifyContent:'flex-start'
  },
  otherServices : {
    width : windowWidth - 20,
    paddingHorizontal :15 ,
  },
  userAvatar : {
    width: 35,
    height : 35,
    borderRadius : 50
  },  
  icon:{
    fontSize : 20,
    marginRight : 10
  },
  collapseHeader : {
    height : 30 ,
    flexDirection : 'row' ,
    justifyContent : 'space-between',
    alignItems: 'center',
    marginTop:15
  },
  collapseContent : {
    marginVertical : 10
  },  
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth : 1,
    borderColor :'#E6E7E8'
  },
  content:{
    flexDirection : "column",
    padding : 10,
  },
  rowContainer:{
    flexDirection :"row",
    justifyContent:'space-between',
    alignItems:'center'
  },
  name: {
    fontWeight : 'bold',
    fontSize : 21,
  },
  profession :{
    fontSize : 15,
    color:'#BCBEC0'
  },
  price :{
    color:'#17F1D7',
    fontWeight : 'bold',
    fontSize : 20
  },
  image : {
    height : 170
  },
  requestServiceButton : {
    justifyContent: 'center',
    alignItems:"center",
    width : windowWidth - 25 ,
    borderRadius : 50,
    backgroundColor : '#17F1D7',
    padding: 20 ,
    margin : 15,
  }
});

import React, { Component } from 'react';
import { View , SafeAreaView , FlatList , Image,
         Text , StyleSheet ,StatusBar ,TouchableOpacity
        } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AirbnbRating} from 'react-native-ratings';

//Modal
import FilterModal from '../modals/FilterModal';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'A professional Cardio trainer with international skills',
    image : "https://vparagon.com/wp-content/uploads/2018/03/service1-1024x576.jpeg",
    rating : 4,
    profession : 'Trainer',
    price : '1,400',
    currency : "SAR"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'No Pain no gain',
    image : "https://entrepreneurhandbook.co.uk/wp-content/uploads/2015/06/Online-business-idea-generation.jpg",
    rating : 4,
    profession : 'Trainer',
    price : '2,400',
    currency : "SAR"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image : "https://image.shutterstock.com/image-photo/customer-service-team-support-care-260nw-373731340.jpg",
    rating : 4,
    profession : 'Trainer',
    price : '3,500',
    currency : "SAR"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e23d72',
    title: 'Third Item',
    image : "https://image.shutterstock.com/image-photo/beautiful-female-operator-talking-on-260nw-1042300345.jpg",
    rating : 4,
    profession : 'Trainer',
    price : '3,000',
    currency : "SAR / Hour"
  },
  {
    id: '58694a3f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image : "https://entrepreneurhandbook.co.uk/wp-content/uploads/2015/06/Online-business-idea-generation.jpg",
    rating : 5,
    profession : 'Trainer',
    price : '3,500',
    currency : "EGP"
  },
  {
    id: '58694a3f-33a1-471f-bd96-145571e29d72',
    title: 'No Pain no gain',
    image : "https://image.shutterstock.com/image-photo/beautiful-female-operator-talking-on-260nw-1042300345.jpg",
    rating : 2,
    profession : 'Trainer',
    price : '3,300',
    currency : "EGP"
  },
];



function Item({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('SingleService' ,{service : item})}
                      style={styles.item}
                      activeOpacity ={.8}
    >
      <Image style={styles.image} source={{uri : item.image }} />
      <View style={styles.content}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.profession}>{item.profession}</Text>
          <View style={styles.rowContainer}>  
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

class ServicesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFilterModal : false
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Fitness Trainer | Hira Street - Jeddah, KSA</Text>
        <FontAwesome name="search" style={styles.darkIcon} size={25}  transform={{ rotate: 42 }}/>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.servicesNumber}> {DATA.length} Serviecs</Text>
        <View style={styles.filter}>
          <TouchableOpacity
            style={styles.filter}
            onPress= {() => this.setState({ showFilterModal : true})}
          >
          <FontAwesome name="filter" style={styles.grayIcon} size={25}  transform={{ rotate: 42 }}/>
          <Text>Filter</Text>
          </TouchableOpacity>

          <Text> | </Text>
          <FontAwesome name="sort" style={styles.coloredIcon} size={25} transform={{ rotate: 42 }}/>
          <Text>Sort</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
      <FilterModal
          showModal={this.state.showFilterModal} />
    </SafeAreaView>
    );
  }
}

export default ServicesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"#fff"
  },
  searchContainer:{
    height: 60,
    backgroundColor:'#17F1D7',
    flexDirection :'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal : 15
  },
  searchText:{
    fontSize : 15,
  },
  filterContainer:{
    flexDirection : 'row',
    height: 60,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal :15
  },
  filter:{
    flexDirection : 'row',
    alignItems:'center'
  },
  grayIcon:{
    color :'#939598',
    fontWeight : 'normal'
  },
  darkIcon:{
    color :'black',
    fontWeight : 'normal'
  },
  coloredIcon :{
    color :'#17F1D7',
    fontWeight : 'normal'
  },
  servicesNumber :{
    fontSize :16,
    color :'#58595B',
    fontWeight : 'bold',
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
  currency:{

  },
  image : {
    height : 150
  }
});

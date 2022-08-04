/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {loadProduct} from './actions';
import CaresoledataBollywood from './component/Caresole';
// import {useDispatch} from 'react-redux';
// import {addBook} from './actions';

class ProductList extends React.Component {
  loadProduct = () => {
    this.props.dispatchLoadProducts(this.state);
  };

//  const dispatch = useDispatch();
//   addData = (products) => {
//     dispatch(addBook(products));
//   }

  render() {
    const {products} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.Caresole}>
          <CaresoledataBollywood />
        </View>
        <Text style={styles.HaedCard}>New Movies</Text>
        <ScrollView style={styles.BooksContainer}>
          {products.map((products, index) => (
            <View style={styles.book} key={index}>
              <View>
                <ImageBackground
                  style={styles.Image}
                  source={{
                    uri: products.imageUrl,
                  }}>
                  <Image
                    source={require('../../assets/heart.png')}
                    style={styles.icon}
                  />
                </ImageBackground>
              </View>
              <View style={{padding: 5}}>
                <Text style={styles.name}>{products.name}</Text>
                <Text style={styles.details}>PRICE = {products.genre}</Text>
                <Text style={styles.details}>
                  Rating = {products.imdbRating}
                </Text>
                <Text style={styles.details}>{products.director}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 8}} onPress={()=>this.addData(products)}>
                    <Text >Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Watch Later</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={{marginRight: 8,  alignSelf:'center',justifyContent:'flex-end' }} >
               <Image source={require('../../assets/next.png')}  style={styles.btnIcon}/>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnIcon:{ height:20, width:20},
  HaedCard:{
    fontSize:25,
     fontWeight:'bold',
     textAlign:'center',
      borderTopWidth:1,
      borderTopColor:'red',
  },
  Image:{height: 120, width: 100},
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  Caresole: {
    padding: 10,
    paddingRight: 50,
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
  },
  icon:{
    color: 'green',
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },

  book: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth:1,
    backgroundColor:'azure',
  },
  name: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
});

const mapDispatchToProps = {
  dispatchLoadProducts: products => loadProduct(products),
};

const mapStateToProps = state => ({
  products: state.ProductReducer.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

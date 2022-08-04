/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
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
import CaresoledataHollywood from './component/HollyWoodCaresole';
import {load_h_Product} from './actions';

class HollyWoodMovies extends React.Component {
  load_h_Product = () => {
    this.props.dispatchLoadHollyWoodMovies(this.state);
  };
  render() {
    const {HollyWoodMovies} = this.props;

    return (
      <View style={styles.container}>
         <View style={styles.Caresole}>
          <CaresoledataHollywood />
        </View>
        <ScrollView style={styles.BooksContainer}>
          {HollyWoodMovies.map((HollyWoodMovies, index) => (
            <View style={styles.book} key={index}>
              <View>
                <ImageBackground
                  style={styles.cardImage}
                  source={{
                    uri: HollyWoodMovies.imageUrl,
                  }}>
                  <Image
                    source={require('../../assets/heart.png')}
                    style={styles.ImageIcon}
                  />
                </ImageBackground>
              </View>
              <View style={styles.viewContainer}>
                <Text style={styles.name}>{HollyWoodMovies.name}</Text>
                <Text style={styles.details}>
                  PRICE = {HollyWoodMovies.genre}
                </Text>
                <Text style={styles.details}>
                  Rating = {HollyWoodMovies.imdbRating}
                </Text>
                <Text style={styles.details}>{HollyWoodMovies.director}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn}>
                    <Text>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Watch Later</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  viewContainer:{
    marginRight: 8,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  buttons:{
    flexDirection: 'row',
  },
  btn:{
    marginRight: 8,
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
  },
  ImageIcon: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },
  book: {
    padding: 20,
    flexDirection: 'row',
  },
  Caresole: {
    padding: 10,
    paddingRight: 50,
  },
  cardImage: {
    height: 120,
    width: 100,
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
  dispatchLoadHollyWoodMovies: HollyWoodMovies =>
    load_h_Product(HollyWoodMovies),
};

const mapStateToProps = state => ({
  HollyWoodMovies: state.HollywoodReducer.HollyWoodMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(HollyWoodMovies);

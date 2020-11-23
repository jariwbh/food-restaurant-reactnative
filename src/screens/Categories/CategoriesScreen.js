import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class CategoriesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  rendercategory = () => {
    return (
      <ScrollView>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('RecipesList')}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400' }} />
            <Text style={styles.categoriesName}>Cookies</Text>
            <Text style={styles.categoriesInfo}>4 recipes</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('RecipesList')}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg' }} />
            <Text style={styles.categoriesName}>Mexican Food</Text>
            <Text style={styles.categoriesInfo}>2 recipes</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('RecipesList')}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
            <Text style={styles.categoriesName}>Italian Food</Text>
            <Text style={styles.categoriesInfo}>3 recipes</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('RecipesList')}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*' }} />
            <Text style={styles.categoriesName}>Smoothies</Text>
            <Text style={styles.categoriesInfo}>1 recipes</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }


  render() {
    return (
      <View>
        {this.rendercategory()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoriesItemContainer: {
    marginTop: 25,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    // marginTop: 20,

  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});
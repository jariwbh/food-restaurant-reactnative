import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Api from '../../services/Categoriesservice/CategorieService'


export default class CategoriesScreen extends React.Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: '#F67600',
    },
    headerTintColor: '#fff',
  });

  constructor(props) {
    super(props);
    this.state = {
      itemCategories: [],

    }
  }

  componentDidMount() {
    Api.getCategory().then((response) => {
      this.setState({ itemCategories: response.data })
    })

  }

  onPressCategory = id => {
    this.props.navigation.navigate('RecipesList', { id });
    console.log(id);
  };


  renderCategory = ({ item }) => (

    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item._id)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.property.item_logo }} />
        <Text style={styles.categoriesName}>{item.property.title}</Text>
        <Text style={styles.categoriesInfo}>4 Recipe</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    // const { itemCategories, items, } = this.state
    // console.log(itemCategories);
    return (
      <View>
        <FlatList
          data={this.state.itemCategories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item._id}`}
        />
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
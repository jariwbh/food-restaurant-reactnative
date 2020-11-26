import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import * as Api from '../../services/Categoriesservice/CategorieService'


export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: '#F67600',
    },
    headerTintColor: '#fff',
  });

  constructor(props) {
    super(props);
    this.state = {
      itemslist: [],
    }
    this.id = this.props.navigation.state.params.id
    // console.log(this.props.navigation.state.params.id)
  };

  componentDidMount() {
    Api.getItems(this.id).then((response) => {
      this.setState({ itemslist: response.data })
    })

  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };


  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container} >
        <Image style={styles.photo} source={{ uri: item.itemid.item_logo }} />
        <Text style={styles.title} >{item.itemid.itemname}</Text>
        <Text style={styles.title}>{item.itemid.offertype.property.title}</Text>
        {/* <Text style={styles.category}>{getItems()}</Text> */}
      </View>

    </TouchableHighlight>
  );

  render() {
    // const { itemslist } = this.state
    // console.log(itemslist);
    return (
      <View>

        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.itemslist}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

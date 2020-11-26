import React from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
const { width: viewportWidth } = Dimensions.get('window');


export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerStyle: {
        backgroundColor: '#F67600',
      },
      headerTintColor: '#fff',
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      recipilist: [],
      item: []
    };
    this.item = this.props.navigation.state.params.id
    console.log(this.item)
  }


  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.property.item_logo }} />
      </View>
    </TouchableHighlight>
  );


  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const { item } = this.state
    console.log(item);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>

        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.itemname}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => { alert("Done") }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}


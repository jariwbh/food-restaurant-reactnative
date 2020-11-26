import React from 'react';
import { View } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
// import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { DrawerContainerScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default class DrawerContainer extends React.Component {

  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={{ flex: 1 }}>

          <View style={styles.drawerContainer}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }}
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                  <Title style={styles.title}>John Doe</Title>
                  <Caption style={styles.caption}>@j_doe</Caption>
                </View>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="home-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => { navigation.navigate('Home') }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Profile"
                onPress={() => { navigation.navigate('MyProfile') }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <FontAwesome
                    name="th-list"
                    color={color}
                    size={size}
                  />
                )}
                label="Categories"
                onPress={() => { navigation.navigate('Categories') }}
              />
              {/* <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="settings-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Settings"
                onPress={() => { navigation.navigate('SettingScreen') }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => { navigation.navigate('SupportScreen') }}
              /> */}
            </Drawer.Section>
          </View>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="exit-to-app"
                  color={color}
                  size={size}
                />
              )}
              label="Sign Out"
              onPress={() => { signOut() }}
            />
          </Drawer.Section>
        </View>
      </View>
    );
  }
}

// DrawerContainer.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired
//   })
// };





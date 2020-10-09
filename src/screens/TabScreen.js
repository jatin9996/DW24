import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Tab,
  Tabs,
  Button,
  ScrollableTab,
} from 'native-base';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
//import Button from '@material-ui/core/Button';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
//const [anchorEl, setAnchorEl] = React.useState(null);

// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

export default class Tabscreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#999999'}} hasTabs>
          <Button transparent>
            <View style={styles.MainContainer}>
              <TouchableOpacity style={styles.header} activeOpacity={0.5}>
                <Image
                  source={require('../../image/facebook.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </Button>
          <Button transparent>
            <View style={styles.MainContainer}>
              <TouchableOpacity style={styles.header} activeOpacity={0.5}>
                <Image
                  source={require('../../image/insta.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </Button>
          <Button transparent>
            <View style={styles.MainContainer}>
              <TouchableOpacity style={styles.header} activeOpacity={0.5}>
                <Image
                  source={require('../../image/Linkedin.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </Button>
          <Button transparent>
            <View style={styles.MainContainer}>
              <TouchableOpacity style={styles.header} activeOpacity={0.5}>
                <Image
                  source={require('../../image/youtube.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </Button>
          <Button transparent>
            <View style={styles.MainContainer}>
              <TouchableOpacity style={styles.header} activeOpacity={0.5}>
                <Image
                  source={require('../../image/pinterest.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
            </View>
          </Button>
        </Header>
        <Header style={{backgroundColor: '#000'}} hasTabs>
          <Left />
          <Body>
            <Button transparent>
              <Image
                source={require('../../image/Logo.png')}
                style={{
                  width: 150,
                  height: 130,
                  marginRight: 180,
                }}
              />
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <View style={styles.MainContainer}>
                <TouchableOpacity style={styles.menu} activeOpacity={0.5}>
                  <Image
                    source={require('../../image/search.png')}
                    style={styles.ImageIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </Button>

            <Button transparent>
              <View style={styles.MainContainer}>
                {/* <DropdownMenu
                  style={{flex: 0.5}}
                  bgColor={'grey'}
                  tintColor={'#000000'}
                  activityTintColor={'red'}
                  handler={(selection, row) =>
                    this.setState({text: data[selection][row]})
                  }
                  data={data}></DropdownMenu> */}

                <TouchableOpacity style={styles.menu} activeOpacity={0.1}>
                  <Image
                    source={require('../../image/menu.png')}
                    style={styles.ImageIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </Button>
          </Right>
        </Header>
        <Header style={{backgroundColor: '#454545'}}>
          <Left>
            <Button style={{marginLeft: -120, marginRight: 160}} disabled block>
              <Text style={styles.Breaking}>Breaking</Text>
            </Button>
          </Left>
        </Header>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: '#000'}}
          renderTabBar={() => <ScrollableTab />}>
          <Tab
            tabStyle={{backgroundColor: '#000'}}
            activeTabStyle={{backgroundColor: '#000'}}
            textStyle={{color: '#ffd017'}}
            activeTextStyle={{color: '#ffd017'}}
            heading="Top Headlines">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#000'}}
            activeTabStyle={{backgroundColor: '#000'}}
            textStyle={{color: '#ffd017'}}
            activeTextStyle={{color: '#ffd017'}}
            heading="Business">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#000'}}
            activeTabStyle={{backgroundColor: '#000'}}
            textStyle={{color: '#ffd017'}}
            activeTextStyle={{color: '#ffd017'}}
            heading="Entertainment">
            <Tab3 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#000'}}
            activeTabStyle={{backgroundColor: '#000'}}
            textStyle={{color: '#ffd017'}}
            activeTextStyle={{color: '#ffd017'}}
            heading="Popular">
            <Tab4 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#000'}}
            activeTabStyle={{backgroundColor: '#000'}}
            textStyle={{color: '#ffd017'}}
            activeTextStyle={{color: '#ffd017'}}
            heading="Technology">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd017',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: -5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  Breaking: {
    color: '#000',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#999999',
    borderWidth: 0.0,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: -5,
  },
});

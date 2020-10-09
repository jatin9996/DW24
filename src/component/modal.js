import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Button,
  Title,
} from 'native-base';
import {WebView} from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {
    const {url, title} = this.props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via DW24`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };
  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    if (url !== undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container
            style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#000'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{color: 'white'}} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: webViewHeight}}>
              <WebView
                source={{uri: url}}
                style={{flex: 0, flexDirection: 'column'}}
                onError={this.handleClose}
                startInLoadingState={true}
                scalesPageToF
                javaScriptEnabled={true}
                //For the Cache
                domStorageEnabled={true}
                onLoadStart={() => setVisible(true)}
                onLoad={() => setVisible(false)}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

import React,{useState,useEffect} from 'react';
import {  
  ScrollView, 
  StyleSheet, 
  Button, 
  View, 
  SafeAreaView, 
  Text } from 'react-native';
import AyetSDK from 'ayetsdk';



const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  const [offers, setOffers] = useState("Native feed offers will load here");
  const [points, setPoints] = useState(0);
  
  useEffect(() => {
    AyetSDK.init('userID',(pointsAvailable) => {
      setPoints(pointsAvailable);
    });
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
              <View style={{marginBottom: 5,marginTop: 10}}>
              <Text style={styles.title}>
                {points}
              </Text>
            </View>
   
            <View style={styles.fixToText}>
              <View style={styles.smallButton}>
                <Button
                    title="show offerwall"
                    onPress={() => {
                      AyetSDK.isInitialized((isInitialised) => {
                        if(isInitialised){
                          AyetSDK.showOfferwall("react_native_ow_example");
                        }else{
                          //todo failed
                        }
                      });
                    }}
                  />
              </View>
              <View style={styles.smallButton}>
                <Button
                    title="get native offers"
                    onPress={() => {
                      AyetSDK.isInitialized((isInitialised) => {
                        if(isInitialised){
                          AyetSDK.getNativeOffers("react_native_feed_example",(nativeFeed)=> {
                            setOffers(nativeFeed)
                        });
                      }});
                    }}
                  />
              </View>
              <View style={styles.smallButton}>
                <Button
                    title="activate offer"
                    onPress={() => {
                      AyetSDK.isInitialized((isInitialised) => {
                        if(isInitialised){
                          var objOffers = JSON.parse(offers);
                          AyetSDK.activateOffer(objOffers[0].id,(wasOfferActivated) => {
                            if(wasOfferActivated){
                              console.log('offer id #'+objOffers[0].id+' succesfully activated ');
                            }
                          });
                        } 
                    });
                    }}
                  />
              </View>
            </View>
            <View style={styles.bigButton}>
                <Button
                    title="check balance"
                    onPress={() => {
                      AyetSDK.isInitialized((isInitialised) => {
                        if(isInitialised){
                          AyetSDK.getAvailableBalance((balance) => {
                            setPoints(balance);
                          });
                        } 
                    });
                    }}
                  />
            </View>
            <Separator />
             <Text  style={styles.title}> {offers} </Text> 
            </ScrollView>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  smallButton: {
    minWidth: 0,
    minHeight: 6,
    flexGrow: 1,
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 3,
    fontSize: 11
  },
  bigButton: {
    marginLeft: 5,
    marginTop: 5,
  },
  fixToText: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;



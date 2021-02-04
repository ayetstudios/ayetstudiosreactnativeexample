<div align="center">
  <img src="https://www.ayetstudios.com/wp-content/uploads/2017/05/ayetstudios_logo_03-200x49-1.png" width="300" height="73"/>
  <br/>
</div>
<br/>

# AyeT Studios React Native Example App

<br/>

Simple react native android example application using [ayetstudios-react-native-sdk](https://github.com/ayetstudios/ayetstudios-react-native-sdk) package.

Exampe implementation of:
- init(string: externalIdentifier, callback: userBalance): void 
- isInitialized(callback: wasSDKInitialised): void 
- getAvailableBalance(callback: getAvailableSdkBalance): void 
- showOfferwall(string: adslotName): void 
- getNativeOffers(string: adslotName, callback: getNativeOffersList): void 
- activateOffer(string: offerId, callback: wasOfferActivated): void 

### Screenshots
<br/>
<p float="left">
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_3eb4b8d29025d3012530edf7c2051af18fa5178b.png" width="100" />
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_ca16609a2dd37587a5df15dac2fb31046f68e538.png" width="100" /> 
  <img src="https://d1mys92jzce605.cloudfront.net/assets/cmsfiles_fee29e62a6bca95396ac101ca72fc5d82fc781ae.png" width="100" />
</p>

### SDK implementation


Include ayetstudios sdk

```javascript
import AyetSDK from 'ayetsdk';
```

Initialize the SDK 

```javascript
 AyetSDK.init('{user-identifier}',(pointsAvailable) => { //replace user-identifier value with your user id
      setPoints(pointsAvailable);
    });
```

Call offerwall

```javascript
 AyetSDK.isInitialized((isInitialised) => {
    if(isInitialised){
      AyetSDK.showOfferwall("{adslot_name}"); //get adslot name from your publisher dashboard 
    }else{
      //todo if failed
    }
  });
```


Call native offers 

```javascript
 AyetSDK.isInitialized((isInitialised) => {
    if(isInitialised){
      AyetSDK.getNativeOffers("{adslot_name}",(nativeFeed)=> { //get adslot name from your publisher dashboard 
        setOffers(nativeFeed)
    });
  }});
```
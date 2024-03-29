# RNDemos

Record my self-learning process of React Native. Demos are recorded in the XCode IOS simulator. The codes are compatible to use in Android Studio as well. 

**GuessNumApp**: The user could manually input a 2-digits number and recursively adjust to increasing the decreasing the generated guesses until the two numbers become equal. The APP is primarily based on components, styling, and flexible layouts design (dimensions & platform API), which is responsive and adaptive to user interfaces, like orientation changes. The following [demo](https://www.youtube.com/watch?v=aJ_brg4ggkE&feature=youtu.be&ab_channel=%E5%BC%A0%E5%AD%90%E6%99%97) is run in iPhone 11 Pro (13.6). 

**PushNotificationApp**: Implement the basic functionality of sending local notifications from Android/IOS simulators. Getting permission from the device,  controlling how notification is displayed on the screen, and reacting to foreground/background notifications. Also using Expo's push server and adding push tokens. 

**MealsApp**: Dishes information (collected online) are elegantly presented, including the ingredients, duration, and making steps. Users could glance over different categories subpages, select their preferable foods, and add them into a separate Favorites page. Also, users could filter the meals, like whether they are gluten-free, lactose-free, or vegan, and only perceive partial results. React navigation and state management & redux are largely implemented in the code. The following [demo](https://youtu.be/jyTdsoep1Fs) is run in iPhone 11 Pro (13.6). 

**ShopApp / ShopNotiApp**: Simulate the basic functionalities of any shopping application, like Amazon or Taobao. Appropriately handling all kinds of user inputs. Processing HTTP requests and adding a web server and database (Firebase) to better preserve all data through Redux Thunk. Accomplish user authentication (e.g. signup, login, auto-login, auto-logout, save commonly-shared and user-specific information separately). After creating an account, the user could create different commodities and update their information (except price). They could also make orders and the requests will be stored. By default, all users would have an empty page. The following [demo](https://www.youtube.com/watch?v=JNd5BqUC8O8&ab_channel=%E5%BC%A0%E5%AD%90%E6%99%97) is run in iPhone 11 Pro (13.6). 
> 09/09/2021 Update: Add push notifications functionality while users complete adding/editing product information and purchase. 

**GreatPlacesApp**: Investigating more in native device features, including camera, maps, location, SQLite. Using React Redux to add place. Outputting a list of places, accessing the device camera, and configuring the camera access. Storing the picked image on the filesystem and gradually diving into SQLite for permanent data storage. Storing/fetching data in/from the local database. Also getting the user location and showing a map preview of the location. Displaying an interactive map, adding a marker, and making the picked location "saveable." Updating the location screen when the location changes. Storing the address and displaying it on the detail screen.  



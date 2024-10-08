import { FC } from "react";
import NavigationStack from "./src/navigation/NavigationStack";
import { StatusBar } from "react-native";
import React from "react";

const App: FC = () => {
  return(
    <>
     <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
     <NavigationStack />
    </>
   
  )
}

export default App;

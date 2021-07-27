import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export const Toggle = ({title}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation()
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
      if(isEnabled && title === 'Weekly spending limit'){
          navigation.navigate('SpendingLimitScreen')
      }
  },[isEnabled])
  return (
    <View style={styles.main}>
      <Switch
        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  }
});


import { StyleSheet, Platform} from "react-native";

const Styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ?10:20,
    backgroundColor: '#fff',
  },
});


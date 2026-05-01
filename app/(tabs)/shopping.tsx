import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { commonStyles } from "../../constants/styles";

export default function ShoppingScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View>
        <Text style={commonStyles.title}>shopping</Text>
      </View>
    </SafeAreaView>
  );
}

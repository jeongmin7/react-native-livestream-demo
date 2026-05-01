import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { commonStyles } from "../../constants/styles";

export default function MyPageScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View>
        <Text style={commonStyles.title}>myPage</Text>
      </View>
    </SafeAreaView>
  );
}

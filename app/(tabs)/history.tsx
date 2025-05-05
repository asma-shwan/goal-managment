import HistoryItems from "@/constants/Items";
import { Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View style={{ paddingHorizontal: 24, paddingVertical: 64 }}>
      {HistoryItems.map((HistoryItem) => {
        return (
          <View
            key={HistoryItem.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{HistoryItem.title}</Text>
            <Text>{HistoryItem.deleteAt}</Text>
          </View>
        );
      })}
    </View>
  );
}

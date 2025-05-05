import HistoryItems from "@/constants/Items";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function GoalScreen() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState<{ title: string; id: string }[]>([]);

  function handleAddItem() {
    setItems((items) => [
      ...items,
      { title: item, id: Math.random().toString() },
    ]);
    setItem("");
  }

  function handleChangeInput(text: string) {
    setItem(text);
  }

  function handleDeleteItem(id: string) {
    const today = new Date();
    const deletedItem = items.find((item) => item.id === id);
    setItems((items) => items.filter((item) => item !== deletedItem));
    HistoryItems.push({ ...deletedItem!, deleteAt: today.toISOString() });
  }

  return (
    <View
      style={{
        flexDirection: "column",
        paddingVertical: 64,
        paddingHorizontal: 24,
        gap: 18,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <TextInput
          value={item}
          onChangeText={handleChangeInput}
          placeholder="Add your goal"
          style={{ borderWidth: 1, borderRadius: 12, flex: 2, padding: 8 }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            borderRadius: 12,
            alignItems: "center",
            padding: 8,
          }}
          onPress={handleAddItem}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Add goal</Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 14 }}>
        {items.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>{item.title}</Text>
              <TouchableOpacity
                onPress={() => handleDeleteItem(item.id)}
                style={{
                  backgroundColor: "red",
                  padding: 2,
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: "white", fontWeight: "600" }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

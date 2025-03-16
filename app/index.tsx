import { Button, ButtonText } from "@/components/ui/button";

import ScrollView from "@/components/ScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
export default function TimedTraining() {
  const router = useRouter();
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pocket Oche</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Training</ThemedText>
        <Button
          action={"primary"}
          variant={"solid"}
          size={"lg"}
          onPress={() => {
            router.push("/training/timed");
          }}
        >
          <ButtonText>Timed Training</ButtonText>
        </Button>
      </ThemedView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

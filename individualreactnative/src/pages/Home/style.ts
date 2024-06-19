import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 25,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    flex: 1,
    display: "flex",
    textDecorationLine: "underline",
  },
});
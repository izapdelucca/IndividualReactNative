import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  title: {
    fontSize: 28,
    textAlign: "center",
    paddingBottom: 30,
    fontWeight: "bold",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  termos: {
    fontSize: 13,
    paddingHorizontal: 40,
    textAlign: "center",
  },

  highlight: {
    color: "#0076d3",
    fontWeight: "bold",
  },
});

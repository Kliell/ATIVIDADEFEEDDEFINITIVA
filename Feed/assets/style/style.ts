import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: 40,
  },

  /* HEADER */
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  /* POST */
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
  },

  headerPost: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 8,
  },

  user: {
    fontWeight: "600",
    fontSize: 15,
  },

  image: {
    width: "100%",
    height: 250,
  },

  actions: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
  },

  content: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  /* MODAL */
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  cancel: {
    marginTop: 15,
    textAlign: "center",
    color: "red",
  },
});

export default styles;
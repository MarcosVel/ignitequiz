import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  question: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 64,
    padding: 32,
  },
  footer: {
    flexDirection: "row",
    marginTop: 24,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GREY_100,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  header: {
    width: "100%",
    marginBottom: 20,
  },
});

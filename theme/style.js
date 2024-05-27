import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //  welcome page started
  welcome: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 16,
    position: "relative",
    display: "flex",
  },
  welcomeContainer: {
    flex: 1,
    padding: 16,
  },
  welcomeContext: {
    height: "100%",
    justifyContent: "space-between",
  },

  anemiaHeaderContainer: {
    height: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  anemiaText: {
    fontSize: 36,
  },
  signContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpBtn: {
    backgroundColor: "#009CF4",
    padding: 16,
    borderRadius: 10,
    color: "white",
    width: 185,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  signText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },

  bottomTextContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  accountText: {
    fontSize: 12,
  },
  lText: {
    color: "#2271E7",
    fontSize: 12,
    marginLeft: 5,
  },

  // welcome page finished

  // login page started

  login: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    // backgroundColor: '#0065FC',
  },
  back: {
    flexDirection: "row",
    justifyContent: "start",
  },

  loginContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  form: {
    marginTop: 40,

    width: "100%",
  },
  input: {
    borderRadius: 10,
    color: "#EDEBEA",
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#009CF4",
  },
  loginBtn: {
    textAlign: "center",
    marginTop: 28,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: "#009CF4",
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  loginBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  homeMenu: {
    height: 100,
    alignItems: "center",
  },

  checkupContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  checkupBtn: {
    backgroundColor: "#009CF4",
    width: 230,
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 16,
  },

  homeText: {
    fontSize: 32,
  },

  // home page started

  homeContainer: {
    // flex:1,
    backgroundColor: "#EDEDED",
    paddingHorizontal: 8,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: "40%",
  },
  homeContent: {
    marginTop: 20,
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  homeBtn: {
    paddingVertical: 16,
    backgroundColor: "#0065FC",
    borderRadius: 16,
    width: "45%",
    alignItems: "center",
  },
  homeBtnContent: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  healthStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  healthIcon: {
    backgroundColor: "#E4EDF9",
    padding: 12,
    borderRadius: 16,
  },

  // card container
  cardContainer: {},
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardBox: {
    backgroundColor: "#EFEFEF",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  cardImg: {
    width: 150,
    height: 150,
  },
  openBtn: {
    padding: 8,
    backgroundColor: "#0065FC",
  },
  openBtnText: {
    fontSize: 20,
    color: "white",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  about: {
    backgroundColor: "grey",
    height: "100%",
    marginTop: 40,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  fullScreenImageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"

  },
  fullScreenImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",

  },

  messageContainer:{
    position:"relative",
    color: "black",
    backgroundColor:"#EBF2F6",
    paddingHorizontal:20,
    paddingVertical:40,
    borderRadius: 5,
    borderRadius:10
  },
  message: {
    fontSize: 20,
  },
  closeMessage:{
    position:"absolute",
    right:10,
    top:10
  }
});

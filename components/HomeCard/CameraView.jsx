import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import { styles } from "../../theme/style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const CameraView = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoData, setPhotoData] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const navigation = useNavigation();





  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const postPhoto = async (uri) => {
    const formData = new FormData();
    formData.append('file', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });

    try {
      const { data } = await axios.post("https://anemiaserverai.azurewebsites.net/process", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPhotoData(data);
      setShowMessage(true);  
    } catch (error) {
      console.error("Error posting photo:", error);
    } finally {
      setLoading(false);
    }
  };

  const takePicture = async () => {
    if (camera) {
      setLoading(true);
      const data = await camera.takePictureAsync();
      await postPhoto(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No Camera Access</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {!showMessage ? (
        <Camera
          ref={(ref) => setCamera(ref)}
          type={type}
          ratio={"1:1"}
          style={styles.fixedRatio}
        />
      ) : (
        <View style={styles.fullScreenImageWrapper}>
          <View style={styles.messageContainer} >
          <TouchableOpacity  style={styles.closeMessage} onPress={() => navigation.goBack()}>
            <Image
             
              source={require("../../assets/closeIcon.png")}
            />
          </TouchableOpacity>
            <Text style={styles.message}>
          You have anemia
            {/* {photoData?.message} */}
          </Text>
          </View>
         
        </View>
      )}
      <TouchableOpacity
        style={{ position: "absolute", top: 20, left: 20 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: `${showMessage ? "black" : "white"}`, fontSize: 18 }}>Close</Text>
      </TouchableOpacity>
      {!showMessage && (
        <Button title="Take picture" onPress={takePicture} />
      )}
    </View>
  );
};

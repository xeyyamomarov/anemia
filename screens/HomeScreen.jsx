import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { HomeView } from "../components/HomeCard/HomeView";
import { CameraView } from "../components/HomeCard/CameraView";

export default function HomeScreen() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleCheckupPress = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {isCameraOpen ? (
          <CameraView onClose={handleCloseCamera} />
        ) : (
          <HomeView onCheckupPress={handleCheckupPress} />
        )}
      </SafeAreaView>
    );
}

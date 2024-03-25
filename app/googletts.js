import axios from "axios";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

export const textToSpeech = async (text) => {
  try {
    const apiKey = "";
    const apiUrl = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?alt=json&key=${apiKey}`;

    const response = await axios.post(
      apiUrl,
      {
        input: { text },
        voice: { languageCode: "en-GB", name: "en-GB-Neural2-C" },
        audioConfig: { audioEncoding: "MP3" },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data && response.data.audioContent) {
      const base64Data = response.data.audioContent;
      const uri = FileSystem.documentDirectory + "audio.mp3";
      await FileSystem.writeAsStringAsync(uri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const sound = new Audio.Sound();
      filename = "audio.mp3";
      await sound.loadAsync({ uri: FileSystem.documentDirectory + filename });
      await sound.playAsync();
    }
  } catch (error) {
    console.error("Text-to-speech error:", error);
  }
};

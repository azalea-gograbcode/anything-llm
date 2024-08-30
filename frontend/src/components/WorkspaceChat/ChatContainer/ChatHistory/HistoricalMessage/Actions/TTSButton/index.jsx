import { useTTSProvider } from "@/components/contexts/TTSProvider";
import NativeTTSMessage from "./native";
import AsyncTTSMessage from "./asyncTts";
import PiperTTSMessage from "./piperTTS";
<<<<<<< HEAD

export default function TTSMessage({ slug, chatId, message }) {
  const { settings, provider, loading } = useTTSProvider();
=======
import System from "@/models/system";

export default function TTSMessage({ slug, chatId, message }) {
  const [settings, setSettings] = useState({});
  const [provider, setProvider] = useState("native");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSettings() {
      const _settings = await System.keys();
      setProvider(_settings?.TextToSpeechProvider ?? "native");
      setSettings(_settings);
      setLoading(false);
    }
    getSettings();
  }, []);

>>>>>>> 48ef74aa (sync-fork-2)
  if (!chatId || loading) return null;

  switch (provider) {
    case "openai":
<<<<<<< HEAD
    case "generic-openai":
    case "elevenlabs":
      return <AsyncTTSMessage chatId={chatId} slug={slug} />;
    case "piper_local":
      return (
        <PiperTTSMessage
          chatId={chatId}
=======
    case "elevenlabs":
      return <AsyncTTSMessage slug={slug} chatId={chatId} />;
    case "piper_local":
      return (
        <PiperTTSMessage
>>>>>>> 48ef74aa (sync-fork-2)
          voiceId={settings?.TTSPiperTTSVoiceModel}
          message={message}
        />
      );
    default:
<<<<<<< HEAD
      return <NativeTTSMessage chatId={chatId} message={message} />;
=======
      return <NativeTTSMessage message={message} />;
>>>>>>> 48ef74aa (sync-fork-2)
  }
}

import { useEffect, useState, useRef } from "react";
import { SpeakerHigh, PauseCircle, CircleNotch } from "@phosphor-icons/react";
<<<<<<< HEAD
import PiperTTSClient from "@/utils/piperTTS";

export default function PiperTTS({ chatId, voiceId = null, message }) {
=======
import { Tooltip } from "react-tooltip";
import PiperTTSClient from "@/utils/piperTTS";

export default function PiperTTS({ voiceId = null, message }) {
>>>>>>> 48ef74aa (sync-fork-2)
  const playerRef = useRef(null);
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  async function speakMessage(e) {
    e.preventDefault();
    if (speaking) {
      playerRef?.current?.pause();
      return;
    }

    try {
      if (!audioSrc) {
        setLoading(true);
        const client = new PiperTTSClient({ voiceId });
        const blobUrl = await client.getAudioBlobForText(message);
        setAudioSrc(blobUrl);
        setLoading(false);
      } else {
        playerRef.current.play();
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setSpeaking(false);
    }
  }

  useEffect(() => {
    function setupPlayer() {
      if (!playerRef?.current) return;
      playerRef.current.addEventListener("play", () => {
        setSpeaking(true);
      });

      playerRef.current.addEventListener("pause", () => {
        playerRef.current.currentTime = 0;
        setSpeaking(false);
      });
    }
    setupPlayer();
  }, []);

  return (
    <div className="mt-3 relative">
      <button
        type="button"
        onClick={speakMessage}
        disabled={loading}
<<<<<<< HEAD
        data-auto-play-chat-id={chatId}
=======
>>>>>>> 48ef74aa (sync-fork-2)
        data-tooltip-id="message-to-speech"
        data-tooltip-content={
          speaking ? "Pause TTS speech of message" : "TTS Speak message"
        }
<<<<<<< HEAD
        className="border-none text-[var(--theme-sidebar-footer-icon-fill)]"
=======
        className="border-none text-zinc-300"
>>>>>>> 48ef74aa (sync-fork-2)
        aria-label={speaking ? "Pause speech" : "Speak message"}
      >
        {speaking ? (
          <PauseCircle size={18} className="mb-1" />
        ) : (
          <>
            {loading ? (
              <CircleNotch size={18} className="mb-1 animate-spin" />
            ) : (
              <SpeakerHigh size={18} className="mb-1" />
            )}
          </>
        )}
        <audio
          ref={playerRef}
          hidden={true}
          src={audioSrc}
          autoPlay={true}
          controls={false}
        />
      </button>
<<<<<<< HEAD
=======
      <Tooltip
        id="message-to-speech"
        place="bottom"
        delayShow={300}
        className="tooltip !text-xs"
      />
>>>>>>> 48ef74aa (sync-fork-2)
    </div>
  );
}

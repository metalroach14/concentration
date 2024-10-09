import AudioPlayer from "@/components/AudioPlayer";
import ImageGallery from "@/components/ImageGallery";

export default function page() {
  return (
    <div className="w-screen h-screen">
      <ImageGallery />
      <AudioPlayer />
    </div>
  );
}

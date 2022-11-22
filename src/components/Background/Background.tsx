import '../Background/Background.css'
import '../../../public/gambling-video.mp4'

function Background() {
  return (
    <video autoPlay muted loop className="app-background">
      <source src="../../../public/gambling-video.mp4" type="video/mp4" />
    </video>
  );
}

export default Background;

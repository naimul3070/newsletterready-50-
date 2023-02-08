import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
    <>
      <div className="video-part flex justify-center lg:my-[120px] mt-[30px]">
        <ReactPlayer url="https://youtu.be/I5EF9H0teII" />
      </div>
    </>
  );
}

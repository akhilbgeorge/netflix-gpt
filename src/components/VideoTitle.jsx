const VideoTitle = ({ title, description }) => {
  return (
    <div className="mt-40 ms-20 w-1/3">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-5xl text-white ">{title}</h1>
        <p className="text-white">{description}</p>
        <div>
          <button className="bg-white px-7 py-2 hover:bg-white/60 cursor-pointer rounded-md">
            ▶ Play
          </button>
          <button className="bg-gray-500/70 text-white px-7 py-2 ms-4 hover:bg-gray-500/30 cursor-pointer rounded-md">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

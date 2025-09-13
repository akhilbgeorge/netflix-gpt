const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute bottom-32 left-10 md:bottom-36 md:left-10 max-w-lg ">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-4xl md:text-6xl text-white ">{title}</h1>
        <p className="text-white line-clamp-2 md:line-clamp-none">
          {description}
        </p>
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

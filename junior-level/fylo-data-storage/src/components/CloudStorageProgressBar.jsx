const CloudStorageProgressBar = () => {
  return (
    <div className="bg-image-progress h-5 w-full rounded-full relative">
      <article className="linear-gradient w-3/4 h-3 absolute top-1 left-1 rounded-full">
        <div className="bg-white rounded-full absolute right-1 ball"></div>
      </article>
    </div>
  );
};

export default CloudStorageProgressBar;

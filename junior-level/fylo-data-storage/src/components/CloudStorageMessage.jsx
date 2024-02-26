const CloudStorageMessage = () => {
  return (
    <div className="bg-white rounded-lg w-40 h-16 flex items-center justify-center bg-185">
      <h2 className="text-very-dark-blue font-bold text-4xl">
        185 <span className="font-normal opacity-75 text-base">GB Left</span>
      </h2>

      <div className="triangle"></div>
    </div>
  );
};

export default CloudStorageMessage;

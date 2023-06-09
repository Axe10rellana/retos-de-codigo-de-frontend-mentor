const UserAuth = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-10 lg:gap-y-0 justify-center gap-y-4">
      <button className="outline-none transition-colors duration-300 text-medium-gray hover:text-almost-black">
        Login
      </button>
      <button className="outline-none border-[3px] border-solid transition-colors duration-300 border-medium-gray text-medium-gray hover:text-almost-black hover:border-almost-black px-6 py-2 rounded-2xl">
        Register
      </button>
    </div>
  );
};

export default UserAuth;

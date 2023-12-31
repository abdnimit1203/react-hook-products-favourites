const Banner = () => {
  return (
    <div className=" w-[50%]">
      <div className="form-control ">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered focus:outline-none w-full border-rose-200"
          />
          <button className="btn btn-square rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const NotFound = () => {
  return (
    <>
      <div className="nocontent-holder m-6">
        <div className="text-center">
          <span className="text-4xl font-medium">404</span>
        </div>
        <div className="mt-[1rem] text-center text-lg font-medium">
          Stranica je trenutno u izradi.
        </div>
        <div className="mt-5 text-center">
          <button className="rounded-[5rem] bg-croonus-1 px-4 py-2 text-white hover:bg-opacity-80">
            <a href="/">Vrati se na početnu stranu.</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;

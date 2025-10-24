// Hero Banner Component
const HeroBanner = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="hero min-h-[500px] bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg my-8">
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">We Provide Effective Legal Solutions</h1>
          <p className="mb-8 text-lg">
            We are always trying to solve the problems of those who suffer. We have a large number of lawyers and judges who solve many serious issues almost every day. Our institute is very friendly and approachable.
          </p>
          <div className="flex gap-2 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search Your Services"
              className="input input-bordered w-full text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch} className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
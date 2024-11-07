export default function SearchInput() {
  return (
    <div className="flex gap-1 justify-center">
      <input
        type="text"
        placeholder="Enter city name"
        className="p-2 w-full rounded-md"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
    </div>
  );
}

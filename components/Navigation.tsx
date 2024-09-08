import SearchInput from "./Input";

export const Navigation = () => (
  <nav className="flex items-center justify-between p-4 bg-gray-900">
    <div className="flex items-center">
      <SearchInput />
    </div>
    {/* <div className="flex items-center">
      <Bell className="text-gray-500 mr-4" size={20} />
      <img
        src="/placeholder.svg?height=32&width=32"
        alt="User avatar"
        className="w-8 h-8 rounded-full"
      />
    </div> */}
  </nav>
);

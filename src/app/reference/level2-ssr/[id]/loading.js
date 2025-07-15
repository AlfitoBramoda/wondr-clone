export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-6"></div>
          <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded mb-6 w-full"></div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="h-6 bg-gray-300 rounded mb-3 w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
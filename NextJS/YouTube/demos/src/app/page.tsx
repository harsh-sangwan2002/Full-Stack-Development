import Link from "next/link"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to the Dashboard App</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your tasks, track analytics, ans stay organized with our powerful dashboard.
        </p>
        <Link className="inline-flex items-center justify-center bg-blue-600 text-white
        px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          href="/dashboard">Go To Dashboard</Link>
      </div>
    </div >
  )
}

export default Home

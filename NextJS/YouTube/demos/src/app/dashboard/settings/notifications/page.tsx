const Notifications = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h1>Notifications</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Notification Preferences
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-600">
                                Email Notifications
                            </label>
                            <select className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-50">
                                <option value="">Enable</option>
                                <option value="">Disable</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-600">
                                SMS Notifications
                            </label>
                            <select className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-50">
                                <option value="">Enable</option>
                                <option value="">Disable</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-600">
                                Push Notifications
                            </label>
                            <select className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-50">
                                <option value="">Enable</option>
                                <option value="">Disable</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Actions Settings */}
                <div className="flex justify-end space-x-4">
                    <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        Cancel
                    </button>
                    <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notifications

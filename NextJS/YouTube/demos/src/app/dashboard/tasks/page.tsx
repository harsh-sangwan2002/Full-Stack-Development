const Tasks = () => {
    const tasks = [
        {
            id: 1,
            title: "Finish project report",
            description: "Complete the final report for the project by end of the week.",
            status: "In Progress",
            dueDate: "2023-10-15"
        },
        {
            id: 2,
            title: "Client feedback",
            description: "Gather feedback from the client on the latest deliverables.",
            status: "Pending",
            dueDate: "2023-10-14"
        },
        {
            id: 3,
            title: "Update documentation",
            description: "Revise the project documentation to reflect recent changes.",
            status: "Completed",
            dueDate: "2023-10-16"
        }
    ]
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
                {/* Tasks list section */}
                <section className="space-y-6">
                    {
                        tasks.map(task => (
                            <div key={task.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4"
                                style={{
                                    borderColor: task.status === "Completed" ? "green" : task.status === "In Progress" ? "yellow" : "red"
                                }}
                            >
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                                    <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                                    <p className="text-sm text-gray-600 mt-2">Due date: {task.dueDate}</p>
                                </div>
                                <section className="flex space-x-4">
                                    <span className={`px-4 py-3 text-center text-sm rounded-full ${task.status === "Completed"
                                        ? "bg-green-100 text-green-600"
                                        : task.status === "In Progress"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"}`}>
                                        {task.status}
                                    </span>
                                    {/* Buttons */}
                                    <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                        Edit
                                    </button>
                                    {
                                        task.status !== "Completed" && (
                                            <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                                                Mark as Completed
                                            </button>
                                        )
                                    }
                                    <button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                                        Delete
                                    </button>
                                </section>
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Tasks

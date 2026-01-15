function TaskDelete({ task, fetchData, closeModal }) {
  const deleteData = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:3000/tasks/" + id,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Data deleted");
        fetchData();
        closeModal(); // ✅ close modal
      } else {
        throw new Error("Error deleting task");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this task?</p>
      <button
        className="bg-blue-600 text-white float-left mt-2 p-2"
        onClick={() => deleteData(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskDelete;

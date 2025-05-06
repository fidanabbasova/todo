import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Todo Application</h1>
        </header>

        <TodoApp />

        <footer className="text-center mt-10 text-gray-500 text-sm">
          <p>© 2025 Todo App - Mini-Hackathon Project</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

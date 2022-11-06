const App = () => {
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-6">
        <div className="h-96 w-96 rounded-2xl bg-rose-900 shadow-md" />

        {/* Button Group */}
        <div className="w-full flex justify-between gap-4">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
};

export default App;

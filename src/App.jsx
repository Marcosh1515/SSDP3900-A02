import './App.css';

function App() {
  return (
    <>
      <h3>Made by Marc-André Baron-Campeau</h3>
      <h5>There is nothing else on this public page.</h5>
      <img src={`${import.meta.env.BASE_URL}/bigWilly.png`} />
      <h1>The Fresh Prince</h1>
    </>
  );
}

export default App;

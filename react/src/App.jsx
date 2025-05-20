import BoroughCard from "./BoroughCard";

function App() {
  return (
    <div>
      <BoroughCard borough="Brooklyn" bgColor="lightblue" />
      <BoroughCard borough="Manhattan" bgColor="gold" />
      <BoroughCard borough="Bronx" bgColor="green" />
      <BoroughCard borough="Staten Island" bgColor="blue" />
      <BoroughCard bgColor="orange"/> {/* Defaults to Queens */}


    </div>
  );
}

export default App;
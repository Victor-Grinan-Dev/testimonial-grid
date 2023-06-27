import Card from "./components/Card";
import { users } from "./data/users";
function App() {

  return <div className="container mx-auto max-w-7xl p-2 md:p-10">

    {/* grid container */} 
    <div className="flex flex-col space-y-6 md:grid md:grid-cols-4 md:gap-6 md:grid-rows-2">
      {
        users && users.map((user, i) => (
          <Card 
            key = {i}
            id={i}
            image={user.image}
            name={user.name}
            grid={user.grid}
            background={user.background}
            textColor={user.textColor}
            position={user.position}
            text1={user.text1}
            text2={user.text2}
          /> 
        ))
      }
    </div>
  </div>;
}
export default App;

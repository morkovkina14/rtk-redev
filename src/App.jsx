homework-08
import Counter from "./components/Counter";
import ToggleText from "./components/ToggleText";
import LiveInput from "./components/LiveInput";
import ColorText from "./components/ColorText";
=======
import UserCard from "./components/UserCard";
import React from "react";
main

const App = () => {
  return (
    <div>
 homework-08
      <Counter/>
      <ToggleText/>
      <LiveInput/>
      <ColorText/>

     <UserCard
  name="Павел"
  role="Frontend-разработчик"
  experience={3}
  location={{ city: "Минск", country: "Беларусь" }}
  isAvailable={true}
/>
     <UserCard
  name="Оля"
  role="Frontend-разработчик"
  experience={1}
  location={{ city: "Гродно", country: "Беларусь" }}
  isAvailable={true}
/>
     <UserCard
  name="Валентина"
  role="Врач"
  experience={2}
  location={{ city: "Брест", country: "Беларусь" }}
  isAvailable={false}
/>
main
    </div>
  );
};

export default App;
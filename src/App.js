import { useState } from "react";
const user = {
  name: "Spaaaaaaaaaaaaaaace",
  imageUrl:
    "https://assetsio.reedpopcdn.com/portal-2-10-years-header.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  imageSize: 290,
};

function MyButton() {
  const [userB, setUserB] = useState(user);

  function handleClick() {
    var bac = userB;
    bac.imageSize = bac.imageSize + 1;
    console.log(bac.imageSize);
    setUserB(bac);
  }

  return <button onClick={handleClick}>Clicked {userB.imageSize} times</button>;
}

function MyButton2() {
  function handleClick2() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick2}>
      Click me
    </button>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize * 2,
          height: user.imageSize,
        }}
      />
    </>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <MyButton2 />
      <Profile />
    </div>
  );
}

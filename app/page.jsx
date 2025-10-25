import ClickButton from "./clickButton";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
  //return <h1>{CreateTitle(title)}</h1>;
  //return <h1>{`Cool ${title}`}</h1>;
}

function CreateTitle(title) {
  if (title) {
    return title;
  } else {
    return "Default title";
  }
}

export default function HomePage() {
  const names = ["Anakin Skywalker", "Ahsoka Tano", "Ezra Bridger"];

  return (
    <div>
      <header title="React" />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <ClickButton />
    </div>
  );
}

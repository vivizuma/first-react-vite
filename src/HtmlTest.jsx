function HtmlTest() {
  console.log("hello world");
  const example = "Bruh";
  const fruits = ["Melon", "Orange", "Apple", "Banana"];
  const title = "Fruits List!";

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
      <h1>Test title</h1>

      <ol className="test-list">
        <li>{example}</li>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text"></input>
      </form>
    </>
  );
}

export default HtmlTest;

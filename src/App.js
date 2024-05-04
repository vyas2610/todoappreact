import { useState } from "react";
import "./style.scss"

function App() {
  //use state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, updateItem] = useState(
    [
      {
        titile: "Title | What to  do",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      },
      {
        titile: "Title | What to  do",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      },
      {
        titile: "Title | What to  do 1",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      },
      {
        titile: "Title | What to  do",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      },
    ]
  );
  const showData = () => {
    alert(JSON.stringify({ title, desc }))
  }

  return (

    <div className="outter">
      <header>To Do App</header>
      <div className="data">
        <form onSubmit={showData}>
          <div className="form-content">
            <div className="form-data">
              <input placeholder="Enter Your Task" value={title} onInput={(event) => setTitle(event.target.value)} />
              <p><textarea placeholder="Enter Description" onInput={(e) => setDesc(e.target.value)}>{desc}</textarea></p>
              <button>Save</button>
            </div>
            <div>
            </div>
          </div>
        </form>
        <div className="details">
          <h2>Details | To Do App</h2>

          {items.map((data, index) => (

            <div className="entry" key={index}>
              <h1>{data.titile}</h1>
              <p>{data.description}</p>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;

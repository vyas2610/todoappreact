import { useEffect, useState } from "react";
import "./style.scss"
import ApiExe from "./services/ApiCalling";
import axios from "axios";

function App() {
  //use state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(null);
  async function fetchItems() {
    try {
      let ApiResponse = await ApiExe("todos");
      updateItem(ApiResponse?.data?.response);
    } catch (error) {
      console.warn(JSON.stringify(error))
    }

  }
  //Mount 

  useEffect(() => {
    fetchItems();
  }, []);


  const EditData = async (id) => {
    //  alert(id) 
    try {
      let ApiResp = await ApiExe(`todos/${id}`);
      setTitle(ApiResp.data.response.task_name);
      setDesc(ApiResp.data.response.task_desc);
      setId(id);
    } catch (error) {
      alert("Error occurs: " + JSON.stringify(error));
    }
  }
  const [items, updateItem] = useState([]);
  const DeleteData = async (id) => {
    //alert(id)
    try {
      await ApiExe(`todos/${id}`, "DELETE");
      fetchItems();
    } catch (error) {
      alert("Error occurs: " + JSON.stringify(error));
    }
  }
  const showData = async (event) => {
    event.preventDefault();
    // alert(JSON.stringify({ title, desc }))


    if (id) {
      //update
      await ApiExe(`todos/${id}`, "PUT", {
        data: {
          task_name: title,
          task_desc: desc
        },
      })

    }
    else {
      //add
      await ApiExe("todos", "POST", {
        data: {
          task_name: title,
          task_desc: desc
        },
      })
    }
    setTitle("");
    setDesc("");
    setId(null);
    fetchItems();
  }

  return (

    <div className="outter">
      <header>To Do App</header>
      <div className="data">
        <form onSubmit={showData}>
          <div className="form-content">
            <div className="form-data">
              <input placeholder="Enter Your Task" value={title} onInput={(event) => setTitle(event.target.value)} />
              <p><textarea placeholder="Enter Description" onInput={(e) => setDesc(e.target.value)} value={desc}></textarea></p>
              <button>{id ? "Update" : "Save"}</button>
            </div>
            <div>
            </div>
          </div>
        </form>
        <div className="details">
          <h2>Details | To Do App</h2>

          {items.map((data, index) => (

            <div className="entry" key={index}>
              <h1>{data.task_name}</h1>
              <p>{data.task_desc}</p>
              <button onClick={() => EditData(data.id)}>Edit</button> | <button onClick={() => DeleteData(data.id)}>Delete</button>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;

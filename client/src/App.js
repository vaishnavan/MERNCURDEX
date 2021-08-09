import React, {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [username, setUserName] = useState("");
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getpost")
    .then((res) => {
      setMyData(res.data);
    })
  }, []) 

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userPost = {
      username
    }
    axios.post("http://localhost:5000/createpost", userPost)
    .then((res) => {
      console.log(res);
    })

  }


  return (
    <div>
      <form>
        <input type="text" placeholder="enter username"  onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {myData.map((data) => {
        return(
          <div key={data._id}>
            <h1>my name is {data.username}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App

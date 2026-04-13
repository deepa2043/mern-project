import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const token = "PASTE_YOUR_TOKEN_HERE";

  // 🔹 Fetch items
  const fetchItems = () => {
    fetch('http://127.0.0.1:5002/api/items', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);
        setItems(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔹 Add item
  const addItem = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5002/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(() => {
        setTitle('');
        setDescription('');
        fetchItems();
      })
      .catch(err => console.log(err));
  };

  // 🔹 Delete item
  const deleteItem = (id) => {
    fetch(`http://127.0.0.1:5002/api/items/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(() => fetchItems())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Items List</h1>

      {/* 🔹 FORM */}
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Add Item</button>
      </form>

      <hr />

      {/* 🔹 ITEMS LIST (THIS IS items.map) */}
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button onClick={() => deleteItem(item.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default App;
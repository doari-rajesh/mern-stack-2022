import {  useState } from "react";

function App() {


  const [form,setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:4000/transaction",{
      method: 'POST',
      body: form,
    })

console.log("dsfsf");
    console.log(response);
  }

  const handleInput = (event)=>{
    console.log(event.target.value);
    setForm({...form,[event.target.name]:event.target.value})
  }



  return (
   <form onSubmit={handleSubmit}>
    <input type="number" name="amount" id=""  placeholder='Enter Transaction amount' value={form.amount} onChange={handleInput} />
    <input type="text" name="description" id="" placeholder='Enter Transaction details' value={form.description}  onChange={handleInput} />
    <input type="date" name="date" id=""  placeholder='' value={form.date} onChange={handleInput} />
    <button type="submit">submit</button>
   </form>
  );
}

export default App;

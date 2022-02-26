import React from "react"
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};


function App() {
  const [name,setName]=React.useState("")
  const [list,setList]=React.useState(getLocalStorage());
  const [isEditing,setIsEditing]=React.useState(false)
  const [editId,setEditId]=React.useState(null)
  const [alert , setAlert]=React.useState({show:false , msg: "", type:""})

  function handleSubmit(e){
    e.preventDefault();
    if(!name){
    showAlert(true,"danger","Please enter Value")
    }
    else if(name && isEditing){
    setList(
      list.map((item)=>{
        if(item === editId){
          return {...item, title:name}
        }
        return item;
      })
    )
    setEditId(null)
    setName('');
    setIsEditing(false)
    showAlert(true,"success","Value changed")
    }
    else{
      showAlert(true,"success","item added to the list")
      const newItem={id:new Date().getTime().toString(),title:name}
      setList([...list,newItem])
      setName('')
    }

  }
  function showAlert(show=false , type='', msg=''){
    setAlert({show,type,msg})
  }
  function removeItem(id){
    showAlert(true,"danger","Item removed")
    setList(list.filter(item=>item.id!==id))
  }
  function editItem(id){
    let specificItem=list.find(item=>item.id===id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  function clearList(){
    showAlert(true,"danger","Empty list")
    setList([]);
  }
  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className="section--center">
      <form className="grocery-form" onSubmit={handleSubmit}>
       {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
       <h3>Grocery Bud</h3>
       <div className="form-controls">
         <input type="text" placeholder="e.g.eggs" className="grocery" value={name} 
         onChange={(e)=>setName(e.target.value)} />
         <button type="submit" className="submit-btn">{isEditing ? 'edit' : 'submit'}</button>

      </div>
      </form>
      {list.length>0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>Clear items</button>
      </div>
      )}
    </section>
  );
}

export default App;

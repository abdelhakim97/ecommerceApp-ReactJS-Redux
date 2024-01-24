
import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [supvalue, setsupvalue] = useState(
    [
      { id: 10, nom: 'Rami', filiere: 'DEV' },
      { id: 11, nom: 'Kamali', filiere: 'DEV' },
      { id: 12, nom: 'Fahmi', filiere: 'DEV' },
      { id: 13, nom: 'Chaouki', filiere: 'DEV' }
    ]
  )
  const [valueRecher, setvalueRecher] = useState('');
  const [addvalueID, setaddvalueID] = useState('');
  const [addvalueNOM, setaddvalueNOM] = useState('');
  const [addvalueFiliere, setaddvalueFiliere] = useState('');



  const supp = (id) => {
    setsupvalue(supvalue.filter(value => value.id != id))
  }

  const handlerchangerecher = (e) => {
    setvalueRecher(e.target.value)
  }
  // /////////////////////////////////////////////////////////////

  const rechercher = () => {

    setsupvalue(supvalue.filter(value => value.id == valueRecher))

  }
  const resetSearch = () => {

    window.location.reload()
  }
  //////////////////////////////////////////////////////////////////

  const handlerchangevalueid = (e) => {
    setaddvalueID(e.target.value)
  }
  const handlerchangevaluenom = (e) => {
    setaddvalueNOM(e.target.value)
  }
  const handlerchangevaluefiliere = (e) => {
    setaddvalueFiliere(e.target.value)
  }
  const add = () => {
setsupvalue([...supvalue,{id: addvalueID, nom: addvalueNOM, filiere: addvalueFiliere}])
  }
  const Update = () => {
    setsupvalue(previous => {
      return previous.map(value => {
        if (value.id == addvalueID) {
          return { ...value, nom: addvalueNOM, filiere: addvalueFiliere }
        }
        return value
      })
    })
  }


  return (
    <div className='w-50 m-auto'>
      <br /><br />
      <h1 className='text-danger text-center'> CRUD </h1>
      <span className='row'>
        <input type='text' className='form-control col' id='Rec' placeholder="RECHERCHER" onChange={handlerchangerecher} value={valueRecher} />&nbsp;&nbsp;
        <button className='btn btn-success col' onClick={rechercher}>RECHERCHER</button> &nbsp;&nbsp;<button className='btn btn-success col' onClick={resetSearch}>RESET</button>
      </span>
      <br />
      <span className='row'>
        <input type='text' className='form-control col' placeholder="id..." onChange={handlerchangevalueid} />&nbsp;&nbsp;
        <input type='text' className='form-control col' placeholder="nom..." onChange={handlerchangevaluenom} />&nbsp;&nbsp;
        <input type='text' className='form-control col' placeholder="filiere..." onChange={handlerchangevaluefiliere} />&nbsp;&nbsp;
        <button className='btn btn-warning col' onClick={add}>Add</button>&nbsp;&nbsp;<button className='btn btn-info col' onClick={Update}>Update</button>
      </span>
      <br />
      <table className='table table-striped'>

        <thead>
          <tr><th>id</th><th>nom</th><th>filiere</th><th>Action</th></tr>
        </thead>
        <tbody>
          {supvalue.map((value) => <tr key={value.id}> <td>{value.id}</td><td>{value.nom}</td><td>{value.filiere}</td><td><button className='btn btn-danger' onClick={() => supp(value.id)}>SUPP</button></td> </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;



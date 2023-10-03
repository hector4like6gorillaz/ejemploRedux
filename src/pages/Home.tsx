import { useState } from 'react';
import {
  Typography,
} from "@mui/material";
import { Counter } from '../features/counter/Counter';
import AddIcon from '@mui/icons-material/Add'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { equal50 } from '../features/counter/counterSlice';
import { addName } from '../redux-slices/ejemplo-slice';

function Home() {
  const {value,solo50} = useSelector((state: RootState) => state.counter)
  const {name} = useSelector((state: RootState) => state.formulario)
  const dispatch = useDispatch()

  const [countLocal, setCountLocal] = useState(0)

  return (
    <>
      <Typography className="text-3xl font-bold " color="primary.dark" variant="h1">
        Home
      </Typography>
      <div>
        <button
            className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
            onClick={() => setCountLocal(count => count + 1)}>
            count is: {countLocal}
        </button>
        
        <AddIcon style={{ textAlign: "center", height: "100px" }} />
        <button style={{border:"2px solid"}} 
        onClick={()=>dispatch(equal50())}
        >igual 50</button>
        <h1 style={{fontSize:60}}>valor de 50 : {solo50} </h1>
        <input onChange={e=>dispatch(addName(e.target.value))} placeholder='ingresa tu nombre' value={name} />
        <h1 style={{fontSize:60}}>mi nombre es {name} </h1>
      </div>
      <div className="card">
        <Counter />
      </div>
    </>
  )
}
export default Home;

import { useEffect, useState } from 'react';
import MainButtons from './components/MainButtons';
import sourceData from './data';
import ShowArea from './components/ShowArea';
import Button from './components/Button';


function App() {
  const [data, setData] = useState('');
  const [inputInfo, setInputInfo] = useState('');
  
  const InputInfoHandler = (item) => {
    setInputInfo(inputInfo + item)
  }

  const equalHandler = () =>{
    let result;
    try{
      // eslint-disable-next-line
     result = Function("return " + inputInfo)();
     setInputInfo(result); 
    }
    catch(err) {
      window.alert('There is a problem with your writing format !');
      setInputInfo('');
    } 
  }

  useEffect(()=>{
    setData(sourceData);
  },[])

  return (
    <div className="container" >
      <div className="content">
      <ShowArea inputInfo={inputInfo}/>
      <div className="spread">
        <Button click={()=>setInputInfo('')}>C</Button>
        <Button click={equalHandler}>=</Button>
      </div>
      <MainButtons data = {data} clickHandler={InputInfoHandler} />
      </div>
    </div>
  );
}

export default App;

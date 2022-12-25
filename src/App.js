import React,{useState,useEffect} from 'react';
import SearchBox from './components/SearchBox';
import Container from './components/Container';
import './App.css'
function App() {

  const [words, setWords] = useState('hello')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  

  const getWords = () => {

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;

    fetch(url).then(res=>res.json()).then(data=>{

      setData(data[0])
      setLoading(true)},

      (error) => {

        setLoading(true)
        setError(error)
      })
    }
  

    useEffect( () => {

      getWords()

    },[])


  const inputVal = async () => {

    if (loading) {

      getWords();
      setWords(document.getElementById('inputId').value)
    }
  }


  useEffect( () => {

    inputVal()

  },[words])

  if (error) {
    return (<p>Error!!!</p>)
  }
  else if (!loading){
    return (<p>Loading...</p>)
  }
  else{

    return (
      <div className="App">
        <p>Dictionary</p>
        <SearchBox inputVal={inputVal} />
        <Container data={data} /> 
      </div>
    ); 
  }
}
export default App;

import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";


const url = 'https://course-api.com/react-tours-project';

function App(){
  const [isLoading, SetIsLoading] = useState(true);
  const [tours, SetTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour)=> tour.id !== id);
    SetTours(newTour);
  }

  const FetchTours = async () => {
    SetIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json()
      SetTours(tours);
    } catch (error) {
      console.log(error);
    }
    SetIsLoading(false);
  };

  //WILL envoke the fetch function in the useeffect function
  useEffect(()=>{
    FetchTours();
  },[])

  if (isLoading){
    return <main>
      <Loading/>
    </main>
  }
//to do
if(tours.length === 0){
  return <main>
    <div className="title">
      <h2>no tours left</h2>
      <button type='button' style={{marginTop:'2rem'}}
        className="btn" onClick={()=> FetchTours()}>
      </button>
    </div>
  </main>
}

  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>;
}

export default App;

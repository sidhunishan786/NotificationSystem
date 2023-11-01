import { useState } from 'react'

import './App.css'

function NotificationCard({x}) {
  console.log(x)
  return (
    <div className='border-2 border-rose-600 bg-gray-400 mx-2'>
      {x}
    </div>
  )
  
}

function App() {
  const [notificationArr, setArr] = useState([]);

  function addNotification(a) {
    
    if(notificationArr?.length<4){
      // console.log("adding notification < 4")
      setArr((arr) => {
        const t = [...arr];
        t.push(a);
        return t;
      });
      const t = setTimeout(removeNotification, 5000);
    
      
    }
    else{
      // console.log("adding notification >= 4 ");
      setArr((arr) => {
        const t = [...arr]
        t.shift()
        t.push(a)
        return t;
      });

      
    }
    
  }
  
  function removeNotification() {
    console.log("removing notification");

    setArr((arr) => {
     const t = [...arr]
     t.shift();
     console.log(t);
     return t;
    });
   
  }

  let [count,setCount]=useState(0);


  // let count=0;
  return (
    <>
    
    <div className='flex justify-center flex-wrap border-4 border-green-400'>
      {console.log(notificationArr)}
      {notificationArr.length > 0 ? (notificationArr.map((curr, idx) => <NotificationCard  x={curr} key={idx}/>)):<p>No Notification</p>}

    </div>
    <div>
    <button className='bg-red-300 border-4 border-black' 
    onClick={()=>{addNotification("notification-"+(count));setCount(count+1)}}>
      addNotification
    </button>
   

    </div>
    
    </>
  )
}

export default App

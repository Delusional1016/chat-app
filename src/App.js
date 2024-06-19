//App.js
import React from 'react';
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style={
  appContainer:`max-w-[720px] mx-auto text-center`,
  sectionContainer:`'flex flex-col h-[70vh] bg-gray-100 mt-16 shadow-xl border relative'`
}
function App() {
  const [user] = useAuthState(auth)
  //console.log(user)
  return (
    <div className= {style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat />: null}
      </section>
    
    </div>
  );
}

export default App;

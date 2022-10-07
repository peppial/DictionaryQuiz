import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import WordsPage from './pages/wordsPage'
import GetStartedPage from './pages/getStarted'
import Cookies from 'js-cookie'

function App() {

  return (<BrowserRouter>
			<Routes>
				<Route path="/words" element={<WordsPage/>}/>
        <Route path="/getstarted" element={<GetStartedPage/>}/>
       	<Route path="*" element={<Navigate to='/words'/>}/>
       </Routes>
		</BrowserRouter>)
}


export default App; 

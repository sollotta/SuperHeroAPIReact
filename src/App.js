import React, {useState } from 'react';
import Searchbar from './components/pages/Searchbar';
import CharacterCard from './components/pages/CharacterCard'; 
import SelectionList from './components/pages/SelectionList';
import Footer from './components/HeaderFooter/Footer';
import {Header} from './components/HeaderFooter/Header';

import './Fonts/AvengeroRegular-zvgl.ttf';
import './Fonts/Captainmarvel-anm9.ttf';

import './App.css'; 

//React-Bootstrap
import Container from 'react-bootstrap/Container';

// *************************************************
// slut på Import filer
//************************************************* */

 // Koden är inspirerad av Martha Sharpe live react app https://youtu.be/jbnaXzPpHBE.
 // Här på denna sidan sker själva sökfunktionen genom en funktion kopplat till const och useState för att kunna lägga till något lokalt. Är som tidigare this.setState, 
//med undatag att de inte slår samman det nya och det gamla. Genom att använda useState flera gånger kan jag deklarare flera tillståndsvariabler. 
// Här plockar jag in från övriga sidor för att visas på en och samma sida. Genom att göra så slipper användaren känslan av en hemsida utan blir mer en applikation. 
function App() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [characterList, setCharacterList]= useState(null);

    
  const getCharacter = async (characterName) => {
  const API_Key = '10158598617655435' // Här är min apinyckel vilket gör det lätt om man skulle vilja lägga ut utan att visa nyckeln. 
   setIsLoading(true); //startar sökningen
    try  {
    const response = await fetch(`https://webbkurs.ei.hv.se/~lool0009/ht2020/SuperHero/med_PHP/getfile.php?secret_key=9865341565&file=https://www.superheroapi.com/api/${API_Key}/search/${characterName}`);
    // , {
    //   method:"GET", 
    //   headers:{ Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "X-Requested-With": "XMLHttpRequest",
        
    //    }
      
    // });
    // Rad 36-43 fungerar ibland tillsammans med rad 49. Sen fungerar det inte. För att säkerställa det fungerar så körs applikationen utan och plugin måste användas.
      //Ville dock ha detta kvar som kommentar för framtida pillande med koden. 
  
        // https://cors-anywhere.herokuapp.com/ - fungerar ibland och sen icke ;) 
  
   
    const data = await response.json(); // info läggs här och inväntar på att allt hämtas. 
       if (data.response === 'error'){
       throw Error(`${characterName} finns inte eller felstavat!`);
     }
    //  console.log (data);
      else  {
            document.body.style.background='none';
          
            }
            
    const filteredData = data.results.filter(item => characterName.toLowerCase() === item.name.toLowerCase() 
    ); // filtrerar för att få en exakt match oavsett gemener eller versaler för att sedan kunna göra en sökning i api. 
 
    setCharacterList(filteredData); // skickar in det filtreade data till CharacterList. 
    console.log(filteredData);
     if(filteredData.length === 1) {
       setCharacterInfo(filteredData[0]);
     } 
     else if (filteredData.length === 0) {
      throw Error (`${characterName} en del av ett namn, klicka pa knappen inspiration och leta efter hela namnet`);
              
    } 
     else {
       setShow(true); // om det blir sant så öppnas selectionList
     }
    
    } catch (error) {
      setError(error.message); // kontaktera in felmeddelande
    }
    setIsLoading(false); // ska kontrollera state. 
    
  }
 
  
    // console.log('characterInfo', characterInfo)
   // barn till föräldrar av funktionen App tar state ner till barnen
  return (
    
    <Container fluid>
      <Header />
     
    <Searchbar error ={error} setError={setError} isLoading={isLoading} getCharacter= {getCharacter}/>
    {characterInfo && !error ? 
    <CharacterCard characterInfo={characterInfo}/> :null }   {/* conditioner om det finns information character så visas det och om inte så visas inget*/}
    <SelectionList show={show} setCharacterInfo={setCharacterInfo} characterList={characterList} setShow={setShow} />
    <Footer></Footer> 
    </Container>
    
  );
}

export default App;

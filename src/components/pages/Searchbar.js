import React, { useState } from 'react';
import './Searchbar.css';

//React-Bootstrap
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ExternalLink } from 'react-external-link';


// Här på denna sidan sker själva sökfunktionen genom en funktion kopplat till const och useState för att kunna lägga till något lokalt. Är som tidigare this.setState, 
// med undatag att de inte slår samman det nya och det gamla. Genom att använda useState flera gånger kan jag deklarare flera tillståndsvariabler
function Searchbar({ getCharacter, error, setError, isLoading }) {
const [ input, setInput ] = useState (''); 
const [open, setOpen] = useState(true);

const handleChange =(e) => { // e = event
  setError(null);
  setInput(e.target.value);
}

const handleSubmit = (e)=> {
  e.preventDefault(); // förhindrar att sidan laddas om och inget händer. 
  getCharacter(input); // det som användaren skriver i sökrutan
  setInput(''); // här kommer det som skrivs i sökrutan
}

const ref = React.createRef(); // skapar en ref som kopplas till elementet react via ref-attribut, själva ref ger oss rätten att lagra sk muterbara värden under 
// en kompontents livscykel. 
// Här är kodformen hämtat från React-bootstrap och ändrad något för att passa det syftet som jag har haft. Öven en "tänkarfunktion" när söket går till Api och hämtas upp.

  return (
  <Container> 
  <Row className='justify-content-center'>
  <Col className="col-md-6 offset-md-3">
          <Fade in={open}  style={{ color: 'white' }}>
          <div id="fade-text">
          <h1 className="fadeText">Marvels fan?  </h1><p className="fadeText">Sök din favorithjälte eller varför inte en fiende? </p>
          </div>
          </Fade>
          </Col>
  <Col className="col-md-6 offset-md-3">
   <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
       <Form.Control placeholder="ex Batman" value={input} onChange={handleChange}/>
   {error ?  <Form.Text className="text-danger">
      {error }
    </Form.Text>: null }
  </Form.Group>
  
  {isLoading ? (
    <Button className="Mychoice" variant="outline-primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Laddar...
    </Button> ): (
      <>
      
        <Button variant="outline-primary" className="Mychoice" ref={ref} onClick={() => setOpen(!open)}
        aria-controls="fade-text"
        aria-expanded={open}
        type="submit"> Sök </Button> 
             </>)}
         
          <ExternalLink href="https://superheroapi.com/ids.html">  <Button variant="outline-primary" className="Mychoice">Inspiration  </Button></ExternalLink>
          </Form> </Col>
       
    </Row>
    </Container>
    
  );

} // function Searchbar


export default Searchbar;
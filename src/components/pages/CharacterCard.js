import React, {useState} from 'react';

//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// Här på denna sidan sker själva sökfunktionen genom en funktion kopplat till const och useState för att kunna lägga till något lokalt. Är som tidigare this.setState, 
//med undatag att de inte slår samman det nya och det gamla. Genom att använda useState flera gånger kan jag deklarare flera tillståndsvariabler
function CharacterCard({characterInfo}) {
  const powers = Object.keys(characterInfo.powerstats); // denna sträng kopplas ihop det med apiets olika powersattribut genom key - varje objekt får ett naturligt eget värde.
  const [open, setOpen] = useState(false);
       // Här plockar jag ut den informationen som jag själv anser jag skulle vilja veta om en av karaktärerna. 
       // Här har jag valt att lägga in style i varje enskild kolumn. Underlättade att göra på detta vis när jag valt att jobba med react-bootstrap.
  return (
      <Container>
    <Row className='justify-content-md-center'>
           <Col>
        <Image className='heroImage' src={characterInfo.image.url} roundedCircle alt="hjälte eller fiende"  width="450" height="550"/>
        </Col>
        <Col style={{ color: 'white' }} >
        <p>Namn:  {characterInfo.name}</p>
        <p>Hemlig identitet: {characterInfo.biography['full-name']}</p>
        <p>Alter ego: {characterInfo.biography['alter-egos']}</p>
        <p>Vart föddes personen? {characterInfo.biography['place-of-birth']}</p>
        <p>Sida av lagen: {characterInfo.biography['alignment']}</p> 
        </Col>
        </Row>
        <Row className='justify-content-md-center'>
        <Col style={{ color: 'white' }}>
        <p>Styrkor/Power states:</p>
          {powers.map((item, key) => (
            <Row key={key}>
              <Col>
                <p>{item}</p> 
              </Col>
              <Col md={6}>
                <ProgressBar animated 
                  now={characterInfo.powerstats[item]}
                  label={`${characterInfo.powerstats[item]}`}
                />
              </Col>
            </Row>
            
          ))}
        </Col> 
     
    </Row>
    <Row className='justify-content-md-center'>
    <Col style={{ color: 'white' }} >
    <h4>Mer information för dig som vill nörda ner dig</h4>
    </Col>

    {/* https://react-bootstrap.github.io/utilities/transitions/ */}
  <>
  <Col> 
    <Button className="Mychoice" variant="outline-primary"
      onClick={() => setOpen(!open)}
      aria-controls="collapse-text"
      aria-expanded={open}
    >
     Mer Nörderi
    </Button>
    </Col>
    <Collapse in={open}>
      <div id="collapse-text">
      <Col style={{ color: 'white' }} >
      <p>Yrke: {characterInfo.work['occupation']}</p>
      <p>Arbetsplats: {characterInfo.work['base']}</p>
      <p>Längd: {characterInfo.appearance.height[1]}</p>
      <p>Vikt: {characterInfo.appearance.weight[1]}</p>
      <p>Ögonfärg: {characterInfo.appearance['eye-color']}</p>
      <p>Hårfärg: {characterInfo.appearance['hair-color']}</p>
     
    </Col>
      </div>
    </Collapse>
   </>
    
    </Row>
    </Container> 
  );
 
}

export default CharacterCard;
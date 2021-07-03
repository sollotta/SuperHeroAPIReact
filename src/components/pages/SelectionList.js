import React, { useState, useRef } from 'react';

//React-Bootstrap
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

//Då visa karaktärer har flera personligheter har jag valt att göra en Modal eller sk alertruta
const SelectionList = ({show, setShow, setCharacterInfo, characterList }) => {
const [selectItem, setSelectItem ] = useState();

 const handleChange = (e) => {
   setSelectItem(e.target.value) // jobbar med de ändringarna som användaren klickar i. 
 }
 const inputEl = useRef(null); // https://reactjs.org/docs/hooks-reference.html#useref
  const handleSubmit = (e) => {
    e.preventDefault();
    inputEl.current.focus();// ett av de vanligaste sätten i hooks att nå ett barn tillsammans med useRef
    let chosenOne = characterList.find(item => item.id === selectItem);
    // let chosenOne = characterList.find(item => item.key === e);
    setCharacterInfo(chosenOne); //minnesbank -> skickas till min funktion
    setShow(false);
     // characterList index visar karaktärer har fler under samma namn, dessa strängar visar alla namn och inte bara mer eller mindre slumpmässiga. 
};
// Modal är från react-boostrap och de visningar de har, kombinerat med forms radioknappar från denna sida http://react.tips/radio-buttons-in-reactjs/ refmodul
    return (
      <Modal className="MychoiceColor Mychoice" show={show}>
      <Modal.Header>
        <Modal.Title>Vem väljer du?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form  onSubmit={ handleSubmit}> 
        {characterList ? characterList.map(character => {
          return ( 
            
              <Form.Check type={'radio'} value={character.id} key={character.id}
              checked={selectItem === character.id} label={ `${character.biography['full-name']} . ${character['name']}`}
              onChange={handleChange} ref={inputEl}/>
           );
        
        }) : null }

        <Button className="Mychoice" variant="outline-primary" type='submit'>Välj</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
       
    );
  
};

export default SelectionList
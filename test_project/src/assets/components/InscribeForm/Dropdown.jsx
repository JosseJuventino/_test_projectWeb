

function Dropdown() {
  
    return (
        <>
        <label htmlFor="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </>
    );
  }
  
  export default Dropdown;
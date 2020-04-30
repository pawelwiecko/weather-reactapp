import React from 'react'


const Form  = props => {
    return (
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} placeholder="Wpisz miasto" onChange={props.change}/>
            <button>Szukaj</button>
        </form>
      );
}
 
export default Form
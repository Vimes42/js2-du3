import './estate.css';


export const Estate = (props) => {
    
    return (
      <div className="advert">
      <h1>{props.title}</h1>
      <img src={props.photo} />
      <p>{props.text}</p>
      <p>Lokace: {props.city}</p>
      <h3>Cena: {props.price} Kč</h3>
      <br/>
      <h4>Kontakt: </h4>
      <p>{props.contact.name}</p>
      <p>{props.contact.email}</p>
      <p>{props.contact.phone}</p>
      
      </div>
    )
  }
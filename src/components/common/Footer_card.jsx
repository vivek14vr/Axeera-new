

function Footer_card(prop){
return(<>
    <div className="card">
        <h2 className="card-heading">{prop.heading}</h2>
        <p className="card-para">{prop.para}</p>
    </div>
</>)
}

export default Footer_card;
import './Liste.css'
import { Link } from 'react-router-dom'

export default function Liste(props) {


    return(
        <div className="liste">
            <div>
            <input type="text" onChange={props.filter} />
            </div>
            <div className="cards">
            {
                props.searchFilter.map((item, index) => (
                <div key={index} id={index}>
                    <Link to={"/liste/"+index} className="link">
                            <h3>{item.name}</h3>
                            {/* <img src={item.card_images[0].image_url} alt="" /> */}
                    </Link>
                </div>
                ))
            }
            </div>
        </div>
    )
}
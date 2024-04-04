
import ProfilePic from './assets/amplifier3.jpg'

function Card(){
    return(
        <div className="card">
            {/* <img alt="Profile pic" className="cardImg" src="https://via.placeholder.com/150"></img> */}
            <img src={ProfilePic} className="cardImg" alt="profile picture"></img>
            <h2 className="card-title">Ajith R</h2>
            <p className="card-text" >lorem ipsum dolor sit</p>
        </div>
    );
}

export default Card;

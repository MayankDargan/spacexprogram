import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import './content.css';

class Content extends React.Component{
    render(){
        let {data} = this.props;
        let cardList = [];
        if(data.data){
            data.data.map(flight=>{
                cardList.push(
                    <Card key = {flight.flight_number} className="col-md-3">
                        <Card.Img variant="top" src={flight.links.mission_patch_small} alt={flight.mission_name}></Card.Img>
                        <Card.Body>
                            <Card.Title>{flight.mission_name} #{flight.flight_number}</Card.Title>
                            <ul className="list-group list-group-flush">
                                 <li className="list-group-item">
                                     <label><b>Mission Ids:</b></label>
                                     <span>{flight.mission_id.join()}</span>
                                 </li>
                                 <li className="list-group-item">
                                     <label><b>Launch Year:</b></label>
                                     <span>{flight.launch_year}</span>
                                 </li>
                                 <li className="list-group-item">
                                     <label><b>Successfull Launch:</b></label>
                                     <span>{flight.launch_success}</span>
                                 </li>
                                 <li className="list-group-item">
                                     <label><b>Successfull Landing:</b></label>
                                     <span>{flight.rocket.first_stage.cores[0].land_success}</span>
                                 </li>
                             </ul>
                        </Card.Body>
                    </Card>);
             });
        } else {
            cardList=[];
        }
        
         return(
             <div>
                 <CardDeck>
                 {cardList}
                 </CardDeck>
             </div>
         )
    }
}
export default Content;
import React from 'react';
import {Card, CardDeck } from 'react-bootstrap';

class Amenities extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <CardDeck>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('../media/amenities.jpg')} width="150" height="175"/>
                                <Card.Body>
                                    <Card.Title>Amenities</Card.Title>
                                    <Card.Text>
                                        Poduval Hills has Mobile Coverage. There is also power Supply and Water from check dam which is inside the property
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card>
                                <Card.Img variant="top" src={require('../media/financial.jpg')} />
                                <Card.Body>
                                    <Card.Title>Financial Help</Card.Title>
                                    <Card.Text>
                                        As of now, we have tied-up with  <i>Federal Bank</i>  for Customers to avail loan for the purchase of plots in Poduval Hills. Contact us for More details.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6" >
                            <img src={require('../media/filler.jpg')} className="img-fluid" alt="hero" />
                        </div>
                    </CardDeck>
                    
                </div> <hr />   
            </div>     
        );
    }
}

export default Amenities;
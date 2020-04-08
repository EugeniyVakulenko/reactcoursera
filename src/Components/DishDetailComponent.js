import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    details (dish) {
        return(
            <Row>
                    <div className = "col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top width="100%" src= {dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                        <CardText>{dish.description}</CardText>
                                 </CardBody>
                        </Card>
                    </div>  
                    <div className = "col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                    </div> 
               
            </Row>  
        );
    }

    renderComments(comments)
    {
        if(comments == null)
            return(<div></div>);
        else{
        const renderedComments = comments.map((item) => {
            return(
            <ul class = "list-unstyled">
            <li>
                {item.comment}
            </li>
            <li>
                --{item.author}, {item.date}
            </li>
            </ul>
            );
        });

        return (
            <div>
            <h4>Comments</h4>
                {renderedComments}
            </div>
        );
        }
    }

    render()
    {
        return(
            <div>{this.details(this.props.dish)}</div>
        );
    }

}

export default DishDetail;
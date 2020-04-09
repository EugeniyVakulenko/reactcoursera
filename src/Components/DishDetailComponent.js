import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function details (dish) {
        return(
            <Row>
                    <div className = "col-12 col-md-5 m-1">
                    {renderDish(dish)}
                    </div>  
                    <div className = "col-12 col-md-5 m-1">
                    {renderComments(dish)}
                    </div> 
               
            </Row>  
        );
    }
    function renderDish(dish)
    {
        if (dish == null)
        return(<div></div>);
        else{
            return(
                <Card>
                <CardImg top width="100%" src= {dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                     </CardBody>
            </Card>
            );
        }
    }

    function renderComments(dish)
    {
        if(dish == null)
            return(<div></div>)
        const comments = dish.comments;
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
                --{item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
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

    const  DishDetail = (props) => {
        if(props.dish == null)
        return (<div></div>)
        else
        return(
            <div className="container">{details(props.dish)}</div>
        );
}

export default DishDetail;
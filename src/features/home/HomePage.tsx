import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment,Image, Button } from "semantic-ui-react";

export default function Home (){
    return (


        <Segment inverted textAlign='center' vertial className='masthead'>
            <Container text>

                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{margginBottom:12}}/>
                </Header>
                <Header as='h2' inverted content='welcome to reactivities' />
                <Button as={Link} to='/activities' size ='huge' invertet >
                Take me to Activities
                </Button>
            </Container>

        </Segment>
    )
}
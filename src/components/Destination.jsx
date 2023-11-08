import React from 'react'
import { Button ,Card, CardText, Container} from 'react-bootstrap'
import './Destination.css'

const Destination = () => {
  const handleViewPackage = () => {
     alert('View Package button clicked');
  };
 
  return (
    <Container style={{
      display:'flex',
      flexDirection:'row'
    }}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "https://www.masaimara.com/assets/img/masai-mara.jpg" />
      <Card.Body>
        <Card.Title>MaasaiMara</Card.Title>
        <Card.Text>
        Experience the untamed beauty of the Maasai Mara, a world-renowned wildlife sanctuary in Kenya. Embark on a thrilling adventure as you witness the iconic Great Migration, where millions of wildebeest and zebras traverse the vast plains in search of greener pastures. Explore the stunning landscapes of rolling savannah, acacia-dotted plains, and meandering rivers teeming with diverse wildlife",
          
        </Card.Text>
<CardText>
  Prices : $ 264
</CardText>
        <Button onClick={handleViewPackage}> View Package</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "https://media.cnn.com/api/v1/images/stellar/prod/170720165140-kenya-beaches-diani-camels-on-the-beach-photo-courtesy-afrochic-diani-beach.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618" />
      <Card.Body>
        <Card.Title>Diani</Card.Title>
        <Card.Text>
        "Diani Beach, a tropical paradise along the Kenyan coast, beckons with its powder-white sands, crystal-clear turquoise waters, and swaying palm trees. This idyllic destination offers a perfect blend of relaxation and adventure. Stretching for miles, Diani Beach is a haven for sunseekers, water sports enthusiasts, and nature lovers alike.",
        </Card.Text>
        <CardText>
          prices : $ 364
        </CardText>
        <Button onClick={handleViewPackage}> View Package</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}


 

export default Destination
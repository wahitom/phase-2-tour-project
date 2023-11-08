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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=  "https://www.oceanbeachkenya.com/assets/images/mbanner/15a24a6716d0063d2af9331dd4fc8194.jpg"/>
      <Card.Body>
        <Card.Title>Malindi</Card.Title>
        <Card.Text>
        " Kenya's Coastal Gem. Explore pristine beaches, coral reefs, and vibrant culture. Dive into the Indian Ocean's beauty, visit historical landmarks, and savor Swahili cuisine. Discover paradise in Malindi!",

        </Card.Text>
        <CardText>
          prices :$150
        </CardText>
        <Button onClick={handleViewPackage}> View Package</Button>
      </Card.Body>
    </Card>
  

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.nairobinationalparkkenya.com/wp-content/uploads/2022/03/amboseli-NP-582x393-1.jpg"/>
      <Card.Body>
        <Card.Title>Amboseli National park</Card.Title>
        <Card.Text>
        Amboseli National Park, a jewel of Kenya's wildlife conservation, offers an awe-inspiring adventure at the foot of Mount Kilimanjaro, Africa's highest peak. With its iconic view of the snow-capped mountain serving as a backdrop to the park's vast savannah and acacia woodlands, Amboseli is a photographer's dream. This unique landscape is a sanctuary for a thriving elephant population, making it one of the best places in Africa to witness these magnificent creatures up close",
        </Card.Text>
        <CardText>
          prices : $ 200
        </CardText>
        <Button onClick={handleViewPackage}> View Package</Button>
      </Card.Body>
    </Card>
  
    </Container>
  );
}


 

export default Destination
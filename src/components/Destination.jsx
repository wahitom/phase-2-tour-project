import React from 'react'
import { Button ,Card, CardText, Container,Row,Col} from 'react-bootstrap'
import './Destination.css'

const Destination = () => {
  const handleViewPackage = () => {
     alert('View Package button clicked');
  };
  
 
  return (
    <Container style={{
            display:'flex',
      flexDirection:'column'
    }}>
        
         <Row>
          <Col>
        <Card style={{  width: '30rem'}}>
      <Card.Img variant="top" src= "https://www.masaimara.com/assets/img/masai-mara.jpg" />
      <Card.Body>
        <Card.Title >MaasaiMara</Card.Title>
        <Card.Text>
        Experience the untamed beauty of the Maasai Mara, a world-renowned wildlife sanctuary in Kenya. Embark on a thrilling adventure as you witness the iconic Great Migration, where millions of wildebeest and zebras traverse the vast plains in search of greener pastures. Explore the stunning landscapes of rolling savannah, acacia-dotted plains, and meandering rivers teeming with diverse wildlife",
          
        </Card.Text>
<CardText>
  Prices : $ 264
</CardText>
        <Button onClick={handleViewPackage}> View Package</Button>
      </Card.Body>
    </Card>
    </Col>



    <Col>
    <Card style={{  width :'30rem'}}>
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
      </Col>
      </Row>

      <Row>
        <Col>
    
    <Card style={{  width: '27rem'}}>
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
    
  </Col>

  <Col>

    <Card style={{  width: '30rem'}}>
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
    </Col>
    </Row>

    <Row>
      <Col>
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://www.gorillatrekkingugandafromkigali.com/wp-content/uploads/2020/02/lake-nakuru-national-park.jpg"/>
      <Card.Body>
        <Card.Title>Nakuru National Park</Card.Title>
        <Card.Text>
        On the floor of the Great Rift Valley, surrounded by wooded and bushy grassland, lies the beautiful Lake Nakuru National Park. Visitors can enjoy the wide ecological diversity and varied habitats that range from Lake Nakuru itself to the surrounding escarpment and picturesque ridges. Lake Nakuru National Park is ideal for bird watching, hiking,picnic and game drives.

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
      </Col>


      <Col>
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://cdn-images.go2africa.com/wp-content/uploads/2017/08/28082802/great-rift-valley-lodge-and-golf-resort-3351.jpg"/>
      <Card.Body>
        <Card.Title>Great Rift Valley Lodge</Card.Title>
        <Card.Text>
        The lodge sits at about 7,000 feet, from which elevation it enjoys magnificent views to the west and east. The Vistas stretch from the sparkling waters of Lake Naivasha to jogged volcanic crater of Mount Longonot and, beyond, the sloping shoulders of the Aberdare Mountains - Kenya's most important watershed
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      </Col>
    </Row>
      
    </Container>
  );
}


 

export default Destination
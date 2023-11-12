import "./Home.css";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

function Home() {
  return (
    <div className="content">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100%" }}
            src="https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <Carousel.Caption
            style={{ backgroundColor: "black", opacity: "50%" }}
          >
            <h3>Maasai Mara</h3>
            <p>Experience Hot air ballooning at Maasai Mara Game Reserve</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100%" }}
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <Carousel.Caption
            style={{ backgroundColor: "black", opacity: "50%" }}
          >
            <h3 className="text-white">Amboseli National Park</h3>
            <p>Experience the Big 5 </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100%" }}
            src="https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <Carousel.Caption
            style={{ backgroundColor: "black", opacity: "50%" }}
          >
            <h3>Game Drive</h3>
            <p>Experience the Amazing Game Drive</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100%" }}
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <Carousel.Caption
            style={{ backgroundColor: "black", opacity: "50%" }}
          >
            <h3>Sandy beaches</h3>
            <p>Sun bathe and get a tan on our beautiful coasts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100%" }}
            src="https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <Carousel.Caption
            style={{ backgroundColor: "black", opacity: "50%" }}
          >
            <h3>Flamingo</h3>
            <p>Experience barbies descendants at our Lake Nakuru</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ display:"flex", flexDirection:"column", textAlign:"center", paddingLeft:"150px", paddingRight:"150px", marginTop:"30px", marginBottom:"0px"}}>
        <h1> Capture Moments, Create Memories, Discover The Extraordinary</h1>
        <br/>
        <p>
          Explore iconic destinations from the comfort of your couch with our
          immersive virtual tours. Tailor your adventure with customizable
          itineraries, ensuring your journey is uniquely yours. Join our vibrant
          community of global explorers, swapping tales and tips from every
          corner of the world. Our website isn't just a platform; it's a
          treasure map leading to surprises, exclusive perks, and unforgettable
          moments. Capture memories, create connections, and embark on a journey
          where the extraordinary is just a click away. AdventureQuest Tours
          invites you to turn your screen into a portal of endless excitement.
          Ready to redefine your idea of exploration? Your adventure begins
          here!{" "}
        </p>
      </div>
      <Stack direction="horizontal" gap={3} >
        <Row
          style={{
          marginTop: "30px",
           alignItems: "center",
          justifyContent: "center",
          padding:"0px"
          }}
        >
          <Col>
            <Image
              style={{
                height: "400px",
                marginLeft: "100px"
              }}
              src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              rounded
            />
          </Col>

          <Col>
            <Image
              style={{ height: "400px",padding:"0px" }}
              src="https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              rounded
            />
          </Col>

          <Col style={{padding:"0"}}>
            <h1>Pride Of Africa</h1>
            
            <Button variant="dark" className="nav-item " style={{marginTop:"30px"}}>
                <NavLink className="nav-link active text-white " aria-current="page" to="/destination">
                  View Destinations
                </NavLink>
              </Button>
          </Col>
        </Row>
      </Stack>
    </div>
  );
}

export default Home;

import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="content">
      <Carousel>
        <Carousel.Item>
          <img style={{height:"90vh", width:"100%"}} src="https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <Carousel.Caption>
            <h3>Maasai Mara</h3>
            <p>Experience Hot air ballooning at Maasai Mara Game Reserve</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"90vh", width:"100%"}} src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <Carousel.Caption style={{backgroundColor:"black", opacity:"50%" }}>
            <h3 className="text-white" >Amboseli National Park</h3>
            <p>Experience the Big 5 </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:"90vh", width:"100%"}} src="https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:"90vh", width:"100%"}} src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <Carousel.Caption>
            <h3>Sandy beaches</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;

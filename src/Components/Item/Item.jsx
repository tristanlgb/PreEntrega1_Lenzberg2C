
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Item({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>🗺️</Card.Title>
        <Card.Text>
       <p>💜{producto.name}💜</p>
        <p>{producto.precio} 💰PokeCoins💰</p>
        </Card.Text>
        <Button variant="primary">Ir a comprar🦋</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
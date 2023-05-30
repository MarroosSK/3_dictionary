import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Search, Word } from './components';
import {Container, Col, Row} from "react-bootstrap"
function App() {


  return (
    <Container>
      <Row className='d-flex flex-column'>
        <Col>
          <Search/>
        </Col>
        <Col>
          <Word/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

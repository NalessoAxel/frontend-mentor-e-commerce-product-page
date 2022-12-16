import Container from '../Grid/Container';
import Col from '../Grid/Col';
import Description from './Description';
import ImageGallery from './ImageGallery';

const MainContent = () => {
    return (
        <Container>
            <Col colStart={[1, null, 6]} colEnd={[27, null, 11]}>
                <ImageGallery />
            </Col>

            <Col colStart={[3, null, 15]} colEnd={[26, null, 23]}>
                <Description />
            </Col>
        </Container>
    );
};

export default MainContent;

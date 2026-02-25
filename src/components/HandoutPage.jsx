import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import handoutsData from '../data/handouts.json';
import '../styles/HandoutPage.css';

export default function HandoutPage() {
  const { handoutId } = useParams();
  const handouts = handoutsData.handouts || [];
  const handout = handouts.find((h) => h.id === handoutId);

  if (!handout) {
    return (
      <Container className="py-5">
        <h2>Handout not found</h2>
        <Link to="/">Back to home</Link>
      </Container>
    );
  }

  return (
    <Container className="handout-page py-4">
      <section className="handout-section">
        <h2 className="handout-title">{handout.title}</h2>
        {handout.description && (
          <p className="handout-description">{handout.description}</p>
        )}
        <div
          className="handout-body"
          dangerouslySetInnerHTML={{ __html: handout.content }}
        />
      </section>
    </Container>
  );
}

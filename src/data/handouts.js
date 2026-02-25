import acneContent from '../content/acne.html?raw';
import accutaneContent from '../content/accutane.html?raw';

const handouts = [
  {
    id: 'acne',
    title: 'Acne',
    description: 'Overview, causes, skincare, diet, lifestyle, and product guide.',
    content: acneContent,
  },
  {
    id: 'accutane',
    title: 'Accutane (Isotretinoin)',
    description: 'Oral isotretinoin: how it works, side effects, iPLEDGE, and requirements.',
    content: accutaneContent,
  },
];

export default { handouts };

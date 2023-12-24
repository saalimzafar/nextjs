import sampleData from '../../sampleData.json';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(sampleData);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    default:
      res.status(400).json({ error: 'Invalid method' });
      break;
  }
}

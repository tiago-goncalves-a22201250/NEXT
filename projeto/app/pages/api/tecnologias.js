import path from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
  try {
    // Caminho absoluto para o arquivo JSON
    const filePath = path.join(process.cwd(), 'private/data/tecnologias.json');
    const data = JSON.parse(readFileSync(filePath, 'utf8'));

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao carregar o JSON:', error);
    res.status(500).json({ error: 'Erro ao carregar os dados' });
  }
}

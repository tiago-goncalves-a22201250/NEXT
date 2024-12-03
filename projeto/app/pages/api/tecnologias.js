import tecnologias from '@/private/data/tecnologias.json'; // Caminho correto para o arquivo JSON

export default function handler(req, res) {
  // Responder com os dados do JSON
  res.status(200).json(tecnologias);
}

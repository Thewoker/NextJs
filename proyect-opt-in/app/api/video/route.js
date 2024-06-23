// pages/api/video.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = await req.body;
            console.log('Received data:', data);
            return res.status(200).json({ message: 'Data received successfully' });
        } catch (error) {
            console.error('Error processing data:', error);
            return res.status(500).json({ error: 'An error occurred while processing the data' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
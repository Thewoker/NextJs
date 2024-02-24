import express from "express";
import cors from "cors";
//SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: 'TEST-7373318849361265-012514-a1ee71223273fedc81314b9bdf6accf7-405961080'
})

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(200);
})

app.post('/api/checkout', async (req, res) => {
    try {
        const body = {
            items: [
                {
                    id: req.body.id,
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "CLP"
                },
            ],
            back_urls: {
                success: 'https://www.youtube.com/',
                failure: 'https://www.youtube.com/',
                pending: 'https://www.youtube.com/'
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la preferencia : ('});
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
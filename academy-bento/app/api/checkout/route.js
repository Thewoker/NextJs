import { MercadoPagoConfig, Preference } from 'mercadopago';
import mercadopago from "mercadopago";
import { useAuthContext } from '@/contexts/AuthContext'

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
});

const URL = "http://localhost:3000";

export async function POST(req) {
    try {
        const preference = {
            items: [
                {
                    title: "prueba",
                    unit_price: 10,
                    quantity: 1,
                    // title: req.body.product.title,
                    // unit_price: req.body.product.price,
                    // quantity: 1
                },
            ],
            auto_return: "approved",
            back_urls: {
                success: `${URL}`,
                failure: `${URL}`,
            },
            notification_url: `${URL}/api/notify`,
        };

        const response = await mercadopago.preferences.create(preference);

        return new Response(JSON.stringify({ url: response.body.init_point }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
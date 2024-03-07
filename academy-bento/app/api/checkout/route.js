import { MercadoPagoConfig, Preference } from 'mercadopago';
import mercadopago from "mercadopago";
import { useAuthContext } from '@/contexts/AuthContext'

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
});

const URL = "https://fresh-man-u.vercel.app/";

export async function POST(req) {
    const data = await req.json()
    
    try {
        const preference = {
            items: [
                {
                    title: data.title,
                    unit_price: data.price,
                    quantity: 1
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
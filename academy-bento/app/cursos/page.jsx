import Page from './page.client'
import { MercadoPagoConfig, Preference } from 'mercadopago';

function page() {
  const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

  
  //use server
  async function buy(courseData, plan) {
    'use server'

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: courseData.slug,
            title: courseData.title,
            quantity: 1,
            unit_price: Number(plan)
          }
        ],
      }
    })
      .then(console.log)
      .catch(console.log);

    console.log(courseData)
  }
  return <Page buy={buy} />
}

export default page
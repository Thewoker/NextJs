import React from 'react'

function BloqueOcho() {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-24 md:pt-24 max-md:h-full gap-5 pb-5 max-md:p-5'>
            <div className='flex justify-center items-center'>
                <img src="./imgs/landing-3/ojos.jpg" className='md:h-1/6 md:w-1/6 max-md:w-1/2' alt="" />
            </div>
            <div className='w-full'>
                <h2 className='text-center text-2xl'>
                <b className='text-4xl'>COMO LO HACEMOS?</b><br />
                <b >SABEMOS QUE TU TIEMPO ES VALIOSO POR ESO HACEMOS PASO A PASO   TODOS ESTO POR VOS</b> <br /><br /><br />
                <b className='text-[#0000ff] md:text-4xl max-md:text-3xl'>10 SERVICIOS CLAVE PARA VENDER TU DEPARTAMENTO ACTUAL</b>
            </h2>
            </div>
            {/* inicio tarjetas */}
            <div className='flex w-full justify-center'>
                <h3 className='text-center text-xl pt-6 w-1/2'>DESCRIPCION DEL SERVICIO</h3>
                <h3 className='text-center text-xl pt-6 w-1/2'>VALORIZACIÓN DEL SERVICIO</h3>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        <b> 1. ESCUCHA ACTIVA</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Queremos conocer  tus objetivos y los de tu familia. Por que queres vender? Estan todos de acuerdo, se agrando la familia, buscas algo mas cómodo, queres tranquilidad, funcionalidad.  Hace cuanto tenes tu propiedad en venta. <br /><br />
                        </li>
                        <li>
                            Que  te gustaria comprar, con que características, en que barrio. Cual es tu presupuesto
                        </li>
                    </ul>
                </div>
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>

                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>2. TASACION PROFESIONAL y ACTUALIZADA + RETASACION</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Determinación rigurosa de tus competidores en el área cercana
                        </li>
                        <li>
                            Entender el precio al que están publicadas (haciendo una comparación justa que contemple los mts2 homogéneos,  antigüedad de publicación)
                        </li>
                        <li>
                            Evaluar en nuestras bases de datos el precio de cierre efectivo al que se han vendido
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center '>
                    <p className='md:text-3xl max-md:text-xl max-md:text-center text-white'> ✅ 1+2 VALORIZADO EN USD <span className='text-[#00ff00]'><b>100</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>3. HOME REFRESH</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Determinamos que arreglos de bajo costo y alto impacto hay que  hacer para mejorar la primera impresión de tu departartamento.
                        </li>
                        <li>
                            Nuestro equipo realizara los arreglos de pintura que se necesiten, efectuara limpieza y orden.
                        </li>
                        <li>
                            Armaremos una experiencia sensorial superadora para cuando la propiedad sea visitada
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN USD <span className='text-[#00ff00]'><b>450</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>4. PACK DE IMÁGENES PROFESIONAL</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Contratamos un estudio de fotografía profesional para que haga imágenes de alta calidad.
                        </li>
                        <li>
                            Fotos, Video, Tour Virtual 360°
                        </li>
                        <li>
                            Plano y Fotografias con amoblamiento virtual para resaltar las virtudes de tu propiedad y que  se destaque
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN USD <span className='text-[#00ff00]'><b>300</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>5. MEGAFONO COMERCIAL</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Publicamos en 10 portales inmobiliarios
                        </li>
                        <li>
                            Publicamos en los portales mas importantes con AVISOS SUPER DESTACADOS PREMIER
                        </li>
                        <li>
                            Invertimos en Instagram y Google Ads.
                        </li>
                        <li>
                            Promocionamos su propiedad en REDES con miles de colegas inmobiliarios.
                        </li>
                        <li>
                            Colocamos cartel
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN USD <span className='text-[#00ff00]'><b>700</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja relative'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>6. RESPUESTA  RAPIDA</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Atendemos consultas en el termino de 3hs. Coordinamos visitas  max 48 hs (*)
                        </li>
                        <li>
                            Proveemos Experiencias sensoriales para que la visita sea  cautivante a los sentidos  <br /><br />
                        </li>
                    </ul>
                    <p className='text-xs absolute right-0 bottom-0'>(*) dependiendo de la disponibilidad del cliente</p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>100</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>7. BUSQUEDA ACTIVA</b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Simultáneamente a la venta de tu departamento hacemos una selección de propiedades de acuerdo a las características  / barrio / precio y comodidades que nos mencionaste en la entrevista inicial.
                        </li>
                        <li>
                            Organizamos las visitas en los horarios que mas te convengan.
                        </li>
                        <li>
                            Estas visitas permitirán que te hagas una idea solida de lo que te gusta, a que precio probable lo pagaras y cuanto es la diferencia que deberás invertir
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN USD <span className='text-[#00ff00]'><b>300</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>8. NUMEROS CRISTALINOS</b>
                    </p>
                    <p className='pl-3'>Determinamos:</p>
                    <ul className='pl-3'>
                        <li>
                            Precio Viable de Venta PVV  de tu propiedad
                        </li>
                        <li>
                            Precio Probable de Compra PPC de lo que queres comprar
                        </li>
                        <li>
                            Gastos e impuestos
                        </li>
                        <li>
                            Diferencia cash a invertir
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>100</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>
                            9. VISIBILIZACION. TEMAS LEGALES Y CONTABLES
                            ABOGADO PARA CONSULTA LEGAL. CONTADOR PARA CONSULTAS ESPECIFICAS
                        </b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Te adelantamos todos los pasos de la operación para que tengas visibilidad y tranquilidad.
                        </li>
                        <li>
                            Nos ocupamos de todos los documentos y temas legales  RESERVA AD REFERENDUM ( la venta se concreta condicionada a que puedas encontrar tu nueva casa), REFUERZO, BOLETO,  ACUERDO DE COMODATO ( para que puedas mudarte una vez que ya tengas tu nueva casa)
                        </li>
                        <li>
                            Ponemos a tu disposición un Abogado  para que puedas hacerle todas las consultas  especificas, por ejem  temas sucesorios entre otros  (Comunicación telefónica 2 consultas)
                        </li>
                        <li>
                            Ponemos a tu disposición un Contador para que puedas hacerle todas las consultas especificas que tengas, por ejem blanqueo de capitales, origen de fondos, montos de escrituración etc.  (Comunicación telefónica: 2 consultas)
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>250</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>
                            10. FIRMA SEGURA <br />
                            ESCRIBANA DE REPUTACION + CAJA DE SEGURIDAD
                        </b>
                    </p>
                    <ul className='pl-3'>
                        <li>
                            Ponemos a tu disposición una Escribana de excelente reputación a una tasa de honorarios diferencial de 1,1% + IVA (*) permitiéndote ahorrar  cuantiosas sumas Vs la tarifa estándar de Escribanos.
                        </li>
                        <li>
                            Te proveemos de una caja de seguridad privada ( No bancaria) por un mes para que puedas hacer tus movimientos de dinero con tranquilidad y en partes. Tambien una SALA ULTRA-SEGURA en el edificio de cajas de seguridad para la firma de la escritura
                        </li>
                    </ul>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center'>
                    <p className='text-3xl text-white max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  HASTA USD <span className='text-[#00ff00]'><b>1700</b></span></p>
                </div>
            </div>


            <h2 className='text-center mt-36 p-2 bg-yellow-300'>
                <b className='text-4xl'>SERVICIOS BONIFICADOS PARA TU NUEVO DEPARTAMENTO</b><br />
            </h2>
            <div className='flex w-full justify-center'>
                <h3 className='text-center text-xl pt-6 w-1/2'>DESCRIPCION DEL SERVICIO</h3>
                <h3 className='text-center text-xl pt-6 w-1/2'>VALORIZACIÓN DEL SERVICIO</h3>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>MUDANZA SIN STRESS</b>
                    </p>
                    <p className='text-center'>
                        Te recomendamos una compañía de mudanza a precios muy competitivos y te BONIFICAMOS el servicio de empacado y guardado en canastos de todas las cosas de tu casa!! Te empacan toda tu ropa, tu vajilla y hasta lo que tenes dentro de la heladera!.Vos no haces Nada!
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-yellow-300 flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>300</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>DEPOSITO DE MUEBLES FACIL</b>
                    </p>
                    <p className='text-center'>
                        Te damos sin cargo un deposito por un mes para que puedas guardar los muebles que te sobran asi tenes tiempo de venderlos tranquilo.
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-yellow-300 flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>200</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>PINTURA DE TU NUEVA CASA</b>
                    </p>
                    <p className='text-center'>
                        Ponemos a tu disposición un pintor para que pinte tu nueva casa.
                        Cubrimos el costo integro de la mano de obra.
                        NO Cubrimos el costo de los materiales, para que puedas elegir los colores y la calidad que te guste
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-yellow-300 flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-[#00ff00]'><b>600</b></span></p>
                </div>
            </div>

            <div className='flex flex-col w-full gap-10 pt-16'>
                <h2 className='text-6xl'><b>...Por si fuera poco!</b></h2>
                <h2 className='text-4xl text-center'>BONUS ESPECIALES X 72 HS PARA TU NUEVO DEPARTAMENTO</h2>
            </div>
            <h2 className='text-4xl text-center bg-[#00ff00] p-2'>35% de descuento en el valor de la mentoría</h2>

            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>AIRE ACONDICIONADO</b>
                    </p>
                    <p className='text-center'>
                        Ponemos a tu disposición un técnico y te cubrimos el gasto de la colocación de un (1)  aires acondicionados de hasta 2500 frigorias. Materiales y Mano de obra
                        ( No incluye refuerzo de instalación eléctrica)
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#00ff00] flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className='text-black'><b>350</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>DECORADORA</b>
                        Ponemos a tu disposición una Decoradora Profesional para que te de ideas y sugerencias para amoblar y decorar tu nueva casa.
                    </p>

                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#00ff00] flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className=''><b>250</b></span></p>
                </div>
            </div>
            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center'>
                        {/* titulo tarjeta */}
                        <b>Bono para que compres decoración y muebles <br /></b>
                        Te entregamos un bono por USD 300 para que compres los accesorios de decoración y/o muebles para tu nueva casa
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#00ff00] flex justify-center items-center'>
                    <p className='text-3xl max-md:text-xl max-md:text-center'>✅ VALORIZADO EN  USD <span className=''><b>300</b></span></p>
                </div>
            </div>

            <h2 className='text-center text-6xl pt-10'><b>Mentoria</b></h2>

            <div className='flex w-full sombra-caja'>
                <div className='w-1/2 p-3 borde-caja'>
                    <p className='text-center text-4xl'>
                        {/* titulo tarjeta */}
                        <b>Valor total entregado <br /></b>
                    </p>
                </div>
                {/* parte celeste */}
                <div className='w-1/2 bg-[#0000ff] flex justify-center items-center py-5'>
                    <p className='text-4xl text-white max-md:text-xl max-md:text-center'>✅ USD <span className=''><b>6000</b></span></p>
                </div>
            </div>
            <img src="/imgs/landing-3/down-arrow-light-blue.svg" className='w-[15%] h-[15%] p-10' alt="" />
            <h2 className='text-2xl text-center'><b className='text-5xl text-[#ff0000]'>Pero solo pagaras USD 977</b> ( por 72 hs, luego USD 1500)</h2>
        </div>
    )
}

export default BloqueOcho
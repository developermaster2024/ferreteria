import ProductHomeInfo from "../components/Product/ProductHomeInfo";
import SliderCajaProduct from "../components/Product/SliderCajaProduct";
import CuadroPago from "../components/Generico/CuadroPago";
import { FaStoreAlt } from "react-icons/fa";
import ButtonCountCompra from "../components/Generico/ButtonCountCompra";
import SliderMarcaSimilar from "../components/Generico/SliderMarcaSimilar";
import Tab from "../components/Generico/Tab";
import TabsContainer from "../components/Generico/TabsContainer";
import TabPanel from "../components/Generico/TabPanel";
import { TabsProvider } from "../components/contexts/TabsContexts";
import DescripcionProd from "../components/Generico/DescripcionProd";
import VendedorProd from "../components/Generico/VendedorProd";
import PreguntaRespuesta from "../components/Generico/PreguntaRespuesta";
import Especificaciones from "../components/Generico/Especificaciones";
import SliderProdRelacionado from "../components/Generico/SliderProdRelacionados";

const ProductDescrip = () => {
    return (
        <div>
            <div className="md:flex w-full h-full sm:p-11 p-4 bg-white">
                <div className="lg:w-4/12">
                    <SliderCajaProduct />
                </div>
                <div className="lg:w-5/12 bg-white">
                    <ProductHomeInfo />
                </div>
                <div className="lg:w-3/12 p-4">
                    <CuadroPago />
                    <div className="py-6 ml-2 flex">
                        <FaStoreAlt className="flex h-6 w-6" />
                        <h2 className="ml-4">Vender en el Marketplace?
                            <p className="text-blue-500 cursor-pointer">Registrate ahora!</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:justify-end mt-4">
                <ButtonCountCompra />
            </div>
            <div className="p-4">
                <SliderMarcaSimilar />
            </div>
            <div>
                <TabsProvider>
                    {/* Tabs */}
                    <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
                        <Tab value={0}>Description</Tab>
                        <Tab value={1}>Especificación</Tab>
                        <Tab value={2}>Vendedor</Tab>
                        <Tab value={3}>Preguntas Frecuentes</Tab>
                    </TabsContainer>

                    {/* TAB PANELS */}
                    <div className="mt-4 md:p-4">
                        {/* Descripción */}
                        <TabPanel
                            className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                            value={0}
                        >
                            <DescripcionProd title={"Cerradura suelta - Titulo"} parrafo={"mbodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."} />
                        </TabPanel>

                        {/* Especificación */}
                        <TabPanel
                            className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                            value={1}
                        >
                            <Especificaciones color={"Oro"} dimensiones={"5.5 x 5.5 x 9.5 inches"} marcas={"Casi"} status={"Status"} />
                        </TabPanel>

                        {/* Vendedor */}
                        <TabPanel
                            className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                            value={2}
                        >
                            <VendedorProd title={"GoPro"} parrafo={"Digiworld US, New York’s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online"} />
                        </TabPanel>

                        {/* Preguntas Frecuentes */}
                        <TabPanel
                            className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                            value={3}
                        >
                            <PreguntaRespuesta title={"Preguntas y Respuestas"} />
                        </TabPanel>
                    </div>
                </TabsProvider>
            </div>
            <div className="p-4">
                <SliderProdRelacionado />
            </div>
        </div >

    );
}

export default ProductDescrip;
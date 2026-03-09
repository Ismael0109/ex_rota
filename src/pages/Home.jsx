import CarouselHome from "../components/Carousel"
import Card from "../components/Card"
function Home() {
    return (
        <div className="container">
            <CarouselHome />
            <h2>Informações</h2>
            <div className="grid">
                <Card
                    titulo="Nanomedicina Direcionada"
                    texto="Desenvolvimento de sistemas de entrega de fármacos que liberam medicamentos diretamente nas células doentes."
                    imagem="https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?q=80&w=400"
                />
                <Card
                    titulo="Nanofabricação de Semicondutores"
                    texto="Criação de circuitos integrados em escala atômica para processadores de próxima geração."
                    imagem="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
                />
                <Card
                    titulo="Síntese de Grafeno"
                    texto="Produção de folhas de carbono com espessura de um átomo para aplicações em eletrônica e filtros."
                    imagem="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=400"
                />
                <Card
                    titulo="Sensores de Nanopartículas"
                    texto="Sensores ultrassensíveis para detecção imediata de patógenos ou contaminantes ambientais."
                    imagem="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=400"
                />
                <Card
                    titulo="Revestimentos Hidrofóbicos"
                    texto="Aplicação de nanoestruturas superficiais que repelem água, óleos e sujeira permanentemente."
                    imagem="https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=400"
                />
                <Card
                    titulo="Remediação Ambiental"
                    texto="Uso de nanopartículas de ferro para neutralizar metais pesados em águas subterrâneas."
                    imagem="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=400"
                />
                <Card
                    titulo="Nanocosméticos"
                    texto="Encapsulamento de princípios ativos para maior penetração e eficácia em camadas profundas da pele."
                    imagem="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=400"
                />
                <Card
                    titulo="Têxteis Inteligentes"
                    texto="Integração de nanofibras que permitem regulação térmica e monitoramento de sinais vitais."
                    imagem="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400"
                />
                <Card
                    titulo="Armazenamento de Energia"
                    texto="Desenvolvimento de supercapacitores e baterias baseados em nanotubos de carbono."
                    imagem="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400"
                />
                <Card
                    titulo="Impressão 3D em Nanoescala"
                    texto="Manufatura aditiva de objetos complexos com precisão de nanômetros para microfluídica."
                    imagem="https://images.unsplash.com/photo-1631034304631-03099907157a?q=80&w=400"
                />
                <Card
                    titulo="Óptica de Metamateriais"
                    texto="Criação de lentes planas e dispositivos de invisibilidade baseados em nanoestruturas de luz."
                    imagem="https://images.unsplash.com/photo-1509063919429-172973859d8c?q=80&w=400"
                />
                <Card
                    titulo="Nanobiotecnologia Agrícola"
                    texto="Fertilizantes de liberação lenta e nanopesticidas que reduzem o impacto ambiental."
                    imagem="https://images.unsplash.com/photo-1473976140397-f584e0946145?q=80&w=400"
                />
            </div>
        </div>
    )
}
export default Home
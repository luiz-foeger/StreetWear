import estilos from './Roleta.module.css';

const logos = [
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751029957/f5720f3f-e647-45f8-9803-8e23c6d46869.png',
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751030267/logo_oie05r.svg',
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751028975/11622663-42c4-4f18-b8b6-65b399877e33.png',
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751029103/dcb3a835-2a6f-4c14-a291-5a3ec2402181.png',
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751029130/04cdb240-c3ed-4232-b82b-3d596b05aa34.png',
    'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1751029133/2273925c-5f14-4c43-93a0-3e6559ed0b13.png',
    'https://dillysports.vtexassets.com/assets/vtex.file-manager-graphql/images/7a6e90ac-c1db-4bff-b1d1-6c7fe860934f___b41fa0e8edc040b1bc78a4f176f6278f.svg',
    'https://kingspider.co/cdn/shop/files/OG_V2_GRAPHIC_STRAIGHT_9e2a95e2-bdab-4b36-ab0c-25f03f90dd96.png?v=1715352359&width=180',
    'https://tse4.mm.bing.net/th/id/OIP.DShrQY9CskblMTIIEl3mAQAAAA?rs=1&pid=ImgDetMain',
    'https://www.deathwishskateboards.com/cdn/shop/files/blk.png?v=1725091924&width=240',
    'https://logodix.com/logo/310439.png',
    'https://creatureskateboards.com/images/logos/creature-skateboards-320.gif',
    'https://primitiveskate.com/cdn/shop/files/Primitivelogo_ea7fc8fb-f83b-4c00-8344-99e0d2091af5_299x89.jpg?v=1628100255',
]

const Roleta = () => (
    <div className={estilos.carrosselContainer}>
        <div className={estilos.carrossel}>
            {[...logos, ...logos].map((logo, idx) => (
                <img key={idx} src={logo} alt="Logo marca" className={estilos.logo} />
            ))}
        </div>
    </div>
);

export default Roleta;

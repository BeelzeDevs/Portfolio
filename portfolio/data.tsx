import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Server, Monitor } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@BeelzeDevs",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ignacio-aprile/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "",
    },
    {
        id: 4,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Projects",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 5,
        title: "Contact",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [ 
    
    {
        id: 1,
        title: "Freelance Developer",
        subtitle: "freelancer.com.ar",
        description: "Colaborar con equipos dinámicos para desarrollar webs funcionales que impulsan el éxito de nuestros clientes en el mundo digital.",
        date: "May 2025 ",
    },
    {
        id: 2,
        title: "Ingeniero de Software",
        subtitle: "Nexina S.A",
        description: "Analizar los requerimientos funcionales, liderar y crear soluciones de software para el éxito de la empresa",
        date: "Oct 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Server />,
        title: "APIs",
        description: "Diseño y desarrollo de APIs seguras, escalables y fáciles de mantener para integrar sistemas y servicios",
    },
    {
        icon: <Monitor />,
        title: "Aplicaciones de escritorio",
        description: "Creación de aplicaciones de escritorio robustas y eficientes, adaptadas a las necesidades específicas de tu negocio",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas",
    },
];

export const dataPortfolio = [
    {
        id: 0,
        title: "Notes Full Stack",
        gif: "/Notas.gif",
        descripcion:"Página full-stack con Notas y sus Categorías: Backend:.Net 8.0, Frontend:Next.js/Typescript, git bash script para inciar. Css Tailwind.",
        urlGithub: "https://github.com/BeelzeDevs/Notas-Net-Next",
        urlDemo: "",
        urlYoutube:"",
    },
    {
        id: 1,
        title: "React Movie",
        gif: "/beelzemovie.gif",
        descripcion:"Página series y películas consumiendo Api de themoviedb. Deploy Vercel",
        urlGithub: "https://github.com/BeelzeDevs/ReactMovie",
        urlDemo: "https://beelzemovie.vercel.app",
        urlYoutube:"",
    },
    {
        id: 2,
        title: ".Net Core API REST",
        descripcion:"API RESTful para backend de software gastronómico. Deploy Neon.Tech y Render",
        gif: "/tiendaNetApi.PNG",
        urlGithub: "https://github.com/BeelzeDevs/Backend-TiendaNetAPI",
        urlDemo: "https://backend-tiendanetapi.onrender.com/swagger/index.html",
        urlYoutube:""
    },
    {
        id: 3,
        title: "Node API REST",
        descripcion:"API RESTful para backend de tienda e-commerce con 3 niveles: Admin, Proveedor, Cliente.",
        gif: "/nodeTienda.PNG",
        urlGithub: "https://github.com/BeelzeDevs/NodeTienda/tree/main/NodeTienda",
        urlDemo: "",
        urlYoutube:""
    },
    {
        id: 4,
        title: "Net 8 Pizza Web",
        descripcion:"Web de delivery de Pizza utilizando .Net 8",
        gif: "/pizzanet.gif",
        urlGithub: "https://github.com/BeelzeDevs/PizzaNet",
        urlDemo: "",
        urlYoutube:""
    },
    {
        id: 5,
        title: "Visual Basic Desktop App ",
        descripcion:"Participación en la competencia de 5 días para la creación de software de empresa. CRUD + Crystal Reports",
        gif: "/vbasic-beelze.gif",
        urlGithub: "https://github.com/BeelzeDevs/VBasicTacticSoft",
        urlDemo: "",
        urlYoutube:""
    },
    {
        id: 6,
        title: "Análisis de Datos",
        descripcion:"Análisis dataframes: petrolera.csv y marvel.csv",
        gif: "/análisis.png",
        urlGithub: "https://colab.research.google.com/drive/1iEWijNQ5vHtvFUahu3Ui1LT3nhL5TSUi?authuser=1#scrollTo=TY818dgTCiRa",
        urlDemo: "",
        urlYoutube:""
    },
    {
        id: 7,
        title: "ASP.Net framework",
        descripcion:"Proyecto del 2020 con .net framework 4.7.2",
        gif: "/aspnetframework.gif",
        urlGithub: "https://github.com/BeelzeDevs/Aplicacion-web-ASP-NET",
        urlDemo: "",
        urlYoutube:""
    }
];


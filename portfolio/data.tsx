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

export type IconKey =
  | "python"
  | "csharp"
  | "dotnet"
  | "node"
  | "react"
  | "net8"
  | "typescript"
  | "tailwind"
  | "bash"
  | "vite"
  | "vue"
  | "next"
  | "postgreSql"
  | "sqlServer"
  | "jwt"
  | "pandas"
  | "crystal"
  | "openapi"
  | "docker"
  | "pinia"
  | "vuerouter"
  | "chart"
  | "entity"
  | "apirest"
  | "reactRout"
  | "express"
  | "sequelize"
  | "blazor"
  ;

export const labels : Record<string,LabelType> = {
    next : {id: 111, name :"Next.js",color : "bg-blue-500",icon: "next" },
    typescript : {id:112, name: "Typescript", color: "bg-blue-800", icon: "typescript"},
    react : {id:113, name: "React.js", color: "bg-blue-600", icon: "react"},
    tailwind : {id :114, name: "Tailwind", color : "bg-sky-700/50", icon: "tailwind"},
    node: {id:115, name:"Node", color: "bg-indigo-600", icon: "node"},
    bash : {id:116, name: "Bash", color:"bg-amber-500", icon: "bash"},
    net8: {id:117, name:".Net 8.0", color: "bg-indigo-600",icon: "net8"},
    csharp: {id:118, name:"C#", color: "bg-indigo-600",icon: "csharp"},
    python: {id:119, name:"Python", color: "bg-indigo-600", icon: "python"},
    vbasic : {id:120, name:"Visual Basic", color:"bg-indigo-600", icon: "pandas" },
    vite : { id: 121, name:"Vite", color:"bg-emerald-500", icon: "vite"},
    vue : { id: 122, name:"Vue.js", color:"bg-emerald-500", icon: "vue"},
    crystal : {id: 123, name:"Crystal Reports", color:"bg-sky-700", icon: "crystal"},
    netFrame : {id:124, name:".Net Framework",color:"bg-violet-400", icon: "net8"},
    apiExterna : {id:125,name:"Api Externa", color:"bg-amber-500", icon: "openapi"},
    
    postgreSql : {id:126, name: "PostgreSql", color: "bg-sky-600", icon: "postgreSql"},
    sqlServer : {id:127, name:"SqlServer", color:"bg-sky-600", icon: "sqlServer"},
    jwt : {id:128, name:"JWT", color:"bg-sky-600", icon: "jwt"},

    dataAn: {id:150,name:"Data Analitics", color:"bg-green-500", icon: "pandas"},
    
    docker: {id:151,name:"Docker", color:"bg-violet-500", icon: "docker"},
    pinia: {id:152,name:"Pinia", color:"bg-emerald-500/80", icon: "pinia"},
    vueRout: {id:153,name:"Vue Router", color:"bg-emerald-500/90", icon: "vuerouter"},
    chart: {id:154,name:"Chart.js", color:"bg-violet-500", icon: "chart"},
    entity: {id:155,name:"Entity Framework", color:"bg-violet-500", icon: "entity"},
    apirest: {id:156,name:"ApiRestFull", color:"bg-violet-500", icon: "apirest"},
    reactRout: {id:157,name:"React Router", color:"bg-violet-500", icon: "reactRout"},
    express: {id:158,name:"Express", color:"bg-violet-500", icon: "express"},
    sequelize: {id:159,name:"Sequelize", color:"bg-violet-500", icon: "sequelize"},
    blazor: {id:160,name:"Blazor", color:"bg-violet-500", icon: "blazor"},
};

export type LabelType = {
    id : number,
    name : string,
    color : string,
    icon : IconKey,
};


export const dataPortfolio = [
    {
        id:1,
        title:"Ecommerce vue",
        gif:"/ecommerce-vue.gif",
        descripcion: "Página full-stack de un Ecommerce lado cliente y administrador, Frontend: Vue/Typescript, Backend: .Net 8.0 c/ resultados paginados, DB: PostgreSQL, Docker como empaquetador, Css Tailwind. Usuarios: ignacio@admin.com y cliente@cliente.com",
        urlGithub : "https://github.com/BeelzeDevs/e-commerce-vue",
        urlDemo: "https://e-commerce-vue-front.onrender.com",
        urlBackend : "https://e-commerce-vue.onrender.com",
        urlYoutube: "",
        badges: [labels.vite,labels.vue, labels.typescript, labels.postgreSql, labels.net8,labels.tailwind, labels.docker,labels.pinia,labels.vueRout,labels.chart,labels.entity,labels.apirest, labels.csharp]
    },
    {
        id: 2,
        title: "Notes Full Stack",
        gif: "/Notas.gif",
        descripcion:"Página full-stack con Notas y sus Categorías: Backend:.Net 8.0, Frontend:Next.js/Typescript, DB: PostgreSQL, git bash script para inciar y Css Tailwind.",
        urlGithub: "https://github.com/BeelzeDevs/Notas-Net-Next",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.next, labels.typescript,labels.tailwind,labels.bash,labels.postgreSql,labels.csharp,labels.net8,labels.entity,labels.apirest],
    },
    {
        id: 3,
        title: "React Movie",
        gif: "/beelzemovie.gif",
        descripcion:"Página de series y películas, creada con Vite/React, consumiendo Api de themoviedb. Deploy Vercel y Css Tailwind.",
        urlGithub: "https://github.com/BeelzeDevs/ReactMovie",
        urlDemo: "https://beelzemovie.vercel.app",
        urlYoutube:"",
        badges : [labels.react,labels.tailwind,labels.vite,labels.apiExterna, labels.reactRout],
    },
    {
        id: 4,
        title: ".Net Core API REST",
        descripcion:"API RESTful para backend de software gastronómico. DB: PostgreSQL o SQL Server.Deploy Neon.Tech y Render",
        gif: "/tiendaNetApi.PNG",
        urlGithub: "https://github.com/BeelzeDevs/Backend-TiendaNetAPI",
        urlDemo: "https://backend-tiendanetapi.onrender.com/swagger/index.html",
        urlYoutube:"",
        badges : [labels.net8,labels.sqlServer,labels.postgreSql,labels.jwt,labels.entity,labels.apirest],
    },
    {
        id: 5,
        title: "Node API REST",
        descripcion:"API RESTful para backend de tienda e-commerce con 3 niveles: Admin, Proveedor, Cliente. DB: PostgreSQL",
        gif: "/nodeTienda.PNG",
        urlGithub: "https://github.com/BeelzeDevs/NodeTienda/tree/main/NodeTienda",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.node,labels.jwt,labels.postgreSql,labels.apirest,labels.express,labels.sequelize],
    },
    {
        id: 6,
        title: "Net 8 Pizza Web",
        descripcion:"Web de delivery de Pizza utilizando .Net 8",
        gif: "/pizzanet.gif",
        urlGithub: "https://github.com/BeelzeDevs/PizzaNet",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.net8, labels.csharp, labels.blazor],
    },
    {
        id: 7,
        title: "Visual Basic Desktop App ",
        descripcion:"Participación en la competencia de 5 días para la creación de software de empresa. CRUD + Crystal Reports",
        gif: "/vbasic-beelze.gif",
        urlGithub: "https://github.com/BeelzeDevs/VBasicTacticSoft",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.vbasic, labels.crystal],
    },
    {
        id: 8,
        title: "Análisis de Datos",
        descripcion:"Análisis dataframes: petrolera.csv y marvel.csv",
        gif: "/análisis.png",
        urlGithub: "https://colab.research.google.com/drive/1iEWijNQ5vHtvFUahu3Ui1LT3nhL5TSUi?authuser=1#scrollTo=TY818dgTCiRa",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.python, labels.dataAn],
    },
    {
        id: 9,
        title: "ASP.Net framework",
        descripcion:"Proyecto del 2020 con .net framework 4.7.2",
        gif: "/aspnetframework.gif",
        urlGithub: "https://github.com/BeelzeDevs/Aplicacion-web-ASP-NET",
        urlDemo: "",
        urlYoutube:"",
        badges : [labels.netFrame, labels.sqlServer,labels.csharp],
    }
];


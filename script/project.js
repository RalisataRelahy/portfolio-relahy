const projects = {
    "miquizz": {
        title: "Mi'Quizz",
        image: "assets/project1.png",
        description: "L'application se présente comme une solution éducative innovante spécifiquement conçue pour accompagner les lycéens français dans leur parcours scolaire, offrant une expérience d'apprentissage personnalisée qui s'adapte précisément à chaque niveau (Seconde, Première, Terminale) et à chaque série (Littéraire, Scientifique), tout en proposant des quiz chronométrés qui stimulent la concentration et la rapidité de réflexion. Grâce à ses animations dynamiques et son interface attrayante, l'application rend l'expérience d'apprentissage visuellement engageante, tandis que son système sophistiqué de suivi de progression permet aux élèves d'identifier clairement leurs forces et leurs faiblesses dans chaque matière. L'intelligence artificielle intégrée analyse les performances de l'utilisateur pour recommander intelligemment les quiz les plus pertinents à son niveau et à ses besoins spécifiques, ciblant prioritairement les domaines nécessitant davantage de révisions. Pour maintenir la motivation sur le long terme, l'application intègre judicieusement des éléments de gamification tels que des badges à collectionner, des défis quotidiens à relever et des classements optionnels qui stimulent l'esprit de compétition saine entre camarades, transformant ainsi l'effort de révision en une expérience ludique et addictive.",
        tech: ["Flutter", "Dart", "SQLite", "Lottie", "Animations"],
        githublink:"https://github.com/RalisataRelahy/mi-quizz.git"
    },
    "to-do":{
        title:"To-do app",
        image:"assets/projet4.png",
        description:"Une application interactive de gestion de tâches développée avec React et CSS Modules, permettant d’ajouter, supprimer et marquer les tâches comme faites. Les données sont persistées dans le localStorage, assurant que la liste reste disponible même après un rafraîchissement de la page. L’interface est propre, responsive et chaque composant est modulable pour faciliter la maintenance et l’évolution du projet.",
        tech:["ReactJs", "LocalStorage"],
        githublink:"https://github.com/RalisataRelahy/personalbudget.git"
    },
    "castaway": {
        title: "CAST AWAY",
        image: "assets/project2.jpg",
        description: "Le jeu se présente comme une aventure de survie en 2D pixelisée qui rend hommage à l'esthétique de Minecraft tout en proposant sa propre expérience unique, plongeant le joueur dans la peau d'un naufragé échoué sur une île énigmatique aux multiples secrets et dangers qui attendent d'être découverts.<br> Dans cet univers au charme rétro délibérément cultivé, chaque pixel a été méticuleusement placé pour créer une atmosphère à la fois nostalgique et captivante, où les ombrages et les jeux de lumière dynamiques apportent vie et profondeur à un monde en apparence simple mais étonnamment complexe. L'exploration constitue le cœur de l'expérience, invitant le joueur à s'aventurer dans des grottes mystérieuses, des forêts denses et des ruines anciennes, tout en gérant avec stratégie la construction d'un abri de plus en plus élaboré qui servira de refuge contre les dangers nocturnes et les conditions climatiques imprévisibles. Le système de récolte et de craft offre une progression satisfaisante où chaque ressource dénichée - qu'il s'agisse de bois, de pierres précieuses ou de plantes aux propriétés médicinales - permet de fabriquer des outils plus performants, des armes plus puissantes et des structures plus résistantes, créant ainsi une boucle de gameplay addictive où chaque journée virtuelle apporte son lot de défis et de récompenses. L'hostilité de l'environnement se manifeste à travers une faune sauvage agressive, des conditions météorologiques changeantes et des phénomènes mystérieux liés à l'histoire ancienne de l'île, obligeant le joueur à constamment équilibrer ses besoins immédiats de survie avec ses objectifs d'exploration à long terme, le tout dans une expérience de jeu immersive où chaque décision compte et où la mort signifie souvent perdre une partie du précieux équipement difficilement acquis.",
        tech: ["Unity", "C#", "Pixel Art", "Animation 2D"],
        githublink:"https://github.com/RalisataRelahy/Cast-away.git"
    },
    "PersonalBudget": {
        title: "Personnal Budget ou Budget Tracker (En phase de developpement)",
        image: "assets/project3.png",
        description: "Une application web développée avec VueJs et Supabase pour suivre facilement les dépenses et revenus personnels. L’utilisateur peut ajouter, modifier et supprimer des transactions, catégoriser ses dépenses et visualiser un résumé clair du budget. Les données sont persistées localement grâce au localStorage, offrant une expérience fluide et sécurisée sans besoin de backend. L’interface est intuitive et modulable pour un usage quotidien.",
        tech: ["VueJS", "SUPABASE"],
        githublink:"https://github.com/RalisataRelahy/personalbudget.git"
    },
    "BiblioTCare": {
        title: "BiblioTakeCare",
        image: "assets/project5.jpg",
        description: "Une application mobile développée avec Flutter et SharedPreferences, permettant de gérer efficacement ses livres. L’utilisateur peut ajouter, modifier, supprimer et suivre l’état de lecture de ses livres, avec une interface intuitive et responsive. Les données sont stockées localement, garantissant une utilisation rapide et hors-ligne. Chaque composant est conçu pour être modulable et facilement extensible pour de futures fonctionnalités.",
        tech: ["Flutter", "SharedPreferences"],
         githublink:"https://github.com/RalisataRelahy/BiblioTCare.git"
    },
    "Calculatrice": {
        title: "Calculatrice",
        image: "assets/project6.jpg",
        description: "Un simple calculatrice",
        tech: ["html/css", "JavaScript"],
         githublink:"https://github.com/RalisataRelahy/calculatrice.git"
    },
    "ImageProject": {
        title: "Projet de retouche d'image",
        image: "assets/project8.webp",
        description: "Passionné par la retouche photo et la création visuelle, je prends plaisir à transformer des images brutes en visuels attrayants et professionnels. J’aime explorer les couleurs, la composition et les effets graphiques pour donner vie à des projets créatifs et soigner les détails, tout en combinant sens artistique et maîtrise technique.",
        tech: ["Adobe Photoshop", "Adobe illustator","GIMP"],
         githublink:"#"
    }
};

function getProjectKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("projet");
}

function renderProjectDetails(projectKey) {
    const project = projects[projectKey];

    if (!project) {
        document.getElementById("project-details").innerHTML = `<p>Projet introuvable.</p>`;
        return;
    }

    const html = `
      <h1 class="project-title">${project.title}</h1>
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <p class="project-description">${project.description}</p>
      <div class="tech-list">
        ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join("")}
      <a href=${project.githublink}>Lien Github</a>
      </div>
    `;

    document.getElementById("project-details").innerHTML = html;
}
const Goto=(e)=>{
    window.location()
}
const projectKey = getProjectKeyFromURL();
renderProjectDetails(projectKey);

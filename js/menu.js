const listOfFact = [
    "Le saviez-vous ? Les premiers Jeux Olympiques modernes ont eu lieu en 1896 à Athènes, en Grèce.",
    "Le saviez-vous ? Les Jeux Olympiques antiques étaient célébrés en l'honneur de Zeus.",
    "Le saviez-vous ? Les femmes ont participé pour la première fois aux Jeux Olympiques en 1900 à Paris.",
    "Le saviez-vous ? Le marathon moderne a été inspiré par la légende d'un soldat grec qui aurait couru de Marathon à Athènes pour annoncer la victoire sur les Perses.",
    "Le saviez-vous ? Les Jeux Olympiques d'été et d'hiver se déroulaient la même année jusqu'en 1992, après quoi ils ont été décalés de deux ans.",
    "Le saviez-vous ? Le CIO (Comité International Olympique) a été fondé par Pierre de Coubertin en 1894.",
    "Le saviez-vous ? La flamme olympique symbolise le vol du feu à Zeus par Prométhée.",
    "Le saviez-vous ? Les athlètes des Jeux Olympiques antiques concouraient nus.",
    "Le saviez-vous ? La devise olympique est 'Citius, Altius, Fortius', ce qui signifie 'Plus vite, Plus haut, Plus fort'.",
    "Le saviez-vous ? Les anneaux olympiques représentent l'union des cinq continents et la rencontre des athlètes du monde entier aux Jeux Olympiques.",
    "Le saviez-vous ? Le plus jeune médaillé olympique est Dimitrios Loundras, un gymnaste grec qui a remporté une médaille de bronze en 1896 à l'âge de 10 ans,",
    "Le saviez-vous ? Les Jeux Olympiques de 1916, 1940 et 1944 ont été annulés en raison des guerres mondiales,",
    "Le saviez-vous ? Le nageur américain Michael Phelps est l'athlète le plus médaillé de l'histoire des Jeux Olympiques, avec un total de 28 médailles,",
    "Le saviez-vous ? Le ski de fond est l'un des premiers sports d'hiver à avoir été inclus dans les Jeux Olympiques d'hiver en 1924,",
    "Le saviez-vous ? En 2020, le skateboard, le surf, l'escalade sportive et le karaté ont été ajoutés aux Jeux Olympiques pour la première fois,",
    "Le saviez-vous ? Le tir à l'arc est l'un des rares sports où les athlètes peuvent concourir à un haut niveau bien au-delà de l'âge de 40 ans,",
    "Le saviez-vous ? La ville de Londres a accueilli les Jeux Olympiques à trois reprises : en 1908, 1948 et 2012,",
    "Le saviez-vous ? L'escrime est l'un des quatre sports qui ont été présents à chaque édition des Jeux Olympiques modernes depuis 1896,",
    "Le saviez-vous ? Les médailles d'or olympiques sont principalement composées d'argent et sont recouvertes d'une fine couche d'or,",
    "Le saviez-vous ? Les athlètes olympiques ne reçoivent pas de prix en argent de la part du CIO pour leurs médailles, mais peuvent recevoir des primes de leurs pays respectifs.",
    "Le saviez-vous ? Le basketball a été introduit comme sport olympique officiel lors des Jeux Olympiques de 1936 à Berlin,",
    "Le saviez-vous ? La première femme à remporter une médaille olympique fut Charlotte Cooper, en tennis, lors des Jeux de 1900 à Paris,",
    "Le saviez-vous ? Le premier marathon féminin aux Jeux Olympiques n'a été introduit qu'en 1984, à Los Angeles,",
    "Le saviez-vous ? La tradition de la flamme olympique a commencé en 1928 lors des Jeux d'Amsterdam,",
    "Le saviez-vous ? Les Jeux Olympiques de 1960 à Rome ont été les premiers à être diffusés à la télévision à grande échelle,",
    "Le saviez-vous ? Le volleyball a été ajouté aux Jeux Olympiques en 1964, à Tokyo,",
    "Le saviez-vous ? En 2016, les Jeux Olympiques de Rio ont vu la première équipe de réfugiés concourir sous la bannière olympique,",
    "Le saviez-vous ? L'Union soviétique a participé pour la première fois aux Jeux Olympiques en 1952, à Helsinki,",
    "Le saviez-vous ? La cérémonie de remise des médailles n'a été introduite qu'en 1904, lors des Jeux de Saint-Louis,",
    "Le saviez-vous ? Les Jeux Olympiques d'été de 2020 à Tokyo ont été reportés à 2021 en raison de la pandémie de COVID-19, marquant la première fois que les Jeux ont été reportés en temps de paix,",
    "Le saviez-vous ? Le pentathlon moderne, qui comprend l'escrime, la natation, l'équitation, le tir au pistolet et la course à pied, a été inventé par le fondateur des Jeux Olympiques modernes, Pierre de Coubertin,",
    "Le saviez-vous ? La torche olympique est allumée plusieurs mois avant le début des Jeux lors d'une cérémonie à Olympie, en Grèce, et est ensuite relayée jusqu'au site des Jeux,",
    "Le saviez-vous ? Les athlètes olympiques qui remportent une médaille d'or reçoivent également une réplique de la branche d'olivier que portaient les champions des Jeux antiques,",
    "Le saviez-vous ? Les Jeux Olympiques de 1900 à Paris ont été les plus longs de l'histoire, s'étalant sur plus de 5 mois,",
    "Le saviez-vous ? Les Jeux Olympiques de 1924 à Paris ont été les premiers à inclure une cérémonie de clôture."
]

const factGenerator = () => {
    const randomFact = listOfFact[Math.floor(Math.random() * listOfFact.length)];
    return randomFact;
}

const fact = document.getElementById('fact');
fact.innerHTML = factGenerator();

setInterval(() => {
    fact.innerHTML = factGenerator();
}, 9000);

document.getElementById('startGame').addEventListener('click', function() {
    document.getElementById('mainMenu').style.display = 'none';
});
lucide.createIcons()


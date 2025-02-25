// Function to toggle the navigation menu
function toggleNav() {
    let nav = document.getElementById("mobile-nav");
    nav.classList.toggle("show"); // Toggle the "show" class
}

// Function to close the menu
function closeNav() {
    let nav = document.getElementById("mobile-nav");
    nav.classList.remove("show"); // Remove the "show" class
}

// Car data categorized
const carCategories = {
    "Most Expensive Cars in the World (2025)": [
        {"name": "Bugatti Divo", "price": "₹48 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/Bugatti Divo.jpg", "description": "A track-focused hypercar with an advanced aerodynamic design, lighter weight, and superior handling compared to the Chiron."},
        {"name": "Bugatti Centodieci", "price": "₹75 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/BugattiCentodieci.jpg", "description": "A modern tribute to the iconic Bugatti EB110, featuring a quad-turbo W16 engine and an exclusive 10-unit production run."},
        {"name": "Bugatti La Voiture Noire", "price": "₹168 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/BugattiLaVoitureNoire.webp", "description": "A one-of-a-kind masterpiece inspired by the Bugatti Type 57 SC Atlantic, blending unmatched luxury and extreme performance."},
        {"name": "Mercedes Maybach Exelero", "price": "₹66 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/Mercedes-MaybachExelero.jpg", "description": "A high-performance luxury coupe with a twin-turbo V12 engine, designed for elite customers seeking both speed and comfort."},
        {"name": "Pagani Huayra Codalunga", "price": "₹61 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/PaganiHuayraCodalunga.jpg", "description": "An ultra-exclusive long-tail version of the Huayra, powered by a twin-turbo V12 engine and featuring advanced aerodynamics."},
        {"name": "Pagani Zonda HP Barchetta", "price": "₹144 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/PaganiZondaHPBarchetta.jpg", "description": "A handcrafted, ultra-rare open-top hypercar, featuring a naturally aspirated 7.3L V12 engine and a lightweight carbon fiber body."},
        {"name": "Rolls Royce Boat Tail", "price": "₹234 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/Rolls-RoyceBoatTail.jpg", "description": "A bespoke grand tourer with yacht-inspired aesthetics, handcrafted details, and an exclusive production run for elite customers."},
        {"name": "Rolls Royce Droptail", "price": "₹250 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/rolls-royce-droptail.jpg", "description": "A handcrafted, ultra-luxurious convertible, blending classic Rolls Royce opulence with a modern, powerful V12 engine."},
        {"name": "Rolls Royce Sweptail", "price": "₹110 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/Rolls-RoyceSweptail.webp", "description": "A one-of-one, coach-built luxury coupe inspired by classic Rolls Royce designs, offering unparalleled exclusivity and craftsmanship."},
        {"name": "SP Automotive Chaos", "price": "₹120 Crore", "image": "./carAllFolderIMG/ExpensiveCarInWorld/SPAutomotiveChaos.jpg", "description": "A revolutionary hypercar boasting a twin-turbocharged V10, over 3,000 horsepower, and aerospace-grade materials for extreme performance."}
],
    "Best Cars in India (2025)": [
        {"name": "Aston Martin DB11", "price": "₹4.20 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/AstonMartinDB11.jpg", "description": "A grand tourer with a twin-turbocharged V8/V12 engine, offering an exceptional balance of luxury and performance."},
        {"name": "Aston Martin Vantage", "price": "₹3.99 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/AstonMartinVantage.jpg", "description": "A high-performance sports car with a sleek design, powerful twin-turbo V8 engine, and dynamic handling."},
        {"name": "Bentley Continental GTC", "price": "₹5.23 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/BentleyContinentalGTC.jpg", "description": "A luxurious open-top grand tourer, featuring a handcrafted interior, powerful W12/V8 engine, and supreme comfort."},
        {"name": "BMW 7 Series", "price": "₹1.81 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/BMW7Series.jpg", "description": "An ultra-luxurious sedan with cutting-edge technology, refined comfort, and a powerful engine lineup."},
        {"name": "Ferrari 812 Superfast", "price": "₹5.75 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/Ferrari812Superfast.jpg", "description": "A front-engined V12 supercar with blistering acceleration, aggressive aerodynamics, and race-inspired handling."},
        {"name": "Lamborghini Huracán Evo", "price": "₹4.10 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/LamborghiniHuracánEvo.jpg", "description": "A naturally aspirated V10 supercar with advanced aerodynamics, sharp handling, and an exhilarating driving experience."},
        {"name": "Mercedes-Benz GLC 2024", "price": "₹74.50 Lakh", "image": "./carAllFolderIMG/ExpensiveCarInIndia/Mercedes-BenzGLC2024.jpg", "description": "A luxury mid-size SUV combining a plush cabin, advanced technology, and efficient powertrains for a premium experience."},
        {"name": "Porsche 718 Cayman", "price": "₹1.48 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/Porsche718Cayman.webp", "description": "A mid-engine sports coupe with precise handling, a naturally aspirated flat-six engine, and a driver-focused cockpit."},
        {"name": "Rolls-Royce Phantom", "price": "₹12.50 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/Rolls-Royce Phantom.webp", "description": "The epitome of luxury, featuring an ultra-refined V12 engine, bespoke craftsmanship, and an opulent interior."},
        {"name": "Rolls-Royce Cullinan", "price": "₹8.20 Cr", "image": "./carAllFolderIMG/ExpensiveCarInIndia/Rolls-RoyceCullinan.jpg", "description": "The world's most luxurious SUV, combining supreme comfort, an all-wheel-drive system, and a powerful V12 engine."}
],

    "Most Expensive Cars in India (2025)": [
        {"name": "Hyundai Creta", "price": "₹11L - ₹20L", "image": "./carAllFolderIMG/bestCarInIndia/HyundaiCreta.png", "description": "A best-selling compact SUV in India, offering premium features, a spacious cabin, and powerful engine options."},
        {"name": "Kia Seltos", "price": "₹10.90L - ₹20.30L", "image": "./carAllFolderIMG/bestCarInIndia/kiaSyros.avif", "description": "A feature-rich, stylish, and high-performance SUV that delivers a premium driving experience."},
        {"name": "Land Rover Defender", "price": "₹97L - ₹2.35Cr", "image": "./carAllFolderIMG/bestCarInIndia/landRoverDefender.avif", "description": "An iconic off-roader with rugged capabilities, luxurious interiors, and cutting-edge technology."},
        {"name": "Mahindra Scorpio N", "price": "₹13.60L - ₹24.54L", "image": "./carAllFolderIMG/bestCarInIndia/MahindraScorpioN.png", "description": "A bold and powerful SUV with superior road presence, robust performance, and advanced safety features."},
        {"name": "Mahindra Thar", "price": "₹11.25L - ₹17.60L", "image": "./carAllFolderIMG/bestCarInIndia/mahindra-thar-roxx.png", "description": "A legendary off-roader with a rugged design, superior 4x4 capabilities, and modern features."},
        {"name": "Maruti Ertiga", "price": "₹8.69L - ₹13.03L", "image": "./carAllFolderIMG/bestCarInIndia/Maruthi-Ertiga.png", "description": "A practical and spacious 7-seater MPV with excellent fuel efficiency and affordability."},
        {"name": "Maruti Suzuki Baleno", "price": "₹6.61L - ₹9.88L", "image": "./carAllFolderIMG/bestCarInIndia/maruthi-suzuki-baleno.png", "description": "India’s top-selling premium hatchback with a fuel-efficient engine, stylish design, and smart features."},
        {"name": "Maruti Swift", "price": "₹5.99L - ₹9.03L", "image": "./carAllFolderIMG/bestCarInIndia/maruthi-swift.png", "description": "A sporty and fuel-efficient hatchback known for its peppy performance and reliability."},
        {"name": "Maruti Brezza", "price": "₹8.34L - ₹14.14L", "image": "./carAllFolderIMG/bestCarInIndia/marutiBrezza.png", "description": "A stylish and practical compact SUV with a feature-rich cabin and a fuel-efficient petrol engine."},
        {"name": "Maruti Dzire", "price": "₹6.56L - ₹9.39L", "image": "./carAllFolderIMG/bestCarInIndia/marutiDzire.png", "description": "A highly fuel-efficient and comfortable sedan, ideal for both families and commercial use."},
        {"name": "Tata Nexon", "price": "₹8.10L - ₹15.50L", "image": "./carAllFolderIMG/bestCarInIndia/tata-nexon.png", "description": "A 5-star safety-rated compact SUV with futuristic styling, powerful engines, and modern tech features."},
        {"name": "Tata Punch", "price": "₹6.13L - ₹10.20L", "image": "./carAllFolderIMG/bestCarInIndia/tata-punch.png", "description": "A micro-SUV with a high ground clearance, rugged design, and excellent city-driving dynamics."},
        {"name": "Toyota Fortuner", "price": "₹33.43L - ₹51.44L", "image": "./carAllFolderIMG/bestCarInIndia/toyotaFortuner.webp", "description": "A tough and powerful full-size SUV with exceptional off-road capabilities and a commanding road presence."},
        {"name": "Toyota Innova Crysta", "price": "₹19.99L - ₹26.30L", "image": "./carAllFolderIMG/bestCarInIndia/toyotaInnovaCrstra.webp", "description": "A premium MPV offering unparalleled comfort, reliability, and a powerful diesel engine option."}
],
    "Top 10 Best Cars in the World": [
        {"name": "Pagani Zonda C12", "price": "₹1.12 Cr", "image": "./carAllFolderIMG/bestCarInWorld/1999-pagani-zonda-c12.jpg", "description": "A rare Italian hypercar with a V12 engine and breathtaking performance."},
        {"name": "Mercedes Maybach G650 Landaulet", "price": "₹1.92 Cr", "image": "./carAllFolderIMG/bestCarInWorld/2018MercedesMaybachG650Landaulet.jpg", "description": "An ultra-luxurious off-roader with a retractable soft top and premium comfort."},
        {"name": "Aston Martin Vanquish", "price": "₹3.85 Cr", "image": "./carAllFolderIMG/bestCarInWorld/AstonMartinVanquish.jpg", "description": "A grand tourer that combines luxury, speed, and a roaring V12 engine."},
        {"name": "Bugatti Veyron", "price": "₹12 Cr", "image": "./carAllFolderIMG/bestCarInWorld/BugattiVeyron.jpg", "description": "A record-breaking hypercar with a quad-turbocharged W16 engine and insane top speed."},
        {"name": "Enzo Ferrari", "price": "₹19 Cr", "image": "./carAllFolderIMG/bestCarInWorld/EnzoFerrari.jpg", "description": "An iconic supercar named after Ferrari’s founder, featuring an F1-inspired V12."},
        {"name": "Koenigsegg CCXR", "price": "₹15 Cr", "image": "./carAllFolderIMG/bestCarInWorld/Koenigsegg_CCXR.jpg", "description": "A hypercar powered by a flex-fuel twin-supercharged V8 capable of over 1,000 HP."},
        {"name": "Lamborghini Reventón", "price": "₹16 Cr", "image": "./carAllFolderIMG/bestCarInWorld/LamborghiniReventon.jpg", "description": "A limited-production supercar with a jet-fighter-inspired design and extreme aerodynamics."},
        {"name": "McLaren F1", "price": "₹160 Cr", "image": "./carAllFolderIMG/bestCarInWorld/McLarenF1.jpg", "description": "One of the greatest supercars ever built, with a central driving position and gold-plated engine bay."},
        {"name": "Porsche Carrera GT", "price": "₹7 Cr", "image": "./carAllFolderIMG/bestCarInWorld/PorscheCarreraGT.jpg", "description": "A thrilling supercar powered by a naturally aspirated V10, known for its raw driving experience."},
        {"name": "SSC Ultimate Aero", "price": "₹10 Cr", "image": "./carAllFolderIMG/bestCarInWorld/sscUltimateAero.jpg", "description": "A former world’s fastest car with a twin-turbocharged V8, built for extreme speed."}
],
    "Top 10 Best Sports Cars in the World": [
        { "name": "Honda Civic Type R", "price": "₹50L", "image": "./carAllFolderIMG/bestSportCarInWorld/2022HondaCivicTypeR.jpg", "description": "A turbocharged hot hatch known for its track-focused performance and aggressive styling." },
        { "name": "Jaguar F-Type", "price": "₹1 Cr", "image": "./carAllFolderIMG/bestSportCarInWorld/2024JaguarF-TYPE.avif", "description": "A British sports car with a roaring supercharged V8 and sleek design." },
        { "name": "Audi R8", "price": "₹2.72 Cr", "image": "./carAllFolderIMG/bestSportCarInWorld/AudiR8.jpg", "description": "A high-performance supercar with a naturally aspirated V10 and quattro all-wheel drive." },
        { "name": "Chevrolet Corvette C8", "price": "₹1.6 Cr", "image": "./carAllFolderIMG/bestSportCarInWorld/ChevroletCorvette.avif", "description": "An American mid-engine supercar with stunning performance and aggressive looks." },
        { "name": "Ford Mustang GT", "price": "₹80L", "image": "./carAllFolderIMG/bestSportCarInWorld/Ford Mustang.avif", "description": "A legendary muscle car with a 5.0L V8 engine and unmistakable styling." },
        { "name": "Mazda MX-5 Miata", "price": "₹40L", "image": "./carAllFolderIMG/bestSportCarInWorld/MazdaMX5.webp", "description": "A lightweight roadster delivering pure driving pleasure and precision handling." },
        { "name": "Porsche 911 GT3 R", "price": "₹2.3 Cr", "image": "./carAllFolderIMG/bestSportCarInWorld/Porsche911GT3R.jpg", "description": "A track-focused 911 with a naturally aspirated flat-six and aerodynamic upgrades." },
        { "name": "Porsche 718 Cayman GT4", "price": "₹1.7 Cr", "image": "./carAllFolderIMG/bestSportCarInWorld/PorscheCaymanVS911.webp", "description": "A mid-engine sports car offering sharp handling and thrilling performance." },
        { "name": "Toyota GR86", "price": "₹45L", "image": "./carAllFolderIMG/bestSportCarInWorld/ToyotaGR86.jpg", "description": "A lightweight rear-wheel-drive sports car known for its superb handling." },
        { "name": "Toyota GR Supra", "price": "₹85L", "image": "./carAllFolderIMG/bestSportCarInWorld/ToyotaGRSUPRA.jpg", "description": "A modern icon with a turbocharged inline-six and precise driving dynamics." }
],
    "Top 10 Best Sports Cars in the India": [
        { "name": "Audi R8", "price": "₹2.72 Cr", "image": "./carAllFolderIMG/SportCarInIndia/AudiR8.webp", "description": "A high-performance supercar with a naturally aspirated V10 and quattro all-wheel drive." },
        { "name": "BMW Z4", "price": "₹90L", "image": "./carAllFolderIMG/SportCarInIndia/BMWZ4.webp", "description": "A stylish convertible roadster known for its turbocharged power and agile handling." },
        { "name": "Ferrari Roma", "price": "₹3.76 Cr", "image": "./carAllFolderIMG/SportCarInIndia/FerrariRoma.webp", "description": "A stunning grand tourer with a twin-turbo V8 and elegant Italian design." },
        { "name": "Ford Mustang GT", "price": "₹80L", "image": "./carAllFolderIMG/SportCarInIndia/FordMustangGT.webp", "description": "An iconic American muscle car featuring a roaring 5.0L V8 engine." },
        { "name": "Jaguar F-Type", "price": "₹1 Cr", "image": "./carAllFolderIMG/SportCarInIndia/JaguarF-Type.webp", "description": "A British sports coupe with a supercharged V8 and aggressive styling." },
        { "name": "Lamborghini Huracán", "price": "₹3.73 Cr", "image": "./carAllFolderIMG/SportCarInIndia/LamborghiniHuracán.webp", "description": "A breathtaking supercar with a naturally aspirated V10 and razor-sharp aerodynamics." },
        { "name": "Mercedes-AMG GT", "price": "₹2.70 Cr", "image": "./carAllFolderIMG/SportCarInIndia/Mercedes-AMGGT.webp", "description": "A high-performance coupe with a handcrafted AMG V8 and aggressive styling." },
        { "name": "Nissan GT-R", "price": "₹2.12 Cr", "image": "./carAllFolderIMG/SportCarInIndia/NissanGT-R.jpg", "description": "A legendary Japanese supercar with a twin-turbo V6 and advanced all-wheel drive." },
        { "name": "Porsche 911", "price": "₹1.86 Cr", "image": "./carAllFolderIMG/SportCarInIndia/Porsche911.webp", "description": "A timeless sports car known for its rear-engine layout and track-focused dynamics." },
        { "name": "Toyota Supra", "price": "₹1 Cr", "image": "./carAllFolderIMG/SportCarInIndia/ToyotaSupra.webp", "description": "A turbocharged sports coupe with legendary performance and heritage." }
],
    "Top 10 Classic Cars in the World": [
        { "name": "Aston Martin DB5", "price": "₹99 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Aston Martin DB5.jpg", "description": "The iconic British grand tourer, best known as James Bond’s car of choice. A symbol of elegance and power." },
        { "name": "Bugatti Type 57S Atalante", "price": "₹83 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Bugatti Type 57S Atalante.jpg", "description": "A stunning pre-war luxury coupe with exquisite craftsmanship and rarity, making it one of the most valuable classics." },
        { "name": "Chevrolet Corvette 1963", "price": "₹2.5 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Chevrolet Corvette 1963.webp", "description": "A groundbreaking American sports car with the iconic split-window design, highly collectible today." },
        { "name": "Duesenberg Model J Murphy Bodied Coupe", "price": "₹25 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Duesenberg Model J Murphy-Bodied Coupe.jpg", "description": "A symbol of 1930s luxury, built for the elite with a powerful straight-eight engine and stunning aesthetics." },
        { "name": "Ferrari 250 GT California LWB Competizione Spyder", "price": "₹150 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Ferrari 250 GT California LWB Competizione Spyder.jpg", "description": "An ultra-rare convertible Ferrari, blending racing pedigree with elegance and timeless appeal." },
        { "name": "Ferrari 250 Testa Rossa", "price": "₹320 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Ferrari 250 Testa Rossa.jpg", "description": "A legendary endurance race car with breathtaking curves and a roaring V12 engine, dominating tracks in the 1950s." },
        { "name": "Ferrari 250 GTO", "price": "₹570 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Ferrari GTO.jpg", "description": "The most valuable classic car in history, revered for its racing heritage, exclusivity, and breathtaking design." },
        { "name": "Ford GT40 Gulf", "price": "₹98 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Ford GT 40 Gulf.jpg", "description": "A Le Mans-winning beast that took down Ferrari, known for its striking Gulf livery and racing dominance." },
        { "name": "Ford Model T 1908", "price": "₹21 Lakh", "image": "./carAllFolderIMG/ClassicCarInWorld/Ford Model T 1908.webp", "description": "The car that revolutionized the automobile industry with mass production, making cars affordable for the masses." },
        { "name": "Lamborghini Miura 1966", "price": "₹29 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Lamborghini Miura 1966.webp", "description": "The world's first supercar, featuring a mid-engine V12 and a revolutionary design that redefined speed and luxury." },
        { "name": "Mercedes-Benz 540K Spezial Roadster", "price": "₹98 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Mercedes Benz 540K Spezial Roadster.jpg", "description": "A pre-war German masterpiece, known for its elegance, handcrafted luxury, and engineering excellence." },
        { "name": "Rolls-Royce Phantom II Continental", "price": "₹8.2 Cr", "image": "./carAllFolderIMG/ClassicCarInWorld/Rolls Royce Phantom II Continental.jpg", "description": "A grand tourer offering unmatched refinement, comfort, and prestige, designed for royalty and elite collectors." }
],
    "Charm of vintage car in India": [
        { "name": "Bentley 8 Litre Limousine", "price": "₹50 Cr", "image": "./carAllFolderIMG/VintageCarInIndia/bentley8LitreLimousine.jpg", "description": "A rare and luxurious pre-war Bentley, featuring a massive 8.0L engine and elegant coach-built design." },
        { "name": "Hindustan Ambassador", "price": "₹15 Lakh", "image": "./carAllFolderIMG/VintageCarInIndia/HindustanAmbassador.jpg", "description": "The ‘King of Indian Roads,’ the Ambassador was a symbol of power and reliability for decades." },
        { "name": "Hindustan Contessa", "price": "₹12 Lakh", "image": "./carAllFolderIMG/VintageCarInIndia/HindustanContessa.webp", "description": "India’s first muscle car, known for its premium appeal and resemblance to American classics." },
        { "name": "Hispano Suiza H6", "price": "₹40 Cr", "image": "./carAllFolderIMG/VintageCarInIndia/HispanoSuizaH6.jpg", "description": "A luxurious 1920s French automobile, famed for its aircraft-inspired engineering and royal ownerships." },
        { "name": "Jaguar Mark 2", "price": "₹55 Lakh", "image": "./carAllFolderIMG/VintageCarInIndia/JaguarMark 2.webp", "description": "A British classic sports saloon, blending elegance and performance, favored by enthusiasts and racers alike." },
        { "name": "Jaguar XK 150", "price": "₹1.2 Cr", "image": "./carAllFolderIMG/VintageCarInIndia/JaguarXK150.jpg", "description": "A sleek and powerful grand tourer from the 1950s, featuring advanced aerodynamics and a robust 3.4L engine." },
        { "name": "Maruti 800", "price": "₹2 Lakh", "image": "./carAllFolderIMG/VintageCarInIndia/Maruti800.jpg", "description": "The car that revolutionized India’s automobile industry, bringing affordable mobility to millions." },
        { "name": "Maybach DS8 Zeppelin Cabriolet", "price": "₹80 Cr", "image": "./carAllFolderIMG/VintageCarInIndia/maybachDS8ZeppelinCabriolet.jpg", "description": "A grand and luxurious German classic, built for aristocrats and known for its massive V12 engine." },
        { "name": "Mercedes-Benz 300SL Roadster", "price": "₹13 Cr", "image": "./carAllFolderIMG/VintageCarInIndia/Mercedes-Benz300SLRoadster.webp", "description": "A convertible version of the legendary Gullwing, featuring timeless design and groundbreaking performance." },
        { "name": "Premier Padmini", "price": "₹3 Lakh", "image": "./carAllFolderIMG/VintageCarInIndia/PremierPadmini.jpg", "description": "A charming and reliable car that once ruled Indian streets, adored for its Italian Fiat-inspired styling." } 
],
  "Top 10 Best Rare Cars in the World": [
        { "name": "Aston Martin DB4 GT Zagato", "price": "₹130 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-aston-martin-db4-gt-zagato.jpg", "description": "A rare and highly sought-after British sports car, combining Aston Martin's performance with Zagato's elegant Italian design." },
        { "name": "Aston Martin DBR1", "price": "₹200 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-aston-martin-dbr1.jpg", "description": "The most valuable Aston Martin ever sold, this Le Mans-winning beauty is an icon of motorsport history." },
        { "name": "Bugatti Type 41 Royale", "price": "₹800 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-bugatti-type-41.jpg", "description": "One of the largest and most luxurious cars ever built, originally designed for European royalty with an enormous 12.7L engine." },
        { "name": "Ferrari 250 GT California SWB Spider", "price": "₹150 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-gt-california-swb-spider.jpg", "description": "An ultra-rare classic Ferrari convertible, combining stunning design with a legendary V12 engine." },
        { "name": "Ferrari 250 GTO", "price": "₹1000 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-gto.jpg", "description": "The holy grail of classic cars, this legendary Ferrari race car holds the record for one of the most expensive cars ever sold at auction." },
        { "name": "Ferrari 250 Testa Rossa", "price": "₹280 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-testa-rossa.jpg", "description": "A racing legend with stunning design, the Testa Rossa dominated endurance racing in the late 1950s and remains a collector’s dream." },
        { "name": "Jaguar XK120 C (C-Type)", "price": "₹85 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-jaguar-xk120-c.jpg", "description": "A lightweight racing variant of the XK120, this rare Jaguar helped define sports car racing in the 1950s." },
        { "name": "Maybach Exelero", "price": "₹70 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-maybach-exelero.jpg", "description": "A one-of-a-kind ultra-luxury coupe built for performance and exclusivity, known for its V12 twin-turbo engine." },
        { "name": "Oldsmobile F-88", "price": "₹30 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-oldsmobile-f-88.jpg", "description": "A futuristic concept car from the 1950s, featuring sleek design and advanced technology that never made it to mass production." },
        { "name": "Porsche 917", "price": "₹70 Cr", "image": "./carAllFolderIMG/rareCarInWorld/rarest-car-porsche-917.jpg", "description": "A legendary race car that won Le Mans and revolutionized endurance racing with its speed and aerodynamics." } 
],
    "Top 10 Best Rare Cars in the India": [
        { "name": "Daewoo Nexia", "price": "₹5 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/DaewooNexia.jpg", "description": "A mid-size sedan introduced by Daewoo in India, known for its premium build and smooth ride but discontinued due to the company's exit from the market." },
        { "name": "Fiat Siena", "price": "₹4.5 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/FiatSiena.jpg", "description": "A stylish and comfortable sedan from Fiat, the Siena struggled in India despite its solid build and Italian design." },
        { "name": "HM Trekker", "price": "₹3.5 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/HM_Trekker.jpg", "description": "A rugged people carrier by Hindustan Motors, based on the iconic Ambassador but adapted for rough terrain." },
        { "name": "Hyundai Terracan", "price": "₹8 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/HyundaiTerracan.jpg", "description": "A full-size SUV introduced by Hyundai, offering luxury and power but discontinued due to its high price and limited demand." },
        { "name": "Mahindra Jonga", "price": "₹12 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/MahindraJonga.jpg", "description": "Originally developed for the Indian Army, this powerful off-roader became a collector's favorite after limited civilian sales." },
        { "name": "Mahindra Reva", "price": "₹3 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/MahindraReva.jpg", "description": "One of India's first electric cars, the Reva was a pioneering effort in sustainable mobility but had limited adoption due to its compact size and range." },
        { "name": "Mahindra Voyager", "price": "₹6 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/MahindraVoyager.webp", "description": "A rare minivan based on the Mitsubishi Delica, offering spacious interiors and comfort but struggling due to high competition." },
        { "name": "Premier 118 NE", "price": "₹3.5 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/Premier118NE.jpg", "description": "A luxury sedan of its time, the 118 NE was Premier's answer to modern cars but couldn't compete with newer entrants in the market." },
        { "name": "Premier RIO", "price": "₹7 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/PremierRio.avif", "description": "India’s first compact SUV, launched before the segment became popular, but suffered due to outdated features and weak marketing." },
        { "name": "Sipani Badal", "price": "₹1.5 Lakh", "image": "./carAllFolderIMG/rareCarInIndia/SipaniBadal.jpg", "description": "A unique three-wheeled car, inspired by the Reliant Robin, aimed at budget-conscious buyers but failed due to safety concerns." }
],
    "Rare Car only one of them exists": [
        { "name": "Rolls Royce Sweptail", "price": "₹125 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Rolls-RoyceSweptail.jpg", "description": "One of the most expensive custom-built Rolls-Royce cars, handcrafted for an exclusive client with a yacht-inspired design." },
        { "name": "Alfa Romeo TZ3 Corsa 4", "price": "₹12 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Alfa-Romeo-TZ3-Corsa-4.avif", "description": "A one-off race car by Alfa Romeo and Zagato, blending classic design with modern performance." },
        { "name": "BMW M1 Hommage", "price": "₹10 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/BMW M1Hommage.jpg", "description": "A tribute to the legendary BMW M1, featuring futuristic aesthetics and aggressive styling." },
        { "name": "BMW Z18", "price": "₹9 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/BMWZ18.jpg", "description": "An off-road convertible roadster concept, the BMW Z18 was an experimental all-terrain vehicle." },
        { "name": "Ferrari P80 C", "price": "₹100 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/FerrariP80C.jpg", "description": "A bespoke Ferrari track car, custom-built for a private collector, inspired by legendary Ferrari racers." },
        { "name": "Ferrari SP38 Deborah", "price": "₹40 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/FerrariSP38Deborah.png", "description": "A one-off Ferrari commissioned by a wealthy client, featuring unique styling cues from classic Ferrari models." },
        { "name": "Ford Super Chief", "price": "₹15 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/FordSuperChief.jpg", "description": "A futuristic Ford concept truck powered by a hydrogen fuel system, built for extreme luxury and performance." },
        { "name": "Jeep M-715 Five Quarter", "price": "₹8 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Jeep M-715 Five Quarter.jpg", "description": "A modern tribute to the classic Jeep M-715, designed with extreme off-roading capability." },
        { "name": "Ken Okuyama Kode 0", "price": "₹25 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Ken Okuyama Kode 0.jpg", "description": "A hypercar designed by Ken Okuyama, featuring a lightweight carbon fiber body and futuristic aerodynamics." },
        { "name": "Lamborghini Aventador J", "price": "₹50 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/LamborghiniAventadorJ.jpg", "description": "A one-of-a-kind, roofless, and windshield-less supercar that combines extreme performance with radical design." },
        { "name": "Maserati Birdcage 75th Pininfarina", "price": "₹20 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Maserati Birdcage 75th Pininfarina.jpg", "description": "A stunning Maserati concept car designed by Pininfarina, inspired by the legendary Birdcage race car." },
        { "name": "Maybach Exelero", "price": "₹60 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Maybach Exelero.jpg", "description": "A high-performance luxury coupe built for ultimate exclusivity, famously featured in music videos and owned by rappers." },
        { "name": "Pagani Zonda Uno", "price": "₹35 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/PaganiZondaUno.jpg", "description": "A customized one-off Pagani Zonda, featuring unique paintwork and unmatched attention to detail." },
        { "name": "Pininfarina Cambiano", "price": "₹18 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/PininfarinaCambiano.jpg", "description": "An ultra-luxury electric concept car designed by Pininfarina, blending sustainability with opulence." },
        { "name": "Rinspeed sQuba", "price": "₹12 Cr", "image": "./carAllFolderIMG/rareCarOnlyOneOfThemExit/Rinspeed Squba.jpg", "description": "The world’s first underwater car, capable of diving like a submarine and driving on land." }
]}; 

// Function to show the category and car list
function showCategory(category) {
    const carList = document.getElementById("car-list");
    const categoryTitle = document.getElementById("category-title"); // Get header title
    // Update the header title dynamically
    categoryTitle.textContent = category.replace(/-/g, " ").toUpperCase(); // Format category name
    carList.innerHTML = ""; // Clear previous content
    if (!carCategories[category]) {
        carList.innerHTML = "<p>No cars available in this category.</p>";
        return;
    }
    // Sort cars from high price to low price
    const sortedCars = carCategories[category].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
        return priceB - priceA; // Sort in descending order
    });
    // Create car cards dynamically
    sortedCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">${car.price}</p>
            <p>${car.description}</p>
        `;
        // Add event listener to open modal on click
        carCard.addEventListener("click", () => showCarDetails(car));
        carList.appendChild(carCard);
    });
}

// Function to show the car details in a full-screen modal
function showCarDetails(car) {
    const modal = document.getElementById("car-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    // Set modal content
    modalImage.src = car.image;
    modalImage.alt = car.name;
    modalName.textContent = car.name;
    modalPrice.textContent = car.price;
    modalDescription.textContent = car.description;
    modal.style.display = "flex"; // Show modal
     // Add event listener to the image to open the full-size modal
     modalImage.onclick = function () {
        showFullImage(car.image);
    };
}

// Function to show full-size car image
function showFullImage(imageSrc) {
    const imageModal = document.getElementById("image-modal");
    const fullSizeImage = document.getElementById("full-size-image");
    fullSizeImage.src = imageSrc;
    imageModal.style.display = "flex"; // Show full-size image modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("car-modal").style.display = "none";
}

// Function to close the full-size image modal
function closeImageModal() {
    document.getElementById("image-modal").style.display = "none";
}


const cars = [
  { name: 'Honda Accord 2023', image: './file/2015_honda_accord.jpg', description: 'Spacious, stylish, and powerful engine.', price: 4428000, category: 'Sedan' },
  { name: 'Ford Mustang 2023', image: './file/ford-mustang.jpg', description: 'Sporty and powerful muscle car with iconic design.', price: 8000000, category: 'Sports' },
  { name: 'Toyota Camry 2023', image: './file/2025_toyota_camry.avif', description: 'A reliable sedan with excellent fuel efficiency.', price: 4800000, category: 'Sedan' },
  { name: 'Chevrolet Malibu Premier', image: './file/Chevrolet_Malibu.jpg', description: 'Affordable sedan with a smooth ride.', price: 200000, category: 'Sedan' },
  { name: 'Tesla Model 3', image: './file/Tesla_Model_3.jpg', description: 'Electric vehicle with cutting-edge technology and performance.', price: 7000000, category: 'Electric' },
  { name: 'BMW X5', image: './file/BMW-X5.jpg', description: 'Luxury SUV with a premium driving experience.', price: 9390000, category: 'SUV' },
  { name: 'Audi Q5', image: './file/Audi_Q5.jpg', description: 'Sleek design and exceptional comfort for long drives.', price: 6699000, category: 'SUV' },
  { name: 'Mercedes-Benz E-Class', image: './file/Mercedes-Benz_E-Class.jpeg', description: 'High-end luxury sedan with advanced features.', price: 7850000, category: 'Luxury' },
  { name: 'Nissan Altima SR VC-Turbo', image: './file/Nissan_Altima.jpg', description: 'Mid-size sedan with efficient fuel economy.', price: 2894000, category: 'Sedan' },
  { name: 'Chevrolet Equinox', image: './file/Chevrolet_Equinox.jpg', description: 'Spacious SUV with a smooth ride and modern tech.', price: 3000000, category: 'SUV' },
  { name: 'Bentley 8 Litre Limousine', image: './carAllFolderIMG/VintageCarInIndia/bently8LitreLimousine.jpg', description: 'Classic luxury car with unmatched craftsmanship.', price: 25000000, category: 'Classic' },
  { name: 'Hindustan Ambassador', image: './carAllFolderIMG/VintageCarInIndia/HindustanAmbassador.jpg', description: 'Iconic Indian sedan known for its durability.', price: 500000, category: 'Classic' },
  { name: 'Hindustan Contessa', image: './carAllFolderIMG/VintageCarInIndia/HindustanContessa.webp', description: 'A classic Indian muscle car with a vintage look.', price: 700000, category: 'Classic' },
  { name: 'Hispano Suiza H6', image: './carAllFolderIMG/VintageCarInIndia/HispanoSuizaH6.jpg', description: 'A rare vintage luxury car with a powerful engine.', price: 40000000, category: 'Vintage' },
  { name: 'Jaguar Mark 2', image: './carAllFolderIMG/VintageCarInIndia/JaguarMark 2.webp', description: 'Classic British sedan with a sleek design.', price: 12000000, category: 'Classic' },
  { name: 'Jaguar XK150', image: './carAllFolderIMG/VintageCarInIndia/JaguarXK150.jpg', description: 'Classic sports car with stunning aesthetics.', price: 18000000, category: 'Vintage' },
  { name: 'Maruti 800', image: './carAllFolderIMG/VintageCarInIndia/Maruti800.jpg', description: 'Affordable and reliable Indian hatchback.', price: 150000, category: 'Hatchback' },
  { name: 'Maybach DS8 Zeppelin Cabriolet', image: './carAllFolderIMG/VintageCarInIndia/maybachDS8ZeppelinCabriolet.jpg', description: 'Ultra-luxury vintage car with premium features.', price: 50000000, category: 'Vintage' },
  { name: 'Mercedes-Benz 300 SL Roadster', image: './carAllFolderIMG/VintageCarInIndia/Mercedes-Benz300SLRoadster.webp', description: 'Classic roadster with timeless design.', price: 35000000, category: 'Classic' },
  { name: 'Premier Padmini', image: './carAllFolderIMG/VintageCarInIndia/PremierPadmini.jpg', description: 'Vintage Indian car with a nostalgic charm.', price: 400000, category: 'Classic' },
  { name: 'Audi R8', image: './carAllFolderIMG/SportCarInIndia/AudiR8.webp', description: 'Supercar with a roaring V10 engine.', price: 18000000, category: 'Supercar' },
  { name: 'BMW Z4', image: './carAllFolderIMG/SportCarInIndia/BMWZ4.webp', description: 'Stylish convertible with sporty performance.', price: 9000000, category: 'Sports' },
  { name: 'Ferrari Roma', image: './carAllFolderIMG/SportCarInIndia/FerrariRoma.webp', description: 'A sleek Ferrari coupe with an elegant design.', price: 22000000, category: 'Supercar' },
  { name: 'Ford Mustang GT', image: './carAllFolderIMG/SportCarInIndia/FordMustangGT.webp', description: 'A powerful V8 muscle car with a bold design.', price: 9500000, category: 'Muscle' },
  { name: 'Jaguar F-Type', image: './carAllFolderIMG/SportCarInIndia/JaguarF-Type.webp', description: 'Luxury sports coupe with stunning performance.', price: 11000000, category: 'Sports' },
  { name: 'Lamborghini Huracan', image: './carAllFolderIMG/SportCarInIndia/LamborghiniHuracán.webp', description: 'Supercar with breathtaking speed and design.', price: 30000000, category: 'Supercar' },
  { name: 'Mercedes-AMG GT', image: './carAllFolderIMG/SportCarInIndia/Mercedes-AMGGT.webp', description: 'Performance coupe with aggressive styling.', price: 17000000, category: 'Sports' },
  { name: 'Nissan GT-R', image: './carAllFolderIMG/SportCarInIndia/NissanGT-R.jpg', description: 'High-performance sports car with twin-turbo power.', price: 15000000, category: 'Supercar' },
  { name: 'Porsche 911', image: './carAllFolderIMG/SportCarInIndia/Porsche911.webp', description: 'Iconic sports car with legendary handling.', price: 16000000, category: 'Supercar' },
  { name: 'Toyota Supra', image: './carAllFolderIMG/SportCarInIndia/ToyotaSupra.webp', description: 'A turbocharged sports car with racing heritage.', price: 11000000, category: 'Sports' },
  { name: 'Alfa Romeo TZ3 Corsa', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Alfa-Romeo-TZ3-Corsa-4.avif', description: 'A rare one-off sports car designed for track performance.', price: 120000000, category: 'Sports' },
  { name: 'BMW M1 Hommage', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/BMW M1Hommage.jpg', description: 'A tribute to the legendary M1 with futuristic design.', price: 90000000, category: 'Concept' },
  { name: 'BMW Z18', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/BMWZ18.jpg', description: 'A unique off-road convertible concept.', price: 50000000, category: 'Concept' },
  { name: 'Ferrari P80C', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/FerrariP80C.jpg', description: 'A custom-built Ferrari inspired by classic race cars.', price: 150000000, category: 'Supercar' },
  { name: 'Ferrari SP38 Deborah', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/FerrariSP38Deborah.png', description: 'A special edition Ferrari with exclusive styling.', price: 140000000, category: 'Supercar' },
  { name: 'Ford Super Chief', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/FordSuperChief.jpg', description: 'A concept pickup with futuristic hydrogen technology.', price: 80000000, category: 'Concept' },
  { name: 'Jeep M715 Five Quarter', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Jeep M-715 Five Quarter.jpg', description: 'A modern reinterpretation of a military classic.', price: 60000000, category: 'SUV' },
  { name: 'Ken Okuyama Kode 0', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Ken Okuyama Kode 0.jpg', description: 'A futuristic hypercar by legendary designer Ken Okuyama.', price: 200000000, category: 'Hypercar' },
  { name: 'Lamborghini Aventador J', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/LamborghiniAventadorJ.jpg', description: 'A one-off, roofless version of the Aventador.', price: 220000000, category: 'Supercar' },
  { name: 'Maserati Birdcage 75th', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Maserati Birdcage 75th Pininfarina.jpg', description: 'A futuristic concept celebrating Maserati’s racing history.', price: 100000000, category: 'Concept' },
  { name: 'Maybach Exelero', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Maybach Exelero.jpg', description: 'A luxurious high-performance coupe built for exclusivity.', price: 500000000, category: 'Luxury' },
  { name: 'Pagani Zonda Uno', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/PaganiZondaUno.jpg', description: 'A unique Pagani Zonda with a breathtaking design.', price: 180000000, category: 'Supercar' },
  { name: 'Pininfarina Cambiano', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/PininfarinaCambiano.jpg', description: 'A sleek and luxurious electric concept car.', price: 75000000, category: 'Electric' },
  { name: 'Rinspeed Squba', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Rinspeed Squba.jpg', description: 'A submarine-capable electric sports car.', price: 90000000, category: 'Concept' },
  { name: 'Rolls Royce Sweptail', image: './carAllFolderIMG/rareCarOnlyOneOfThemExit/Rolls-RoyceSweptail.jpg', description: 'A bespoke ultra-luxury coupe with a yacht-inspired design.', price: 130000000, category: 'Luxury' },
  { name: 'Aston Martin DB4 GT Zagato', image: './carAllFolderIMG/rareCarInWorld/rarest-car-aston-martin-db4-gt-zagato.jpg', description: 'A classic British grand tourer with timeless appeal.', price: 250000000, category: 'Classic' },
  { name: 'Aston Martin DBR1', image: './carAllFolderIMG/rareCarInWorld/rarest-car-aston-martin-dbr1.jpg', description: 'A legendary Le Mans-winning race car.', price: 300000000, category: 'Classic' },
  { name: 'Bugatti Type 41 Royale', image: './carAllFolderIMG/rareCarInWorld/rarest-car-bugatti-type-41.jpg', description: 'One of the most luxurious and exclusive Bugatti cars ever made.', price: 400000000, category: 'Vintage' },
  { name: 'Ferrari 250 GT California SWB Spider', image: './carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-gt-california-swb-spider.jpg', description: 'A rare and stunning open-top Ferrari.', price: 350000000, category: 'Classic' },
  { name: 'Ferrari 250 GTO', image: './carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-gto.jpg', description: 'One of the most valuable collector cars ever built.', price: 700000000, category: 'Classic' },
  { name: 'Ferrari 250 Testa Rossa', image: './carAllFolderIMG/rareCarInWorld/rarest-car-ferrari-250-testa-rossa.jpg', description: 'A vintage Ferrari with an iconic racing heritage.', price: 320000000, category: 'Classic' },
  { name: 'Jaguar XK120 C', image: './carAllFolderIMG/rareCarInWorld/rarest-car-jaguar-xk120-c.jpg', description: 'A historic racing Jaguar with elegant styling.', price: 150000000, category: 'Classic' },
  { name: 'Oldsmobile F-88', image: './carAllFolderIMG/rareCarInWorld/rarest-car-oldsmobile-f-88.jpg', description: 'A legendary concept roadster with futuristic styling.', price: 90000000, category: 'Vintage' },
  { name: 'Porsche 917', image: './carAllFolderIMG/rareCarInWorld/rarest-car-porsche-917.jpg', description: 'A legendary Le Mans-winning Porsche race car.', price: 250000000, category: 'Race Car' },
  { name: 'Daewoo Nexia', image: './carAllFolderIMG/rareCarInIndia/DaewooNexia.jpg', description: 'A compact and affordable sedan from Daewoo.', price: 500000, category: 'Sedan' },
  { name: 'Fiat Siena', image: './carAllFolderIMG/rareCarInIndia/FiatSiena.jpg', description: 'A practical and fuel-efficient sedan.', price: 600000, category: 'Sedan' },
  { name: 'HM Trekker', image: './carAllFolderIMG/rareCarInIndia/HM_Trekker.jpg', description: 'A rugged vehicle based on the Ambassador platform.', price: 700000, category: 'SUV' },
  { name: 'Hyundai Terracan', image: './carAllFolderIMG/rareCarInIndia/HyundaiTerracan.jpg', description: 'A large SUV with powerful off-road capabilities.', price: 1500000, category: 'SUV' },
  { name: 'Mahindra Jonga', image: './carAllFolderIMG/rareCarInIndia/MahindraJonga.jpg', description: 'A legendary military-spec off-roader.', price: 1200000, category: 'SUV' },
  { name: 'Mahindra Reva', image: './carAllFolderIMG/rareCarInIndia/MahindraReva.jpg', description: 'A small electric car ideal for city driving.', price: 800000, category: 'Electric' },
  { name: 'Mahindra Voyager', image: './carAllFolderIMG/rareCarInIndia/MahindraVoyager.webp', description: 'A spacious multi-utility vehicle.', price: 900000, category: 'MUV' },
  { name: 'Premier 118 NE', image: './carAllFolderIMG/rareCarInIndia/Premier118NE.jpg', description: 'An Indian-built sedan inspired by Fiat.', price: 700000, category: 'Sedan' },
  { name: 'Premier Rio', image: './carAllFolderIMG/rareCarInIndia/PremierRio.avif', description: 'A compact SUV designed for urban commuting.', price: 900000, category: 'SUV' },
  { name: 'Sipani Badal', image: './carAllFolderIMG/rareCarInIndia/SipaniBadal.jpg', description: 'A three-wheeled city car from the 1980s.', price: 300000, category: 'Microcar' },
  { name: 'Bugatti Divo', image: './carAllFolderIMG/ExpensiveCarInWorld/Bugatti Divo.jpg', description: 'A high-performance hypercar with extreme aerodynamics.', price: 580000000, category: 'Hypercar' },
  { name: 'Bugatti Centodieci', image: './carAllFolderIMG/ExpensiveCarInWorld/BugattiCentodieci.jpg', description: 'A tribute to the Bugatti EB110 with modern performance.', price: 700000000, category: 'Hypercar' },
  { name: 'Bugatti La Voiture Noire', image: './carAllFolderIMG/ExpensiveCarInWorld/BugattiLaVoitureNoire.webp', description: 'The world’s most expensive car, a one-off Bugatti.', price: 1000000000, category: 'Luxury' },
  { name: 'Mercedes Maybach Exelero', image: './carAllFolderIMG/ExpensiveCarInWorld/Mercedes-MaybachExelero.jpg', description: 'A luxurious performance coupe with V12 power.', price: 600000000, category: 'Luxury' },
  { name: 'Pagani Huayra Codalunga', image: './carAllFolderIMG/ExpensiveCarInWorld/PaganiHuayraCodalunga.jpg', description: 'A limited-run long-tail Huayra for ultimate aerodynamics.', price: 750000000, category: 'Supercar' },
  { name: 'Pagani Zonda HP Barchetta', image: './carAllFolderIMG/ExpensiveCarInWorld/PaganiZondaHPBarchetta.jpg', description: 'A rare and stunning open-top Zonda.', price: 850000000, category: 'Supercar' },
  { name: 'Rolls Royce Boat Tail', image: './carAllFolderIMG/ExpensiveCarInWorld/Rolls-RoyceBoatTail.jpg', description: 'A bespoke, yacht-inspired luxury car.', price: 2800000000, category: 'Luxury' },
  { name: 'Rolls Royce Droptail', image: './carAllFolderIMG/ExpensiveCarInWorld/rolls-royce-droptail.jpg', description: 'An exclusive coach-built luxury convertible.', price: 2500000000, category: 'Luxury' },
  { name: 'Rolls Royce Sweptail', image: './carAllFolderIMG/ExpensiveCarInWorld/Rolls-RoyceSweptail.webp', description: 'A one-off ultra-luxury coupe.', price: 2000000000, category: 'Luxury' },
  { name: 'SP Automative Chaos', image: './carAllFolderIMG/ExpensiveCarInWorld/SPAutomotiveChaos.jpg', description: 'A futuristic hypercar with over 3,000 HP.', price: 1000000000, category: 'Hypercar' },
  { name: 'Aston Martin DB11', image: './carAllFolderIMG/ExpensiveCarInIndia/AstonMartinDB11.jpg', description: 'A stylish grand tourer with a twin-turbo V12.', price: 22000000, category: 'Grand Tourer' },
  { name: 'Aston Martin Vantage', image: './carAllFolderIMG/ExpensiveCarInIndia/AstonMartinVantage.jpg', description: 'A sleek and powerful sports coupe.', price: 18000000, category: 'Sports' },
  { name: 'Bentley Continental GTC', image: './carAllFolderIMG/ExpensiveCarInIndia/BentleyContinentalGTC.jpg', description: 'A luxurious convertible grand tourer.', price: 35000000, category: 'Luxury' },
  { name: 'BMW 7 Series', image: './carAllFolderIMG/ExpensiveCarInIndia/BMW7Series.jpg', description: 'A premium executive sedan with cutting-edge tech.', price: 30000000, category: 'Luxury' },
  { name: 'Ferrari 812 Superfast', image: './carAllFolderIMG/ExpensiveCarInIndia/Ferrari812Superfast.jpg', description: 'A front-engined Ferrari with a monstrous V12.', price: 45000000, category: 'Supercar' },
  { name: 'Lamborghini Huracan Evo', image: './carAllFolderIMG/ExpensiveCarInIndia/LamborghiniHuracánEvo.jpg', description: 'A modern iteration of the Huracan with enhanced aerodynamics.', price: 42000000, category: 'Supercar' },
  { name: 'Mercedes Benz GLC 2024', image: './carAllFolderIMG/ExpensiveCarInIndia/Mercedes-BenzGLC2024.jpg', description: 'A luxurious and tech-filled midsize SUV.', price: 25000000, category: 'SUV' },
  { name: 'Porsche 718 Cayman', image: './carAllFolderIMG/ExpensiveCarInIndia/Porsche718Cayman.webp', description: 'A mid-engine sports car with precision handling.', price: 32000000, category: 'Sports' },
  { name: 'Rolls Royce Phantom', image: './carAllFolderIMG/ExpensiveCarInIndia/Rolls-Royce Phantom.webp', description: 'The pinnacle of luxury sedans.', price: 500000000, category: 'Luxury' },
  { name: 'Rolls Royce Cullinan', image: './carAllFolderIMG/ExpensiveCarInIndia/Rolls-RoyceCullinan.jpg', description: 'A super-luxury SUV with unparalleled comfort.', price: 700000000, category: 'Luxury SUV' },
  { name: 'Aston Martin DB5', image: './carAllFolderIMG/ClassicCarInWorld/Aston Martin DB5.jpg', description: 'The iconic Bond car, a symbol of British elegance.', price: 60000000, category: 'Classic' },
  { name: 'Bugatti Type 57S Atalante', image: './carAllFolderIMG/ClassicCarInWorld/Bugatti Type 57S Atalante.jpg', description: 'A rare and elegant pre-war Bugatti masterpiece.', price: 800000000, category: 'Classic' },
  { name: 'Chevrolet Corvette 1963', image: './carAllFolderIMG/ClassicCarInWorld/Chevrolet Corvette 1963.webp', description: 'The split-window Corvette, a true American icon.', price: 25000000, category: 'Classic' },
  { name: 'Duesenberg Model J Murphy Bodied Coupe', image: './carAllFolderIMG/ClassicCarInWorld/Duesenberg Model J Murphy-Bodied Coupe.jpg', description: 'A luxurious and powerful classic from the 1930s.', price: 120000000, category: 'Vintage' },
  { name: 'Ferrari 250 GT California LWB Competizione Spyder', image: './carAllFolderIMG/ClassicCarInWorld/Ferrari 250 GT California LWB Competizione Spyder.jpg', description: 'One of the most desirable Ferraris ever made.', price: 1800000000, category: 'Classic' },
  { name: 'Ferrari 250 Testa Rossa', image: './carAllFolderIMG/ClassicCarInWorld/Ferrari 250 Testa Rossa.jpg', description: 'A legendary race car with a distinctive design.', price: 1500000000, category: 'Classic' },
  { name: 'Ferrari GTO', image: './carAllFolderIMG/ClassicCarInWorld/Ferrari GTO.jpg', description: 'A rare Ferrari with incredible racing pedigree.', price: 5200000000, category: 'Classic' },
  { name: 'Ford GT40 Gulf', image: './carAllFolderIMG/ClassicCarInWorld/Ford GT 40 Gulf.jpg', description: 'A Le Mans-winning icon with Gulf livery.', price: 300000000, category: 'Classic Race' },
  { name: 'Ford Model T 1908', image: './carAllFolderIMG/ClassicCarInWorld/Ford Model T 1908.webp', description: 'The car that revolutionized the auto industry.', price: 5000000, category: 'Vintage' },
  { name: 'Lamborghini Miura 1966', image: './carAllFolderIMG/ClassicCarInWorld/Lamborghini Miura 1966.webp', description: 'The first supercar, known for its stunning design.', price: 300000000, category: 'Classic' },
  { name: 'Mercedes Benz 540K Spezial Roadster', image: './carAllFolderIMG/ClassicCarInWorld/Mercedes Benz 540K Spezial Roadster.jpg', description: 'A pre-war luxury roadster with timeless elegance.', price: 700000000, category: 'Vintage' },
  { name: 'Rolls Royce Phantom II Continental', image: './carAllFolderIMG/ClassicCarInWorld/Rolls Royce Phantom II Continental.jpg', description: 'A grand luxury automobile from the 1930s.', price: 500000000, category: 'Vintage' },
  { name: '2022 Honda Civic Type R', image: './carAllFolderIMG/bestSportCarInWorld/2022HondaCivicTypeR.jpg', description: 'A powerful and agile hot hatchback.', price: 4500000, category: 'Sports' },
  { name: '2024 Jaguar F-Type E', image: './carAllFolderIMG/bestSportCarInWorld/2024JaguarF-TYPE.avif', description: 'A sleek and refined sports coupe.', price: 9000000, category: 'Luxury Sports' },
  { name: 'Audi R8', image: './carAllFolderIMG/bestSportCarInWorld/AudiR8.jpg', description: 'A V10-powered supercar with precision engineering.', price: 22000000, category: 'Supercar' },
  { name: 'Chevrolet Corvette', image: './carAllFolderIMG/bestSportCarInWorld/ChevroletCorvette.avif', description: 'An American sports car legend.', price: 8000000, category: 'Sports' },
  { name: 'Ford Mustang', image: './carAllFolderIMG/bestSportCarInWorld/Ford Mustang.avif', description: 'A muscle car icon with modern performance.', price: 7000000, category: 'Muscle' },
  { name: 'Mazda MX-5', image: './carAllFolderIMG/bestSportCarInWorld/MazdaMX5.webp', description: 'A lightweight roadster known for fun driving.', price: 5000000, category: 'Convertible' },
  { name: 'Porsche 911 GT3 R', image: './carAllFolderIMG/bestSportCarInWorld/Porsche911GT3R.jpg', description: 'A track-focused version of the legendary 911.', price: 25000000, category: 'Track Car' },
  { name: 'Porsche Cayman vs 911', image: './carAllFolderIMG/bestSportCarInWorld/PorscheCaymanVS911.webp', description: 'A debate between two of Porsche’s best sports cars.', price: 19900000, category: 'Comparison' },
  { name: 'Toyota GR 86', image: './carAllFolderIMG/bestSportCarInWorld/ToyotaGR86.jpg', description: 'A balanced and affordable sports coupe.', price: 4000000, category: 'Sports' },
  { name: 'Toyota GR Supra', image: './carAllFolderIMG/bestSportCarInWorld/ToyotaGRSUPRA.jpg', description: 'A modern revival of the legendary Supra.', price: 7500000, category: 'Sports' },
  { name: '1999 Pagani Zonda C12', image: './carAllFolderIMG/bestCarInWorld/1999-pagani-zonda-c12.jpg', description: 'The first Zonda, marking Pagani’s entry into the hypercar world.', price: 500000000, category: 'Supercar' },
  { name: '2018 Mercedes-Maybach G650 Landaulet', image: './carAllFolderIMG/bestCarInWorld/2018MercedesMaybachG650Landaulet.jpg', description: 'Ultra-luxurious off-roader with a convertible rear.', price: 65000000, category: 'Luxury SUV' },
  { name: 'Aston Martin Vanquish', image: './carAllFolderIMG/bestCarInWorld/AstonMartinVanquish.jpg', description: 'A grand tourer blending power with British elegance.', price: 40000000, category: 'Luxury Sports' },
  { name: 'Bugatti Veyron', image: './carAllFolderIMG/bestCarInWorld/BugattiVeyron.jpg', description: 'Once the fastest production car in the world.', price: 1500000000, category: 'Hypercar' },
  { name: 'Enzo Ferrari', image: './carAllFolderIMG/bestCarInWorld/EnzoFerrari.jpg', description: 'A Formula 1-inspired masterpiece honoring the brand’s founder.', price: 2200000000, category: 'Supercar' },
  { name: 'Koenigsegg CCXR', image: './carAllFolderIMG/bestCarInWorld/Koenigsegg_CCXR.jpg', description: 'A Swedish hypercar pushing performance boundaries.', price: 1200000000, category: 'Hypercar' },
  { name: 'Lamborghini Reventón', image: './carAllFolderIMG/bestCarInWorld/LamborghiniReventon.jpg', description: 'Limited-edition fighter jet-inspired Lambo.', price: 1800000000, category: 'Supercar' },
  { name: 'McLaren F1', image: './carAllFolderIMG/bestCarInWorld/McLarenF1.jpg', description: 'A legendary supercar with a central driving position.', price: 4500000000, category: 'Classic Supercar' },
  { name: 'Porsche Carrera GT', image: './carAllFolderIMG/bestCarInWorld/PorscheCarreraGT.jpg', description: 'A V10-powered masterpiece with racecar DNA.', price: 1000000000, category: 'Supercar' },
  { name: 'SSC Ultimate Aero', image: './carAllFolderIMG/bestCarInWorld/sscUltimateAero.jpg', description: 'Former world’s fastest car, taking on Bugatti.', price: 800000000, category: 'Hypercar' },
  { name: 'Hyundai Creta', image: './carAllFolderIMG/bestCarInIndia/HyundaiCreta.png', description: 'A popular compact SUV known for comfort and features.', price: 2000000, category: 'SUV' },
  { name: 'Kia Seltos', image: './carAllFolderIMG/bestCarInIndia/kiaSyros.avif', description: 'A stylish and tech-loaded compact SUV.', price: 2200000, category: 'SUV' },
  { name: 'Land Rover Defender', image: './carAllFolderIMG/bestCarInIndia/landRoverDefender.avif', description: 'An iconic off-roader reimagined for the modern era.', price: 9000000, category: 'Off-Road SUV' },
  { name: 'Mahindra Scorpio N', image: './carAllFolderIMG/bestCarInIndia/MahindraScorpioN.png', description: 'A rugged SUV with a commanding presence.', price: 2500000, category: 'SUV' },
  { name: 'Mahindra Thar Roxx', image: './carAllFolderIMG/bestCarInIndia/mahindra-thar-roxx.png', description: 'A limited-edition, adventure-ready off-roader.', price: 2700000, category: 'Off-Road' },
  { name: 'Maruti Ertiga', image: './carAllFolderIMG/bestCarInIndia/Maruthi-Ertiga.png', description: 'A practical and fuel-efficient MPV.', price: 1600000, category: 'MPV' },
  { name: 'Maruti Suzuki Baleno', image: './carAllFolderIMG/bestCarInIndia/maruthi-suzuki-baleno.png', description: 'A feature-packed premium hatchback.', price: 1000000, category: 'Hatchback' },
  { name: 'Maruti Swift', image: './carAllFolderIMG/bestCarInIndia/maruthi-swift.png', description: 'A peppy and reliable hatchback loved by many.', price: 900000, category: 'Hatchback' },
  { name: 'Maruti Brezza', image: './carAllFolderIMG/bestCarInIndia/marutiBrezza.png', description: 'A compact SUV with great fuel efficiency.', price: 1300000, category: 'SUV' },
  { name: 'Maruti Dzire', image: './carAllFolderIMG/bestCarInIndia/marutiDzire.png', description: 'A comfortable and fuel-efficient compact sedan.', price: 1200000, category: 'Sedan' },
  { name: 'Tata Nexon', image: './carAllFolderIMG/bestCarInIndia/tata-nexon.png', description: 'A feature-loaded SUV with a 5-star safety rating.', price: 1400000, category: 'SUV' },
  { name: 'Tata Punch', image: './carAllFolderIMG/bestCarInIndia/tata-punch.png', description: 'A micro-SUV with strong road presence.', price: 900000, category: 'Micro SUV' },
  { name: 'Toyota Fortuner', image: './carAllFolderIMG/bestCarInIndia/toyotaFortuner.webp', description: 'A powerful and premium full-size SUV.', price: 3800000, category: 'SUV' },
  { name: 'Toyota Innova Crysta', image: './carAllFolderIMG/bestCarInIndia/toyotaInnovaCrstra.webp', description: 'A luxurious MPV known for reliability.', price: 2500000, category: 'MPV' }
];

const uniqueCars = [];
const carNames = new Set();
cars.forEach(car => {
  if (!carNames.has(car.name)) {
    carNames.add(car.name);
    uniqueCars.push(car);
  }
});
console.log(uniqueCars);

document.addEventListener('DOMContentLoaded', () => {
  const carList = document.getElementById('car-list');
  const searchInput = document.getElementById('search-bar');
  const clearIcon = document.getElementById('clear-search');
  if (!carList) {
      console.error("Element with ID 'car-list' not found.");
      return;
  }
  // Ensure 'cars' array exists before proceeding
  if (typeof cars === "undefined" || !Array.isArray(cars)) {
      console.error("Cars array is not defined or is not an array.");
      return;
  }
  // Show all cars initially
  displayCars("all");

  // Search functionality
  searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();
      clearIcon.style.display = query ? "block" : "none";
      if (!query) {
          displayCars("all");
          return;
      }
      const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query));
      carList.innerHTML = '';
      if (filteredCars.length === 0) {
          carList.innerHTML = `<p id="no-results" class="no-results">🚫 No cars found for "${query}"</p>`;
          return;
      }
      filteredCars.forEach(car => {
          carList.appendChild(createCarCard(car));
      });
  });

  // Clear search input
  clearIcon.addEventListener("click", function () {
      searchInput.value = '';
      clearIcon.style.display = 'none';
      displayCars("all");
  });

  // Category filter
  const categorySelect = document.getElementById('category');
  if (categorySelect) {
      categorySelect.addEventListener('change', (event) => {
          displayCars(event.target.value);
      });
  }
});

// Function to display cars based on category
function displayCars(filterCategory = "all") {
  const carList = document.getElementById('car-list');
  if (!carList) return;
  carList.innerHTML = '';
  cars.forEach(car => {
      if (filterCategory === "all" || car.category === filterCategory) {
          carList.appendChild(createCarCard(car));
      }
  });
}

// Function to create a car card
function createCarCard(car) {
  const carElement = document.createElement('div');
  carElement.classList.add('car-card');
  carElement.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.description}</p>
      <p>Price: ₹${car.price.toLocaleString()}</p>
      <button class="buy-button" onclick="buyCar('${car.name}', '${car.image}', ${car.price})">Shop Now</button>
  `;
  return carElement;
}

// Function to buy a car
function buyCar(name, image, price) {
  let userBalance = parseInt(localStorage.getItem('userBalance')) || 10000000;
  const balanceDisplay = document.getElementById('user-balance');
  if (userBalance >= price) {
      userBalance -= price;
      localStorage.setItem('userBalance', userBalance);
      balanceDisplay.textContent = `₹${userBalance.toLocaleString()}`;
      const carData = { carName: name, carImage: image, carPrice: `₹${price.toLocaleString()}` };
      localStorage.setItem('selectedCar', JSON.stringify(carData));
      window.location.href = "checkout.html";
  } else {
      alert("Insufficient balance! Please add more coins.");
  }
}

// Load balance from localStorage or set a default value
let balance = localStorage.getItem("userBalance") 
  ? parseInt(localStorage.getItem("userBalance")) 
  : 100000000000;
// Get elements
const balanceDisplay = document.getElementById("user-balance");
const addCoinsButton = document.getElementById("add-coins");
const addCustomCoinsButton = document.getElementById("add-custom-coins");
const confirmCustomCoinsButton = document.getElementById("confirm-custom-coins");
const customAmountContainer = document.getElementById("custom-amount-container");
const customAmountInput = document.getElementById("custom-amount");
const notification = document.createElement("div");
// Add notification to the body (if not already in HTML)
notification.classList.add("coin-notification");
document.body.appendChild(notification);
// Function to update balance display
function updateBalanceDisplay() {
  balanceDisplay.textContent = `₹${balance.toLocaleString()}`;
  localStorage.setItem("userBalance", balance); // Store updated balance
}
// Function to add coins
function addCoins(amount) {
  if (amount > 0) {
    balance += amount;
    updateBalanceDisplay();
    // Show notification
    showNotification(`+₹${amount.toLocaleString()} added!`);
  } else {
    alert("Invalid amount. Please enter a valid number.");
  }
}

// Function to show notifications
function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("show-notification");
  setTimeout(() => {
    notification.classList.remove("show-notification");
  }, 2000);
}
// Add ₹50 lakh per click
addCoinsButton.addEventListener("click", () => {
  addCoins(5000000);
});
// Toggle custom amount input visibility
addCustomCoinsButton.addEventListener("click", () => {
  if (customAmountContainer.style.display === "block") {
    customAmountContainer.style.display = "none";
    customAmountInput.value = ""; // Clear input when hidden
  } else {
    customAmountContainer.style.display = "block";
    customAmountInput.focus();
  }
});

// Function to add custom amount
confirmCustomCoinsButton.addEventListener("click", () => {
  const customAmount = parseInt(customAmountInput.value.trim());

  if (!isNaN(customAmount) && customAmount > 0) {
    addCoins(customAmount);
    customAmountInput.value = ""; // Clear input after adding
    customAmountContainer.style.display = "none"; // Hide after adding
  } else {
    alert("Please enter a valid amount!");
    customAmountInput.focus(); // Keep focus on invalid input
  }
});
// Hide input box when clicking outside
document.addEventListener("click", (event) => {
  if (!customAmountContainer.contains(event.target) && event.target !== addCustomCoinsButton) {
    customAmountContainer.style.display = "none";
  }
});
// Initialize balance display
updateBalanceDisplay();

document.addEventListener('DOMContentLoaded', () => {
  const carList = document.getElementById('car-list');
  const categorySelect = document.getElementById('category');
  const sortSelect = document.getElementById('sort');
  if (!carList || !categorySelect || !sortSelect) {
      console.error("Required elements not found.");
      return;
  }
  categorySelect.addEventListener('change', updateCarList);
  sortSelect.addEventListener('change', updateCarList);
  function updateCarList() {
      let filteredCars = filterCarsByCategory(cars, categorySelect.value);
      let sortedCars = sortCars(filteredCars, sortSelect.value);
      carList.innerHTML = '';
      if (sortedCars.length === 0) {
          carList.innerHTML = `<h3 class="no-results">🚫 No cars found in this category or sort option.</h3>`;
      } else {
          displayCars(sortedCars);
      }
  }

  function filterCarsByCategory(carArray, category) {
      return category === "all" ? carArray : carArray.filter(car => car.category === category);
  }

  function sortCars(carArray, criteria) {
      let sortedCars = [...carArray];
      switch (criteria) {
          case 'price-low-high':
              sortedCars.sort((a, b) => a.price - b.price);
              break;
          case 'price-high-low':
              sortedCars.sort((a, b) => b.price - a.price);
              break;
          case 'newest':
              if (sortedCars.every(car => !car.year || isNaN(car.year))) {
                  carList.innerHTML = `<h3 class="no-results">🚫 No cars have a valid 'year' property for sorting.</h3>`;
                  console.log("No cars have a valid 'year' property for sorting.");
                  return [];
              }
              sortedCars.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
              break;
          case 'popularity':
              if (sortedCars.every(car => !car.popularity || isNaN(car.popularity))) {
                  carList.innerHTML = `<div class="results-container">
                                          <h3 class="no-results">🚫 No cars have a valid 'popularity' property for sorting.</h3>
                                       </div>`;
                  console.log("No cars have a valid 'popularity' property for sorting.");
                  
                  return [];
              }
              sortedCars.sort((a, b) => Number(b.popularity || 0) - Number(a.popularity || 0));
              break;
          default:
              break; // Default to relevance (unsorted)
      }
      return sortedCars;
  }

  function displayCars(carArray) {
      carArray.forEach(car => {
          carList.appendChild(createCarCard(car));
      });
  }
  // Initial display of cars
  updateCarList();
});

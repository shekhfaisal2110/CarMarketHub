//car comparison tool
const carsData =[
  {"id": 1,"make": "Honda","model": "Accord","year": 2023,"price": "30 lakh","engine": "1.5L Turbocharged 4-Cylinder","mileage": "12,000 miles","transmission": "CVT Automatic"},
  {"id": 2,"make": "Ford","model": "Mustang","year": 2023,"price": "70 lakh","engine": "5.0L V8","mileage": "8,000 miles","transmission": "6-Speed Manual"},
  {"id": 3,"make": "Toyota","model": "Camry","year": 2023,"price": "48 lakh","engine": "2.5L 4-Cylinder","mileage": "10,000 miles","transmission": "Automatic"},
  {"id": 4,"make": "Tesla","model": "Model 3","year": 2023,"price": "60 lakh","engine": "Electric","mileage": "15,000 miles","transmission": "Single-Speed Automatic"},
  {"id": 5,"make": "BMW","model": "X5","year": 2023,"price": "1 Crore","engine": "3.0L Inline-6 Turbo","mileage": "9,000 miles","transmission": "8-Speed Automatic"},
  {"id": 6,"make": "Audi","model": "Q5","year": 2023,"price": "75 lakh","engine": "2.0L Turbocharged 4-Cylinder","mileage": "10,500 miles","transmission": "7-Speed Automatic"},
  {"id": 7,"make": "Mercedes-Benz","model": "Maybach S-Class","year": 2023,"price": "2.77 Crore","engine": "4.0L V8","mileage": "3,000 miles","transmission": "Automatic"},
  {"id": 8,"make": "Nissan","model": "Altima SR VC-Turbo","year": 2023,"price": "35 lakh","engine": "2.0L Variable Compression Turbo","mileage": "12,000 miles","transmission": "CVT Automatic"},
  {"id": 9,"make": "Chevrolet","model": "Malibu Premier","year": 2023,"price": "40 lakh","engine": "2.0L Turbocharged 4-Cylinder","mileage": "9,500 miles","transmission": "9-Speed Automatic"},
  {"id": 10,"make": "Ferrari","model": "Roma","year": 2023,"price": "3.76 Crore","engine": "3.9L Twin-Turbo V8","mileage": "5,000 miles","transmission": "8-Speed Automatic"},
  {"id": 11,"make": "Lamborghini","model": "Huracan Evo","year": 2023,"price": "3.21 Crore","engine": "5.2L V10","mileage": "6,000 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 12,"make": "Porsche","model": "911","year": 2023,"price": "1.86 Crore","engine": "3.0L Twin-Turbo Flat-6","mileage": "7,500 miles","transmission": "8-Speed PDK Automatic"},
  {"id": 13,"make": "BMW","model": "Z4","year": 2023,"price": "90 lakh","engine": "3.0L Turbocharged Inline-6","mileage": "8,000 miles","transmission": "8-Speed Automatic"},
  {"id": 14,"make": "Rolls-Royce","model": "Sweptail","year": 2023,"price": "98 Crore","engine": "6.75L V12","mileage": "1,000 miles","transmission": "8-Speed Automatic"},
  {"id": 15,"make": "Tesla","model": "Model 3","year": 2023,"price": "60 lakh","engine": "Dual Electric Motors","mileage": "15,000 miles","transmission": "Single-Speed Automatic"},
  {"id": 16,"make": "Audi","model": "Q5","year": 2023,"price": "80 lakh","engine": "2.0L Turbocharged Inline-4","mileage": "10,500 miles","transmission": "7-Speed Automatic"},
  {"id": 17,"make": "Mercedes-Benz","model": "E-Class","year": 2023,"price": "1.10 Crore","engine": "3.0L Inline-6 Turbo","mileage": "9,000 miles","transmission": "9-Speed Automatic"},
  {"id": 18,"make": "Jaguar","model": "F-Type","year": 2023,"price": "1.50 Crore","engine": "5.0L Supercharged V8","mileage": "8,200 miles","transmission": "8-Speed Automatic"},
  {"id": 19,"make": "Chevrolet","model": "Equinox","year": 2023,"price": "45 lakh","engine": "1.5L Turbocharged Inline-4","mileage": "11,000 miles","transmission": "6-Speed Automatic"},
  {"id": 20,"make": "Bentley","model": "Continental GTC","year": 2023,"price": "3.80 Crore","engine": "6.0L W12 Twin-Turbo","mileage": "5,500 miles","transmission": "8-Speed Automatic"},
  {"id": 21,"make": "Ferrari","model": "812 Superfast","year": 2023,"price": "5.20 Crore","engine": "6.5L V12","mileage": "4,500 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 22,"make": "Ford","model": "Mustang GT","year": 2023,"price": "80 lakh","engine": "5.0L V8","mileage": "12,000 miles","transmission": "6-Speed Manual"},
  {"id": 23,"make": "BMW","model": "X5","year": 2023,"price": "1.20 Crore","engine": "3.0L Turbocharged Inline-6","mileage": "10,000 miles","transmission": "8-Speed Automatic"},
  {"id": 24,"make": "Lamborghini","model": "Huracan Evo","year": 2023,"price": "3.75 Crore","engine": "5.2L V10","mileage": "6,500 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 25,"make": "Porsche","model": "911 Turbo S","year": 2023,"price": "3.50 Crore","engine": "3.8L Twin-Turbo Flat-6","mileage": "7,200 miles","transmission": "8-Speed PDK Automatic"},
  {"id": 26,"make": "Mercedes-Benz","model": "AMG GT","year": 2023,"price": "2.80 Crore","engine": "4.0L Twin-Turbo V8","mileage": "8,000 miles","transmission": "7-Speed Automatic"},
  {"id": 27,"make": "Nissan","model": "GT-R","year": 2023,"price": "2.40 Crore","engine": "3.8L Twin-Turbo V6","mileage": "9,500 miles","transmission": "6-Speed Dual-Clutch Automatic"},
  {"id": 28,"make": "Toyota","model": "Supra","year": 2023,"price": "90 lakh","engine": "3.0L Turbocharged Inline-6","mileage": "11,000 miles","transmission": "8-Speed Automatic"},
  {"id": 29,"make": "Audi","model": "R8 V10 Performance","year": 2023,"price": "2.50 Crore","engine": "5.2L V10","mileage": "5,500 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 30,"make": "Bentley","model": "Continental GT","year": 2023,"price": "3.20 Crore","engine": "6.0L Twin-Turbo W12","mileage": "4,200 miles","transmission": "8-Speed Automatic"},
  {"id": 31,"make": "Ferrari","model": "812 Superfast","year": 2023,"price": "5.75 Crore","engine": "6.5L V12","mileage": "3,800 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 32,"make": "Aston Martin","model": "DB11","year": 2023,"price": "3.80 Crore","engine": "5.2L Twin-Turbo V12","mileage": "6,000 miles","transmission": "8-Speed Automatic"},
  {"id": 33,"make": "Pagani","model": "Huayra Roadster","year": 2023,"price": "17 Crore","engine": "6.0L Twin-Turbo V12","mileage": "2,000 miles","transmission": "7-Speed Automated Manual"},
  {"id": 34,"make": "Rolls-Royce","model": "Phantom","year": 2023,"price": "9.50 Crore","engine": "6.75L Twin-Turbo V12","mileage": "2,500 miles","transmission": "8-Speed Automatic"},
  {"id": 35,"make": "Bugatti","model": "Chiron Super Sport","year": 2023,"price": "30 Crore","engine": "8.0L Quad-Turbo W16","mileage": "1,200 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 36,"make": "Lamborghini","model": "Huracan Tecnica","year": 2023,"price": "4.50 Crore","engine": "5.2L V10","mileage": "4,800 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 37,"make": "McLaren","model": "765LT","year": 2023,"price": "5.00 Crore","engine": "4.0L Twin-Turbo V8","mileage": "3,200 miles","transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 38,"make": "Porsche","model": "911 Turbo S","year": 2023,"price": "3.50 Crore","engine": "3.8L Twin-Turbo Flat-6","mileage": "5,600 miles","transmission": "8-Speed PDK Automatic"},
  {"id": 39,"make": "Tesla","model": "Model S Plaid","year": 2023,"price": "1.50 Crore","engine": "Tri-Motor Electric","mileage": "6,500 miles","transmission": "Single-Speed Automatic"},
  {"id": 40, "make": "Koenigsegg", "model": "Jesko", "year": 2023, "price": "25 Crore", "engine": "5.0L Twin-Turbo V8", "mileage": "500 miles", "transmission": "9-Speed Light Speed Transmission"},
  {"id": 41, "make": "Mercedes-Benz", "model": "AMG GT Black Series", "year": 2023, "price": "5.50 Crore", "engine": "4.0L Twin-Turbo V8", "mileage": "2,800 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 42, "make": "Rimac", "model": "Nevera", "year": 2023, "price": "18 Crore", "engine": "Quad-Motor Electric", "mileage": "1,000 miles", "transmission": "Single-Speed Automatic"},
  {"id": 43, "make": "Ferrari", "model": "SF90 Stradale", "year": 2023, "price": "7.50 Crore", "engine": "4.0L Twin-Turbo V8 Hybrid", "mileage": "2,500 miles", "transmission": "8-Speed Dual-Clutch Automatic"},
  {"id": 44, "make": "Aston Martin", "model": "Valkyrie", "year": 2023, "price": "25 Crore", "engine": "6.5L V12 Hybrid", "mileage": "700 miles", "transmission": "7-Speed Automated Manual"},
  {"id": 45, "make": "Bugatti", "model": "Chiron Super Sport", "year": 2023, "price": "30 Crore", "engine": "8.0L Quad-Turbo W16", "mileage": "1,200 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 46, "make": "Rolls-Royce", "model": "Spectre", "year": 2024, "price": "8.00 Crore", "engine": "Dual-Motor Electric", "mileage": "500 miles", "transmission": "Single-Speed Automatic"},
  {"id": 47, "make": "Maserati", "model": "MC20", "year": 2023, "price": "4.50 Crore", "engine": "3.0L Twin-Turbo V6", "mileage": "4,300 miles", "transmission": "8-Speed Dual-Clutch Automatic"},
  {"id": 48, "make": "McLaren", "model": "720S", "year": 2023, "price": "5.10 Crore", "engine": "4.0L Twin-Turbo V8", "mileage": "3,500 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 49, "make": "Bugatti", "model": "Chiron Super Sport", "year": 2023, "price": "19.50 Crore", "engine": "8.0L Quad-Turbo W16", "mileage": "1,200 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 50, "make": "Rolls-Royce", "model": "Ghost Black Badge", "year": 2023, "price": "7.95 Crore", "engine": "6.75L Twin-Turbo V12", "mileage": "2,800 miles", "transmission": "8-Speed Automatic"},  
  {"id": 51, "make": "Ferrari", "model": "SF90 Spider", "year": 2023, "price": "7.40 Crore", "engine": "4.0L Twin-Turbo V8 Hybrid", "mileage": "2,500 miles", "transmission": "8-Speed Dual-Clutch Automatic"},
  {"id": 52, "make": "Lamborghini", "model": "Revuelto", "year": 2023, "price": "8.00 Crore", "engine": "6.5L V12 Hybrid", "mileage": "1,000 miles", "transmission": "8-Speed Dual-Clutch Automatic"},
  {"id": 53, "make": "Bentley", "model": "Flying Spur Mulliner", "year": 2023, "price": "5.25 Crore", "engine": "6.0L Twin-Turbo W12", "mileage": "3,000 miles", "transmission": "8-Speed Automatic"},
  {"id": 54, "make": "Porsche", "model": "Taycan Turbo S", "year": 2023, "price": "2.50 Crore", "engine": "Electric Dual Motor", "mileage": "5,000 miles", "transmission": "1-Speed Automatic"},
  {"id": 55, "make": "Mercedes-Benz", "model": "AMG GT Black Series", "year": 2023, "price": "5.50 Crore", "engine": "4.0L Twin-Turbo V8", "mileage": "2,200 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 56, "make": "Aston Martin", "model": "Valkyrie", "year": 2023, "price": "25.00 Crore", "engine": "6.5L Naturally Aspirated V12 Hybrid", "mileage": "500 miles", "transmission": "7-Speed Automated Manual"},
  {"id": 57, "make": "Koenigsegg", "model": "Jesko Absolut", "year": 2023, "price": "28.00 Crore", "engine": "5.0L Twin-Turbo V8", "mileage": "700 miles", "transmission": "9-Speed Light Speed Transmission"},
  {"id": 58, "make": "Pagani", "model": "Huayra Roadster BC", "year": 2023, "price": "24.50 Crore", "engine": "6.0L Twin-Turbo V12", "mileage": "1,200 miles", "transmission": "7-Speed Automated Manual"},
  {"id": 59, "make": "Ferrari", "model": "Daytona SP3", "year": 2023, "price": "20.00 Crore", "engine": "6.5L Naturally Aspirated V12", "mileage": "800 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 60, "make": "Bugatti", "model": "Bolide", "year": 2023, "price": "40.00 Crore", "engine": "8.0L Quad-Turbo W16", "mileage": "500 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 61, "make": "Lamborghini", "model": "Sian FKP 37", "year": 2023, "price": "26.00 Crore", "engine": "6.5L V12 Hybrid", "mileage": "1,000 miles", "transmission": "7-Speed Automated Manual"},
  {"id": 62, "make": "McLaren", "model": "Elva", "year": 2023, "price": "18.00 Crore", "engine": "4.0L Twin-Turbo V8", "mileage": "1,500 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 63, "make": "Mercedes-Benz", "model": "AMG One", "year": 2023, "price": "22.00 Crore", "engine": "1.6L Turbocharged V6 Hybrid", "mileage": "700 miles", "transmission": "8-Speed Automated Manual"},
  {"id": 64, "make": "Aston Martin", "model": "DBS 770 Ultimate", "year": 2023, "price": "6.00 Crore", "engine": "5.2L Twin-Turbo V12", "mileage": "2,000 miles", "transmission": "8-Speed Automatic"},
  {"id": 65, "make": "Bentley", "model": "Batur", "year": 2023, "price": "16.00 Crore", "engine": "6.0L Twin-Turbo W12", "mileage": "900 miles", "transmission": "8-Speed Automatic"},
  {"id": 66, "make": "Porsche", "model": "918 Spyder", "year": 2023, "price": "14.00 Crore", "engine": "4.6L V8 Hybrid", "mileage": "1,800 miles", "transmission": "7-Speed Dual-Clutch Automatic"},
  {"id": 67, "make": "Rolls-Royce", "model": "Spectre", "year": 2024, "price": "10.00 Crore", "engine": "Electric Dual Motor", "mileage": "500 miles", "transmission": "Single-Speed Automatic"},
  {"id": 68, "make": "Koenigsegg", "model": "Gemera", "year": 2024, "price": "30.00 Crore", "engine": "2.0L Twin-Turbo I3 Hybrid", "mileage": "600 miles", "transmission": "Single-Speed Direct Drive"},
  {"id": 69, "make": "Hennessey", "model": "Venom F5", "year": 2023, "price": "20.00 Crore", "engine": "6.6L Twin-Turbo V8", "mileage": "1,200 miles", "transmission": "7-Speed Automated Manual"},
  {"id": 70, "make": "SSC", "model": "Tuatara", "year": 2023, "price": "22.00 Crore", "engine": "5.9L Twin-Turbo V8", "mileage": "1,100 miles", "transmission": "7-Speed Automated Manual"}
];

  // Function to populate car selection dropdown
  function populateCarSelection(cars) {
    const car1Select = document.getElementById('car1');
    const car2Select = document.getElementById('car2');
    // Clear existing options
    car1Select.innerHTML = '';
    car2Select.innerHTML = '';
    // Populate dropdowns with car options
    cars.forEach(car => {
      const option1 = document.createElement('option');
      option1.value = car.id;
      option1.textContent = `${car.make} ${car.model} (${car.year})`;
      car1Select.appendChild(option1);
  
      const option2 = document.createElement('option');
      option2.value = car.id;
      option2.textContent = `${car.make} ${car.model} (${car.year})`;
      car2Select.appendChild(option2);
    });
    // Add event listeners to update comparison when a car is selected
    car1Select.addEventListener('change', updateComparison);
    car2Select.addEventListener('change', updateComparison);
  }
  
  // Function to update the comparison based on selected cars
  function updateComparison() {
    const car1Id = document.getElementById('car1').value;
    const car2Id = document.getElementById('car2').value;
    // If both cars are selected, display comparison
    if (car1Id && car2Id) {
      const car1 = carsData.find(car => car.id === parseInt(car1Id));
      const car2 = carsData.find(car => car.id === parseInt(car2Id));
      displayComparisonResults(car1, car2);
    } else {
      document.getElementById('comparison-results').innerHTML = '';
    }
  }
  
  // Function to display comparison results
  function displayComparisonResults(car1, car2) {
    const resultsContainer = document.getElementById('comparison-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    const car1Card = createComparisonCard(car1);
    const car2Card = createComparisonCard(car2);
    resultsContainer.appendChild(car1Card);
    resultsContainer.appendChild(car2Card);
  }
  
  // Function to create the comparison card for each car
  function createComparisonCard(car) {
    const card = document.createElement('div');
    card.classList.add('comparison-card');
    card.innerHTML = `
      <h3>${car.make} ${car.model} (${car.year})</h3>
      <p><strong>Price:</strong> ₹${car.price}</p>
      <div class="specs">
        <div><strong>Engine:</strong> ${car.engine}</div>
        <div><strong>Mileage:</strong> ${car.mileage}</div>
        <div><strong>Transmission:</strong> ${car.transmission}</div>
      </div>
    `;
    return card;
  }
  
  // Initialize page with car options and comparison tool
  window.addEventListener('DOMContentLoaded', () => {
    populateCarSelection(carsData); // Populate car selection dropdowns
  });
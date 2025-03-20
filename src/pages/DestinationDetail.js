import { useParams } from "react-router-dom";
import murree from "../assets/Murree.webp";
import skardu from "../assets/Skardu.jpg";
import hunza from "../assets/Hunza_Valley_HDR.jpg";
import swat from "../assets/Swat Valley.jpg";
import fairy from "../assets/Fairy Meadows.jpg";
import neelum from "../assets/Neelum Valley.jpg";



const destinations = [
  {
    id: "murree",
    name: "Murree",
    image: murree,
    description: "A beautiful hill station known for its lush green mountains, scenic views, and a popular getaway for tourists.",
    bestTime: "March - October",
    attractions: ["Mall Road", "Pindi Point", "Patriata (New Murree)", "Kashmir Point"],
    activities: ["Hiking", "Cable Car Ride", "Snowfall Sightseeing (Winter)"],
    temperature: "5°C - 25°C",
    hotels: ["Pearl Continental Bhurban", "Shangrila Resort", "Lockwood Hotel"],
    history: "Murree was established as a British colonial hill station in 1851. It served as a summer retreat for British officials.",
    cuisine: ["Chapli Kebab", "Kashmiri Chai", "Makai Roti with Sarson Ka Saag"],
    festivals: ["Snowfall Festival (Winter)", "Independence Day Celebrations (14th August)"],
    travelTips: ["Carry warm clothes in winter.", "Try local street food but ensure hygiene.", "Avoid weekends for less crowd."]
  },
  {
    id: "skardu",
    name: "Skardu",
    image: skardu,
    description: "A stunning mountainous region in Gilgit-Baltistan, known for its scenic landscapes, high-altitude lakes, and trekking routes.",
    bestTime: "May - October",
    attractions: ["Shangrila Resort", "Upper Kachura Lake", "Shigar Fort", "Deosai National Park", "Satpara Lake"],
    activities: ["Trekking", "Mountaineering", "Boating", "Camping", "Wildlife Exploration"],
    temperature: "-5°C - 20°C",
    hotels: ["Serena Shigar Fort", "Shangrila Resort", "Hotel One Skardu"],
    history: "Skardu has been an important trade route connecting China and Central Asia, with a rich Tibetan and Balti cultural influence.",
    cuisine: ["Balti Handi", "Prapu (Buckwheat Noodles)", "Apricot Soup"],
    festivals: ["Shandur Polo Festival", "Silk Route Festival"],
    travelTips: ["Pack warm clothes even in summer.", "Best to book flights in advance due to weather dependency.", "Use local guides for trekking."]
  },
  {
    id: "hunza",
    name: "Hunza Valley",
    image: hunza,
    description: "A picturesque valley in Gilgit-Baltistan, famous for its majestic mountains, glaciers, and rich culture.",
    bestTime: "April - October",
    attractions: ["Baltit Fort", "Altit Fort", "Attabad Lake", "Eagle’s Nest", "Passu Cones"],
    activities: ["Trekking", "Boating", "Cultural Tours", "Photography"],
    temperature: "-10°C - 25°C",
    hotels: ["Hunza Serena Inn", "Eagle’s Nest Hotel", "Darbar Hotel"],
    history: "Hunza was once a princely state known for its strategic location on the ancient Silk Road trade route.",
    cuisine: ["Chapshuro (Meat Pie)", "Burus Shapik (Cheese Bread)", "Hunza Apricot Cake"],
    festivals: ["Spring Blossom Festival", "Ginani Festival (Harvest Festival)"],
    travelTips: ["Use a 4x4 vehicle for upper Hunza travel.", "Try local Hunza organic foods.", "Respect local customs and traditions."]
  },
  {
    id: "swat",
    name: "Swat Valley",
    image: swat,
    description: "Often called the 'Switzerland of Pakistan,' Swat Valley is known for its lush green meadows, rivers, and historic sites.",
    bestTime: "April - October",
    attractions: ["Malam Jabba", "Fizagat Park", "Mingora Bazaar", "Kalam Valley", "Mahodand Lake"],
    activities: ["Skiing (Winter)", "Trekking", "Boating", "Horse Riding"],
    temperature: "0°C - 30°C",
    hotels: ["Swat Serena Hotel", "Mingora Continental", "Rock City Resort"],
    history: "Swat has been home to Buddhist civilization and is rich in Gandhara culture, with numerous archaeological sites.",
    cuisine: ["Charsi Tikka", "Swati Pulao", "Desi Makhan (Butter)"],
    festivals: ["Swat Snow Festival", "Summer Cultural Festival"],
    travelTips: ["Winter visitors should be prepared for snowfall.", "Avoid traveling during monsoon season.", "Book hotels in advance in peak seasons."]
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows",
    image: fairy,
    description: "A breathtaking alpine meadow with a stunning view of Nanga Parbat, Pakistan’s second-highest peak.",
    bestTime: "June - September",
    attractions: ["Fairy Meadows National Park", "Raikot Bridge", "Nanga Parbat Base Camp"],
    activities: ["Trekking", "Camping", "Photography"],
    temperature: "5°C - 20°C",
    hotels: ["Fairy Meadows Cottages", "Raikot Sarai"],
    history: "Fairy Meadows was named by German climbers who were mesmerized by its beauty. It serves as the starting point for treks to Nanga Parbat.",
    cuisine: ["Local Trout Fish", "Butter Tea", "Organic Honey"],
    festivals: ["Summer Trekking Festival"],
    travelTips: ["4x4 vehicle required for Raikot Bridge ride.", "Prepare for a 3-4 hour trek to Fairy Meadows.", "Pack warm clothes as nights get cold."]
  },
  {
    id: "neelum-valley",
    name: "Neelum Valley",
    image: neelum,
    description: "A breathtaking valley in Azad Kashmir, known for its lush green landscapes, pristine rivers, and stunning mountain views.",
    bestTime: "April - October",
    attractions: ["Keran", "Sharda", "Arang Kel", "Ratti Gali Lake", "Taobat", "Dhani Waterfall"],
    activities: ["Trekking", "Camping", "Boating", "Photography"],
    temperature: "10°C - 25°C (Summer), -10°C - 5°C (Winter)",
    hotels: ["Neelum Star Hotel", "Wadi Resort", "PTDC Motel Kel", "Glamping Pods"],
    history: "Neelum Valley has been historically significant due to its strategic location and rich Kashmiri culture.",
    cuisine: ["Kashmiri Dum Aloo", "Noon Chai", "Gushtaba", "Rogan Josh"],
    festivals: ["Neelum Cultural Festival", "Sharda Mela"],
    travelTips: ["Cash is required as ATMs are limited.", "Use SCOM SIM for better network coverage.", "Respect local traditions and dress modestly."]
  }
];


function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === id);

  if (!destination) {
    return (
      <div className="p-6 text-white bg-black">
        <h1 className="text-2xl font-bold">Destination Not Found</h1>
        <p>Sorry, we couldn't find details for this destination.</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-white bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{destination.name}</h1>
      
      <img src={destination.image} alt={destination.name} className="w-full max-w-lg rounded-lg mb-4 shadow-lg" />
      
      <p className="text-lg text-gray-300 max-w-xl text-center mb-6">{destination.description}</p>

      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full shadow-md">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <p><strong>Best Time to Visit:</strong> {destination.bestTime}</p>
        <p><strong>Average Temperature:</strong> {destination.temperature}</p>

        <h3 className="text-lg font-semibold mt-4">History & Background</h3>
        <p className="text-gray-400">{destination.history}</p>

        <h3 className="text-lg font-semibold mt-4">Top Attractions</h3>
        <ul className="list-disc list-inside text-gray-300">{destination.attractions.map((a, i) => <li key={i}>{a}</li>)}</ul>

        <h3 className="text-lg font-semibold mt-4">Local Cuisine</h3>
        <ul className="list-disc list-inside text-gray-300">{destination.cuisine.map((food, i) => <li key={i}>{food}</li>)}</ul>

        <h3 className="text-lg font-semibold mt-4">Travel Tips</h3>
        <ul className="list-disc list-inside text-gray-300">{destination.travelTips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
      </div>
    </div>  );
}

export default DestinationDetail;

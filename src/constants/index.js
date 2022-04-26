import img1 from '../assets/slider/actors.png'
import img2 from '../assets/slider/actor-detail.png'
import img3 from '../assets/slider/films.png'
import img4 from '../assets/slider/startchips.png'
import img5 from '../assets/slider/vehicles.png'

const sliderData = [
  {
    image: img1,
    link: '/people'
  },
  {
    image: img2,                                          
    link: '/people'
  },
  {
    image: img3,
    link: '/films'
  },
  {
    image: img4,
    link: '/startships'
  },
  {
    image: img5,
    link: '/vehicles'
  }
]

const baseURL = "https://swapi.dev/api/";

const filmsDetailsList = [
  "title",
  "episode_id",
  "director",
  "producer",
  "release_date"
];

const actorsDetailsList = [
  "name",
  "height",
  "mass",
  "hair_color",
  "eye_color",
  "birth_year",
  "gender",
];

const starshipsDetailsList = [
  "name",
  "model",
  "manufacturer",
  "cost_in_credits",
  "length",
  "max_atmosphering_speed",
  "crew"
];


const vehiclesDetalsList = [
  "name",
	"model",
	"manufacturer",
	"cost_in_credits",
	"length",
	"max_atmosphering_speed",
	"crew",
	"passengers",
	"cargo_capacity",
	"consumables",
	"vehicle_class"
]

const speciesDetailsList = [
  "name",
  "classification",
  "designation",
  "average_height",
  "skin_colors",
  "hair_colors",
  "eye_colors",
  "average_lifespan",
  "language"  
]

export { baseURL, filmsDetailsList, starshipsDetailsList, vehiclesDetalsList, speciesDetailsList, actorsDetailsList, sliderData};

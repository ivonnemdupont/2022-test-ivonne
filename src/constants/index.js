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

export { baseURL, filmsDetailsList, starshipsDetailsList, vehiclesDetalsList, speciesDetailsList, actorsDetailsList };

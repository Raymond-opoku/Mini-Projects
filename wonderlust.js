//https://gist.github.com/ba2704a1ade5bf51b44fb97cdbbde93a



// Foursquare API Info
const clientId = 'OQFYAE2SYAUTOGEOCG0HKENHLN3QI1XG3YTDTH3A2VFIQCV2';
const clientSecret = 'JEF1JTD3NLENWIYGVUATLQXXLKTYERJLFDJ4QL5UZRGEBZK5';
const url = 'https://api.foursquare.com/v3/places/search?near=';

// OpenWeather Info
const openWeatherKey = 'df3bf713b59185f97c75a175171a8943';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
const city=$input.val();
const urlToFetch= `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20211125`;


try {
  const response = await fetch(urlToFetch);
  if (response.ok) {
    console.log(response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const venues=jsonResponse.response.groups[0].items.maps(item=>item.venue);
    console.log(venues)
    return venues;
}
else{
  throw new Error('Response Failed!')
}
 
} catch (error) {
  console.log(error);
}
}
const getForecast = async () => {
   const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
   try {
     const response = await fetch(urlToFetch);

     if (response.ok) {
  const jsonResponse = await response.json();
   return jsonResponse; 
}
  } catch (error) {
    console.log(error);
  }

};


// Render functions
const renderVenues = (venues) => {
   $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);


const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)
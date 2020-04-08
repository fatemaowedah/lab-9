const Weather = function (day) {
    this.forecast = day.weather.description;
    this.time = new Date(day.valid_date).toString().split(' ').slice(0, 4).join(' ');
  }
module.exports = Weather;
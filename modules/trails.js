const Trails = function (TT) {
    this.name = TT.name;
    this.location = TT.location;
    this.length = TT.length;
    this.stars = TT.stars;
    this.star_votes = TT.starVotes;
    this.summary = TT.summary;
    this.trail_url = TT.trail_url;
    this.conditions = TT.conditionStatus;
    this.condition_date = TT.conditionDate.slice(0, 10);
    this.condition_time = TT.conditionDate.slice(12, 19);
  }
  module.exports = Trails;
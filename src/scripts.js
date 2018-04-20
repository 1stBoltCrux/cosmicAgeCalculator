// Business Logic
export class Years {
  constructor(age, date1, date2, lifeExpectancy) {
    this.age = age;
    this.date1 = date1;
    this.date2 = date2;
    this.lifeExpectancy = lifeExpectancy;
    this.planetCalc = [1, 4.166666666666667, 1.612903225806452, 0.5319148936170213, 0.0843170320404722];

  }

  ageToSeconds() {
    let ageInSeconds = this.age * 31536000;
    return ageInSeconds;
  }

  dateDifference() {
    let dateDifference = this.date1 - this.date2
    let differenceInSeconds = dateDifference/1000;
    return differenceInSeconds;
  }

  mercuryYears() {
    let mercuryAge = this.age * 4.166666666666667;
    return Math.round(mercuryAge);
  }

  venusYears() {
    let venusAge = this.age * 1.612903225806452;
    return Math.round(venusAge);
  }

  marsYears() {
    let marsAge = this.age * 0.5319148936170213;
    return Math.round(marsAge);
  }

  jupiterYears() {
    let jupiterAge = this.age * 0.0843170320404722;
    return Math.round(jupiterAge);
  }
  remainingLifeCalculator() {
    let expectancyPerPlanetArray = [];
    let agePerPlanetArray = [];

    for (var i = 0; i < this.planetCalc.length; i++) {
      let lifeExpectancyPerPlanet = Math.round(this.planetCalc[i] * this.lifeExpectancy);
      expectancyPerPlanetArray.push(lifeExpectancyPerPlanet);
    }
    for (var j = 0; j < this.planetCalc.length; j++) {
      let agePerPlanet = Math.round(this.planetCalc[j] * this.age);
      agePerPlanetArray.push(agePerPlanet);
    }
    console.log(expectancyPerPlanetArray);
    console.log(agePerPlanetArray);
    let timeRemainingArray = expectancyPerPlanetArray.map(function(item, index){
      return item - agePerPlanetArray[index];
      // console.log(timeRemainingArray);
    });
    console.log(timeRemainingArray);
      return timeRemainingArray;
      }
    }

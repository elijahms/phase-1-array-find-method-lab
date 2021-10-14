const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]




function superbowlWin(element) {
    const newArray = element.find(element => element.result === "W");
        if (newArray) {
            return newArray.year
        } else {
            return undefined
        }
}



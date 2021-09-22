var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function(height) {
  let highestArea = 0;
  for (let i = 0; i < height.length; i++) {
      console.log("First wall is " + height[i]);
    for (let j = i + 1; j < height.length; j++) {
        console.log("second wall is " + height[j]);
      //calculate area
       let smallestWall = smallest(height[i], height[j]);
       console.log("smallest wall is " + smallestWall);
       console.log("distance between walls is " + (j - i));
       console.log("total area is " + smallestWall * (j - i));
      let area = smallestWall * (j - i);
      if (area > highestArea) { 
          highestArea = area;
      }
    }
  }
  return highestArea;
};

console.log(maxArea(height));

function smallest(first, second) {
  return first < second ? first : second;
}
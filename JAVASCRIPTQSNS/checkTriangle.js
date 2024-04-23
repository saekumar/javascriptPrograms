const checkTriangle = (a, b, c) => {
  if (a === b && b === c) return 'Equilateral'
  if (a === b || b === c || a === c) return 'Isosceles'
  return 'Scalene'
}

console.log(checkTriangle(6, 6, 6))

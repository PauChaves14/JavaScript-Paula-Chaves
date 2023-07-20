const words = [
  "Messi",
  "Riquelme",
  "Gallardo",
  "Milito",
  "Bochini",
  "Lazzaro",
  "Aimar",
  "Scaloni",
  "Montiel",
  "Di Maria",
  "De Paul",
  "Satanas Paez",
  "Luly Rios",
  "Garrafa Sanchez",
  "Bazan Vera",
  "Akerman",
  "Chino Luna",
  "Cavenaghi",
  "Vietto",
  "Discoteca Nuñez",
  "Maradona",
  "Lautaro",
  "Julian Alvarez",
  "Palermo",
];

const numbers = words.map((word, index) => ({
  word,
  number: index + 1,
}));

console.log(numbers);
[
  {
    word: "Messi",
    number: 1,
  },
  {
    word: "Riquelme",
    number: 8,
  },
  {
    word: "Gallardo",
    number: 10,
  },
  {
    word: "Milito",
    number: 22,
  },
  {
    word: "Bochini",
    number: 5,
  },
  {
    word: "Lazzaro",
    number: 9,
  },
  {
    word: "Aimar",
    number: 7,
  },
  {
    word: "Scaloni",
    number: 6,
  },
  {
    word: "Montiel",
    number: 44,
  },
  {
    word: "Di Maria",
    number: 10,
  },
  {
    word: "De Paul",
    number: 11,
  },
  {
    word: "Satanas Paez",
    number: 12,
  },
  {
    word: "Luly Rios",
    number: 13,
  },
  {
    word: "Garrafa Sanchez",
    number: 14,
  },
  {
    word: "Bazan Vera",
    number: 15,
  },
  {
    word: "Akerman",
    number: 16,
  },
  {
    word: "Chino Luna",
    number: 17,
  },
  {
    word: "Cavenaghi",
    number: 18,
  },
  {
    word: "Vietto",
    number: 19,
  },
  {
    word: "Discoteca Nuñez",
    number: 20,
  },
  {
    word: "Maradona",
    number: 100,
  },
  {
    word: "Lautaro",
    number: 32,
  },
  {
    word: "Julian Alvarez",
    number: 23,
  },
  {
    word: "Palermo",
    number: 24,
  },
];
class Student {
  constructor(nama, email, umur, score) {
    this.nama = nama;
    this.email = email;
    this.umur = umur;
    this.score = score;
  }
}

student1 = new Student("Joko", "joko@gmail.com", new Date("01/02/1993"), 80);
student2 = new Student("Bam", "bam@gmail.com", new Date("02/03/1994"), 90);
student3 = new Student("Asep", "asep@gmail.com", new Date("03/04/1995"), 75);
student4 = new Student("Udin", "udin@gmail.com", new Date("04/05/1996"), 85);
student5 = new Student("Sri", "sri@gmail.com", new Date("05/06/1997"), 65);

let studentUmur = [
  student1.umur,
  student2.umur,
  student3.umur,
  student4.umur,
  student5.umur,
];
let studentScore = [
  student1.score,
  student2.score,
  student3.score,
  student4.score,
  student5.score,
];

hasil = {
  hasilUmur: {
    studentUmurMax: Math.max(...studentUmur),
    studentUmurMin: Math.min(...studentUmur),
    studentUmurAvg: studentUmur.reduce((a, b) => a + b) / studentUmur.length,
  },
  hasilScore: {
    studentScoreMax: Math.max(...studentScore),
    studentScoreMin: Math.min(...studentScore),
    studentScoreAvg: studentScore.reduce((a, b) => a + b) / studentScore.length,
  },
};
console.log(hasil)
// aici voi face un obiect care va avea 2 atribute
// primul va fi watched si al doilea queue, ambele vor retine o lista de obiecte (filme)

//in module.exports exportez obiectul bazandu-ma pe faptul ca in JavaScript obiectele cand sunt transmise ca parametru
//in deosebire fata de valorile primitive, se transmite nu o copie a obiectului, ci adresa obiectului in sine
//asta inseamna ca orice modificare adusa obiectului pe parcursul proeictului, ea va fi salvata
// (sper)

const watQueObj = {
  watched: [],
  queue: [],
};

//console.log(watQueObj);

module.exports = watQueObj;

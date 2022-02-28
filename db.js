module.exports = function () {
  const times = {
    1: "8:00",
    2: "8:30",
    3: "9:00",
    4: "10:00",
    5: "10:30",
    6: "11:00",
    7: "11:30",
    8: "12:00",
    9: "13:00",
    10: "13:30",
    11: "14:00",
    12: "14:30",
    13: "15:00",
    14: "15:30",
    15: "16:00",
    16: "16:30",
    17: "17:00",
    18: "17:30",
    19: "18:00",
    20: "18:30",
    21: "19:00",
  };

  const data = {
    specialists: [
      {
        name: "Jorge Almeida",
        location: "São Paulo",
        description:
          "Olá! Atuo na escuta e acolhimento dos seus conflitos internos, traumas e dores emocionais. Acredito na cura através da palavra. Falar é o remédio e eu posso te ouvir.",
        sessionTime: "50 minutos",
        language: "Português",
        avatarUrl:
          "https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-02.png",
        jobTitle: "CRP: 01/4313",
        price: 90,
        rateQuantity: 16,
        rate: 3,
      },
      {
        name: "Maria Alcantara Braz",
        location: "Santa Catarina",
        description:
          "Olá! Atuo na escuta e acolhimento dos seus conflitos internos, traumas e dores emocionais. Acredito na cura através da palavra. Falar é o remédio e eu posso te ouvir.",
        sessionTime: "1 hora",
        language: "Português",
        avatarUrl:
          "https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617__480.jpg",
        jobTitle: "CRP: 02/13112",
        price: 140,
        rateQuantity: 13,
        rate: 3,
      },
    ],
    getSpecialistSchedule: [[], [], [], []],
  };
  data.getSpecialistSchedule.map((day) => {
    for (const key in times) {
      const nullOrTime = Math.floor(Math.random() * 10);
      day.push(nullOrTime > 5 ? times[key] : null);
    }
  });
  return data;
};

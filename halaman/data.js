export const dataSiswa = [
  {
    nisn: "08678726",
    nama: "Agung",
    kelas: "XI - ORACLE",
    foto: require("./../assets/favicon.png"),
  },
  {
    nisn: "08678762",
    nama: "Roni",
    kelas: "XI - ORACLE",
    foto: require("./../assets/favicon.png"),
  },
  {
    nisn: "08678788",
    nama: "Agus",
    kelas: "XI - ORACLE",
    foto: require("./../assets/favicon.png"),
  },
  {
    nisn: "08678769",
    nama: "Tulus",
    kelas: "XI - ORACLE",
    foto: require("./../assets/favicon.png"),
  },
];

export const getOrders = (setData) => {
  fetch("http://192.168.43.58/APIABSEN/get_orders.php?getorders")
    .then((response) => response.json())
    .then((json) => {
        setData(json);
      return console.log(json);
    })
    .catch((error) => {
      console.error("Error");
    });
};

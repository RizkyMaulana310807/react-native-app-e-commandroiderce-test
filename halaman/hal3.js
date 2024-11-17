import React from "react";
import { View, Text, Image, StyleSheet } from "react-native-web";

const Hal3 = ({ navigation, route }) => {
  console.log(route.params.data);
  const data = route.params.data;

  return (
    <View style={styles.container}>
      {/* Uncomment and replace with actual image source */}
      {/* <Image source={data.nama_pelanggan} style={styles.image} /> */}
      <Text style={styles.title}>Pelanggan : {data.nama_pelanggan}</Text>
      <Text style={styles.detail}>Produk : {data.nama_produk}</Text>
      <Text style={styles.detail}>Pesanan : {data.tanggal_pesanan}</Text>
      <Text style={styles.detail}>Jumlah pesanan : {data.jumlah_produk}</Text>
      <Text style={styles.detail}>Harga satuan : {data.harga_satuan}</Text>
      <Text style={styles.detail}>Total harga : {data.total_harga}</Text>
      <Text style={[styles.detail, styles.status]}>Status : {data.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    color: "#555",
    marginVertical: 5,
  },
  status: {
    fontWeight: "bold",
    color: "#007bff", // or another color to highlight the status
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Hal3;

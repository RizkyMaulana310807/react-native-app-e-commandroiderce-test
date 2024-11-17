import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native-web";
import Icon from "react-native-vector-icons/Ionicons"; // Menggunakan Ionicons
import { getOrders } from "./data";

var isLoad = false;

const Hal2 = ({ navigation }) => {
  const [data, setData] = useState([]);

  if (!isLoad) {
    getOrders(setData);
    isLoad = true;
  } else {
    isLoad = false;
  }

  return (
    <View style={styles.container}>
      {/* Bagian Konten */}
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Hal3", { data: item });
                }}
              >
                <View style={styles.card}>
                  <View>
                    <Text style={styles.boldText}>Nama Pemesan: {item.nama_pelanggan}</Text>
                    <Text>Harga satuan: {item.harga_satuan} / Produk</Text>
                    <Text>Jumlah pesanan: {item.jumlah_produk}</Text>
                    <Text style={styles.boldText}>Total Harga: {item.total_harga}</Text>
                    <Text>Tanggal Pesanan: {item.tanggal_pesanan}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Bagian Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Hal2")}>
          <Icon name="home-outline" size={30} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Hal4")}>
          <Icon name="list-outline" size={30} color="#000" />
          <Text style={styles.navText}>Tambah pesanan</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Hal5")}>
          <Icon name="settings-outline" size={30} color="#000" />
          <Text style={styles.navText}>Hal 6</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Hal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    margin: 5,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    boxShadow: "1px 1px 1px black",
  },
  boldText: {
    color: "black",
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navText: {
    fontSize: 12,
    color: "#000",
    marginTop: 3,
  },
});

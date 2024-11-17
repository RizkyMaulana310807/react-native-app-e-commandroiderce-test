import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  Button,
  Alert,
} from "react-native";

const hal4 = () => {
  const [produk, setProduk] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState("");
  const [harga, setHarga] = useState(0);
  const [jumlah, setJumlah] = useState("");
  const [totalHarga, setTotalHarga] = useState(0);

  // Fetch data produk dari database
  useEffect(() => {
    fetch("http://192.168.43.58/APIABSEN/get_product.php?getproducts")
      .then((response) => response.json())
      .then((data) => {
        setProduk(data);
        console.log(data); // Log data untuk debugging
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Hitung total harga
  useEffect(() => {
    setTotalHarga(harga * jumlah || 0);
  }, [harga, jumlah]);

  // Fungsi submit data
  const handleSubmit = () => {
    const requestData = {
      produk_id: selectedProduk,
      jumlah: jumlah,
      total_harga: totalHarga,
    };
    console.log("Request Data:", JSON.stringify(requestData));
  
    fetch("http://192.168.43.58/APIABSEN/create_orders.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        // Log the raw response text
        return response.text().then((text) => {
          console.log("Server Response:", text); // Log the raw response
          if (!response.ok) {
            throw new Error('Server error');
          }
          return JSON.parse(text); // Try to parse JSON
        });
      })
      .then((responseData) => {
        Alert.alert("Sukses", JSON.stringify(responseData));
      })
      .catch((error) => {
        Alert.alert("Error", "Gagal menambahkan data!");
        console.error(error);
      });
  };
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pilih Produk:</Text>
      <Picker
        selectedValue={selectedProduk}
        style={styles.input}
        onValueChange={(itemValue) => {
          const selected = produk.find((item) => item.id_produk === itemValue);
          setSelectedProduk(itemValue);
          setHarga(selected ? selected.harga : 0);
        }}
      >
        <Picker.Item label="-- Pilih Produk --" value="" />
        {produk.map((item) => (
          <Picker.Item
            key={item.id_produk}
            label={`${item.nama_produk} - ${parseInt(item.harga).toLocaleString(
              "id-ID",
              {
                style: "currency",
                currency: "IDR",
              }
            )}`}
            value={item.id_produk}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Jumlah:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={jumlah.toString()}
        onChangeText={(value) => setJumlah(Number(value))}
      />

      <Text style={styles.label}>Total Harga: Rp {totalHarga}</Text>

      <Button title="Simpan" onPress={handleSubmit} />
    </View>
  );
};

export default hal4;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
});

import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function CrudCardsScreen() {

  const escaneos = [
    {
      id: "1",
      uid_nfc: "A1B2C3D4",
      usuario: "Marcos",
      fecha: "01/06/2026 19:30",
      resultado: "Válido",
    },
    {
      id: "2",
      uid_nfc: "F9X8Y7Z6",
      usuario: "Andrea",
      fecha: "01/06/2026 19:42",
      resultado: "Válido",
    },
    {
      id: "3",
      uid_nfc: "Q1W2E3R4",
      usuario: "Invitado",
      fecha: "01/06/2026 20:01",
      resultado: "Inválido",
    },
    {
      id: "4",
      uid_nfc: "NFC998877",
      usuario: "Carlos",
      fecha: "01/06/2026 20:15",
      resultado: "Válido",
    },
    {
      id: "5",
      uid_nfc: "CARD554433",
      usuario: "Fernanda",
      fecha: "01/06/2026 20:20",
      resultado: "Inválido",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.uid}>
        📡 {item.uid_nfc}
      </Text>

      <Text style={styles.info}>
        Usuario: {item.usuario}
      </Text>

      <Text style={styles.info}>
        Fecha: {item.fecha}
      </Text>

      <View
        style={[
          styles.status,
          item.resultado === "Válido"
            ? styles.success
            : styles.error,
        ]}
      >
        <Text style={styles.statusText}>
          {item.resultado}
        </Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Historial de Escaneos NFC
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>
          124
        </Text>

        <Text style={styles.summaryText}>
          Escaneos registrados
        </Text>
      </View>

      <FlatList
        data={escaneos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e8eef5",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2d70c9",
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "#2d70c9",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  summaryNumber: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFF",
  },

  summaryText: {
    color: "#FFF",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    elevation: 4,
  },

  uid: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d70c9",
    marginBottom: 8,
  },

  info: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },

  status: {
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  success: {
    backgroundColor: "#2ecc71",
  },

  error: {
    backgroundColor: "#e74c3c",
  },

  statusText: {
    color: "#FFF",
    fontWeight: "bold",
  },

});
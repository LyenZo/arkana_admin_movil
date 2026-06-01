import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function NfcScansScreen() {

  const escaneos = [
    {
      id: "NFC001",
      uid_nfc: "04A7B3F2C91D80",
      usuario: "Marcos",
      fecha: "01/06/2026 10:15",
      resultado: "Válido",
    },
    {
      id: "NFC002",
      uid_nfc: "18F4A2C1B76D12",
      usuario: "Ana",
      fecha: "01/06/2026 11:20",
      resultado: "Válido",
    },
    {
      id: "NFC003",
      uid_nfc: "91D7F3AA551288",
      usuario: "Dispositivo Desconocido",
      fecha: "01/06/2026 12:05",
      resultado: "Rechazado",
    },
    {
      id: "NFC004",
      uid_nfc: "7A34DFF98BC221",
      usuario: "Carlos",
      fecha: "01/06/2026 13:40",
      resultado: "Válido",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bigCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.pageTitle}>
          Historial NFC
        </Text>

        <Text style={styles.subtitle}>
          Registros recientes de escaneo
        </Text>

        {escaneos.map((item) => (
          <View key={item.id} style={styles.card}>

            <View style={styles.row}>
              <Text style={styles.cardTitle}>
                {item.uid_nfc}
              </Text>

              <View
                style={[
                  styles.statusBadge,
                  item.resultado === "Válido"
                    ? styles.validBadge
                    : styles.invalidBadge,
                ]}
              >
                <Text style={styles.badgeText}>
                  {item.resultado}
                </Text>
              </View>
            </View>

            <Text style={styles.info}>
              ID: {item.id}
            </Text>

            <Text style={styles.info}>
              Usuario: {item.usuario}
            </Text>

            <Text style={styles.info}>
              Fecha: {item.fecha}
            </Text>

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  bigCircle: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "#151515",
    top: -180,
    alignSelf: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#d2d2d2",
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 18,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#063B35",
    flex: 1,
  },

  info: {
    color: "#555",
    marginBottom: 6,
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  validBadge: {
    backgroundColor: "#4dad5b",
  },

  invalidBadge: {
    backgroundColor: "#e74c3c",
  },

  badgeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

});
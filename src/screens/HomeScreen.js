import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function HomeScreen({ navigation }) {

  const [usuariosActivos] = useState(15);
  const [cartasNFC] = useState(48);

  const iniciarSpark = () => {
    Alert.alert(
      "Spark",
      "Spark iniciado correctamente"
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bigCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        

        <Text style={styles.projectName}>
          PROYECTO ARKANA
        </Text>

        <Text style={styles.subtitle}>
          Panel Administrativo
        </Text>

        <View style={styles.card}>

          <Text style={styles.sectionTitle}>
            Accesos rápidos
          </Text>

          <View style={styles.grid}>

            <TouchableOpacity
              style={[styles.menuButton, styles.usuarios]}
              onPress={() => navigation.navigate("Users")}
            >
              <Text style={styles.buttonText}>
                 Usuarios
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuButton, styles.cartas]}
              onPress={() => navigation.navigate("Cards")}
            >
              <Text style={styles.buttonText}>
                 Cartas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
  style={[styles.menuButton, styles.nfc]}
  onPress={() => navigation.navigate("NfcScans")}
>
  <Text style={styles.buttonText}>
    Escaneos NFC
  </Text>
</TouchableOpacity>

            <TouchableOpacity
  style={[styles.menuButton, styles.partidas]}
  onPress={() => navigation.navigate("Matches")}
>
  <Text style={styles.buttonText}>
    Partidas
  </Text>
</TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuButton, styles.perfiles]}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.buttonText}>
                 Perfil
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuButton, styles.spark]}
              onPress={iniciarSpark}
            >
              <Text style={styles.buttonText}>
                 Spark
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.statsCard}>

          <Text style={styles.sectionTitle}>
            Estadísticas
          </Text>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>
              Usuarios Activos
            </Text>

            <Text style={styles.statValue}>
              {usuariosActivos}
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>
              Cartas NFC
            </Text>

            <Text style={styles.statValue}>
              {cartasNFC}
            </Text>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#d2d2d2",
  },

  bigCircle: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "#151515",
    top: -300,
    alignSelf: "center",
  },

  scrollContainer: {
    padding: 25,
    paddingTop: 40,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  projectName: {
    marginTop: 50,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  subtitle: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    marginTop: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 8,
  },

  statsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 8,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#151515",
    marginBottom: 18,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  menuButton: {
    width: "48%",
    paddingVertical: 18,
    borderRadius: 18,
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 15,
  },

  usuarios: {
    backgroundColor: "#2d70c9",
  },

  cartas: {
    backgroundColor: "#1abc9c",
  },

  nfc: {
    backgroundColor: "#e67e22",
  },

  partidas: {
    backgroundColor: "#9b59b6",
  },

  perfiles: {
    backgroundColor: "#e74c3c",
  },

  spark: {
    backgroundColor: "#4dad5b",
  },

  statBox: {
    backgroundColor: "#F5F5F5",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  statLabel: {
    fontSize: 15,
    color: "#555",
  },

  statValue: {
    fontSize: 32,
    fontWeight: "900",
    color: "#151515",
    marginTop: 5,
  },

});
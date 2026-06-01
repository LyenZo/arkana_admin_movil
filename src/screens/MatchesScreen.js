import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function MatchesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bigCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>
          Partidas
        </Text>

        <Text style={styles.subtitle}>
          Administración de partidas en curso
        </Text>

        <View style={styles.card}>

          <Text style={styles.icon}>
            🎮
          </Text>

          <Text style={styles.title}>
            Próximamente
          </Text>

          <Text style={styles.description}>
            Este módulo permitirá gestionar partidas activas,
            historial de enfrentamientos, estadísticas de juego,
            emparejamientos y resultados.
          </Text>

          <Image
            source={require("../../assets/bear.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              🚧 En desarrollo
            </Text>
          </View>

        </View>
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
    flexGrow: 1,
    justifyContent: "center",
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
    borderRadius: 30,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    elevation: 8,
  },

  icon: {
    fontSize: 50,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#063B35",
    marginBottom: 15,
  },

  description: {
    textAlign: "center",
    color: "#666",
    lineHeight: 22,
    marginBottom: 25,
  },

  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },

  statusContainer: {
    backgroundColor: "#F7C600",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  statusText: {
    color: "#111827",
    fontWeight: "bold",
    fontSize: 15,
  },

});
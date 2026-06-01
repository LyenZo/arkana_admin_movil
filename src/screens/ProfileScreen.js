import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  ScrollView,
  Image,
} from "react-native";

export default function ProfileScreen() {

  const [textoGrande, setTextoGrande] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);
  const [lectorPantalla, setLectorPantalla] = useState(true);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bigCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.pageTitle}>
          Mi Perfil
        </Text>

        <Text style={styles.subtitle}>
          Información personal y accesibilidad
        </Text>

        <View style={styles.card}>

          {/* FOTO DE PERFIL */}

          <View style={styles.avatarContainer}>
            <Image
              source={require("../../assets/user.png")}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.userName}>
            Marcos Ugalde
          </Text>

          <Text style={styles.userRole}>
            Administrador
          </Text>

          <Text style={styles.label}>
            Nombre completo
          </Text>

          <TextInput
            value="Marcos Jesús Ugalde Zarza"
            editable={false}
            style={styles.input}
          />

          <Text style={styles.label}>
            Correo electrónico
          </Text>

          <TextInput
            value="correo@ejemplo.com"
            editable={false}
            style={styles.input}
          />

          <Text style={styles.sectionTitle}>
            Accesibilidad
          </Text>

          <View style={styles.settingCard}>
            <Text style={styles.settingText}>
              Texto grande
            </Text>

            <Switch
              value={textoGrande}
              onValueChange={setTextoGrande}
              trackColor={{
                false: "#D1D5DB",
                true: "#4dad5b",
              }}
            />
          </View>

          <View style={styles.settingCard}>
            <Text style={styles.settingText}>
              Alto contraste
            </Text>

            <Switch
              value={altoContraste}
              onValueChange={setAltoContraste}
              trackColor={{
                false: "#D1D5DB",
                true: "#F7C600",
              }}
            />
          </View>

          <View style={styles.settingCard}>
            <Text style={styles.settingText}>
              Lector de pantalla
            </Text>

            <Switch
              value={lectorPantalla}
              onValueChange={setLectorPantalla}
              trackColor={{
                false: "#D1D5DB",
                true: "#1b53ba",
              }}
            />
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    elevation: 8,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 15,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#4dad5b",
  },

  userName: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#063B35",
  },

  userRole: {
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
  },

  label: {
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 15,
    padding: 14,
    color: "#111827",
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#063B35",
  },

  settingCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#F8F9FA",
    borderRadius: 15,

    padding: 15,
    marginBottom: 12,
  },

  settingText: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "600",
  },

});
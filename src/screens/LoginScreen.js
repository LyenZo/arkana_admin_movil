import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const manejarLogin = () => {
    if (!correo || !contraseña) {
      Alert.alert(
        "Campos incompletos",
        "Ingresa tu correo y contraseña"
      );
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bigCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <Image
          source={require("../../assets/arkana.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.projectName}>
          PROYECTO ARKANA
        </Text>

        <Text style={styles.subtitle}>
          Sistema de administrativo
        </Text>

        <View style={styles.card}>

          <Text style={styles.title}>
            Bienvenido
          </Text>

          <Text style={styles.cardSubtitle}>
            Inicia sesión para continuar
          </Text>

          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
          />

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={contraseña}
            onChangeText={setContraseña}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={manejarLogin}
          >
            <Text style={styles.loginText}>
              INICIAR SESIÓN
            </Text>
          </TouchableOpacity>

          <View style={styles.rowButtons}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.secondaryText}>
                REGISTRO
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        <Text style={styles.footerText}>
          Administración del Juego de Cartas NFC
        </Text>

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
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 0,
    zIndex: 0,
  },

  projectName: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
    zIndex: 5,
  },

  subtitle: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 30,
    marginTop: 5,
    zIndex: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 35,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#063B35",
    textAlign: "center",
  },

  cardSubtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D6D6D6",
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 15,
    color: "#111827",
  },

  loginButton: {
    backgroundColor: "#4dad5b",
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
  },

  loginText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 1,
  },

  rowButtons: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },

  nfcButton: {
    flex: 1,
    backgroundColor: "#F7C600",
    paddingVertical: 12,
    borderRadius: 15,
  },

  registerButton: {
    flex: 1,
    backgroundColor: "#1b53ba",
    paddingVertical: 12,
    borderRadius: 15,
  },

  secondaryText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
  },

  footerText: {
    textAlign: "center",
    marginTop: 25,
    color: "#FFFFFF",
    opacity: 0.8,
    fontSize: 12,
  },

});
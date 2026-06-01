import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";

export default function RegisterScreen({ navigation }) {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const registrar = () => {

    if (!nombre || !correo || !password || !confirmar) {
      Alert.alert(
        "Campos incompletos",
        "Completa toda la información"
      );
      return;
    }

    if (password !== confirmar) {
      Alert.alert(
        "Error",
        "Las contraseñas no coinciden"
      );
      return;
    }

    Alert.alert(
      "Registro exitoso",
      "Usuario registrado correctamente"
    );

    navigation.navigate("Login");
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
          Crear una nueva cuenta
        </Text>

        <View style={styles.card}>

          <Text style={styles.title}>
            Registro
          </Text>

          <Text style={styles.cardSubtitle}>
            Completa los siguientes datos
          </Text>

          <TextInput
            placeholder="Nombre completo"
            placeholderTextColor="#999"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

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
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            placeholder="Confirmar contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={confirmar}
            onChangeText={setConfirmar}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={registrar}
          >
            <Text style={styles.registerText}>
              REGISTRARME
            </Text>
          </TouchableOpacity>

          
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
    top: -180,
    alignSelf: "center",
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
  },

  projectName: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  subtitle: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 50,
    marginTop: 5,
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

  nfcButton: {
    backgroundColor: "#F7C600",
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 12,
  },

  nfcText: {
    textAlign: "center",
    color: "#111827",
    fontWeight: "700",
  },

  registerButton: {
    backgroundColor: "#4dad5b",
    paddingVertical: 15,
    borderRadius: 15,
  },

  registerText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "800",
    letterSpacing: 1,
  },

  loginLink: {
    textAlign: "center",
    marginTop: 18,
    color: "#1b53ba",
    fontWeight: "700",
  },

});
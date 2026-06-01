import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mi Perfil
      </Text>

      <Text style={styles.label}>
        Nombre
      </Text>

      <TextInput
        style={styles.input}
        value="Marcos"
      />

      <Text style={styles.label}>
        Correo
      </Text>

      <TextInput
        style={styles.input}
        value="correo@ejemplo.com"
      />

      <View style={styles.setting}>
        <Text>Texto grande</Text>
        <Switch />
      </View>

      <View style={styles.setting}>
        <Text>Alto contraste</Text>
        <Switch />
      </View>

      <View style={styles.setting}>
        <Text>Compatibilidad lector pantalla</Text>
        <Switch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },

  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
  },
});
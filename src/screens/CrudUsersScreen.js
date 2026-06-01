import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function CrudUsersScreen() {
  const [mostrarPassword, setMostrarPassword] = useState(null);

  const usuarios = [
    {
      id: "USR001",
      username: "Marcos",
      email: "marcos@arkana.com",
      password: "12345678",
      rol: "Administrador",
      fecha: "01/06/2026",
    },
    {
      id: "USR002",
      username: "Ana",
      email: "ana@arkana.com",
      password: "password123",
      rol: "Jugador",
      fecha: "25/05/2026",
    },
    {
      id: "USR003",
      username: "Carlos",
      email: "carlos@arkana.com",
      password: "abcdefg",
      rol: "Moderador",
      fecha: "20/05/2026",
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
          Directorio de Usuarios
        </Text>

        <Text style={styles.subtitle}>
          Gestión de usuarios registrados
        </Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            + Nuevo Usuario
          </Text>
        </TouchableOpacity>

        {usuarios.map((usuario) => (
          <View key={usuario.id} style={styles.card}>
            <View style={styles.headerRow}>
              <Text style={styles.username}>
                {usuario.username}
              </Text>

              <View style={styles.roleBadge}>
                <Text style={styles.roleText}>
                  {usuario.rol}
                </Text>
              </View>
            </View>

            <Text style={styles.info}>
              ID: {usuario.id}
            </Text>

            <Text style={styles.info}>
              Correo: {usuario.email}
            </Text>

            <TouchableOpacity
              onPress={() =>
                setMostrarPassword(
                  mostrarPassword === usuario.id
                    ? null
                    : usuario.id
                )
              }
            >
              <Text style={styles.password}>
                Contraseña:{" "}
                {mostrarPassword === usuario.id
                  ? usuario.password
                  : "••••••••"}
              </Text>
            </TouchableOpacity>

            <Text style={styles.info}>
              Registro: {usuario.fecha}
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.editBtn]}
              >
                <Text style={styles.actionText}>
                  Editar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionBtn, styles.deleteBtn]}
              >
                <Text style={styles.actionText}>
                  Eliminar
                </Text>
              </TouchableOpacity>
            </View>
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

  addButton: {
    backgroundColor: "#4dad5b",
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 20,
  },

  addButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
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

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#063B35",
  },

  roleBadge: {
    backgroundColor: "#1b53ba",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  roleText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  info: {
    color: "#555",
    marginBottom: 6,
  },

  password: {
    color: "#e67e22",
    marginBottom: 6,
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
  },

  editBtn: {
    backgroundColor: "#3498db",
  },

  deleteBtn: {
    backgroundColor: "#e74c3c",
  },

  actionText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
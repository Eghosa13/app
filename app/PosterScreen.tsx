import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PosterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.time}>09.41</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Text style={[styles.tabText, styles.activeTab]}>Smart script</Text>
        <Text style={styles.tabText}>Advanced script</Text>
      </View>
      <View style={styles.tabIndicator} />

      {/* Question */}
      <Text style={styles.question}>
        What type of posters do you want to create?
      </Text>

      {/* Poster Options */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <View style={[styles.card, { marginLeft: 0 }]}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x140" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardLabel}>display</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x140" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardLabel}>Promotion</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x140" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardLabel}>Branding</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x140" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardLabel}>Announcement</Text>
        </View>
      </ScrollView>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>
          stunning promotional image of a deliciously decorated cake,
          emphasizing its layers, frosting, and toppings in an enticing setting.
        </Text>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Size</Text>
          <Text style={styles.settingValue}>1080 x 1920 px</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Category</Text>
          <Text style={styles.settingValue}>Foods and beverage</Text>
        </View>
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateText}>Generate</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>CapCut</Text>
        <Text style={styles.footerText}>curated by Mobbin</Text>
      </View>
    </SafeAreaView>
  );
};

export default PosterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  time: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  tabText: {
    color: "#888",
    fontSize: 16,
    marginRight: 24,
  },
  activeTab: {
    color: "white",
    fontWeight: "600",
  },
  tabIndicator: {
    height: 2,
    width: 120,
    backgroundColor: "#6C63FF",
    marginTop: 4,
    marginLeft: 16,
    borderRadius: 4,
  },
  question: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 16,
    marginLeft: 16,
  },
  card: {
    marginRight: 12,
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
  cardLabel: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  descriptionBox: {
    backgroundColor: "#1C1C1E",
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  description: {
    color: "white",
    fontSize: 15,
    lineHeight: 22,
  },
  settingsContainer: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  settingsTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  settingLabel: {
    color: "#888",
    fontSize: 15,
  },
  settingValue: {
    color: "white",
    fontSize: 15,
  },
  generateButton: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  generateText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    color: "#888",
    fontSize: 13,
  },
});

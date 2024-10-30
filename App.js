import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{ padding: 20, height: "100%" }}
        contentContainerStyle={{ rowGap: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>9185 Mayflower Drive Atlanta</Text>
        <ImageScroll></ImageScroll>

        <TitleSeeMore title="All restaurants"></TitleSeeMore>
        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: 10 }}>
          <TacoVista></TacoVista>
          <TacoVista></TacoVista>
          <TacoVista></TacoVista>
        </ScrollView>

        <TitleSeeMore title="All groceries"></TitleSeeMore>
        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: 10 }}>
          <PlantaVista></PlantaVista>
          <PlantaVista></PlantaVista>
          <PlantaVista></PlantaVista>
          <PlantaVista></PlantaVista>
          <PlantaVista></PlantaVista>
          <PlantaVista></PlantaVista>
        </ScrollView>

        <TitleSeeMore title="Specials" hidden_all={true}></TitleSeeMore>

        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: 10 }}>
          <WineCard></WineCard>
          <WineCard></WineCard>
          <WineCard></WineCard>
          <WineCard></WineCard>
        </ScrollView>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 20,
  },
  circleBlue: {
    width: 5,
    height: 5,
    backgroundColor: "#95D5CC",
    borderRadius: 25,
  },
  circleGray: {
    width: 5,
    height: 5,
    backgroundColor: "#D3D3D3",
    borderRadius: 25,
  },
  /*
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1,
  },
  score: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'green',
    paddingRight: 5,
  },
  description: {
    paddingTop: 10,
    fontSize: 14,
  }
  */
});

function WineCard() {
  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/zvvW9Yk.jpeg" }}
      style={{ width: 230, height: 150 }}
      imageStyle={{ borderRadius: 20 }}
    >
      <View style={{ gap: 5, padding: 10 }}>
        <Text
          style={{
            alignSelf: "baseline",
            color: "white",
            textAlign: "left",
          }}
        >
          GROCERY
        </Text>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "baseline",
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
          }}
        >
          winestory
        </Text>
        <Text
          style={{
            fontSize: 10,
            alignSelf: "baseline",
            color: "white",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          SPECIAL OFFER
        </Text>
      </View>
    </ImageBackground>
  );
}

function TacoVista() {
  return (
    <View style={{ gap: 10, flexDirection: "col", width: 200 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            backgroundColor: "#FAECDA",
            width: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 170 / 2, height: 114 / 2, margin: 20 }}
            source={{ uri: "https://i.imgur.com/DXYRt5x.png" }}
          ></Image>
        </View>
      </View>
      <View
        style={{
          gap: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <View style={{ gap: 5, flexDirection: "col" }}>
          <Text style={{ fontWeight: "bold" }}>Groceries</Text>
          <Text style={{ fontWeight: "thin", color: "gray" }}>
            burger, dessert
          </Text>
        </View>
        <View style={{ gap: 5, flexDirection: "col" }}>
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>4.7</Text>
          <Text
            style={{
              fontWeight: "thin",
              color: "gray",
              textAlign: "right",
            }}
          >
            10-15 min
          </Text>
        </View>
      </View>
    </View>
  );
}

function PlantaVista() {
  return (
    <View style={{ gap: 10, flexDirection: "col", width: 100 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          style={{
            width: 100,
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={{ uri: "https://i.imgur.com/B46bNlC.jpeg" }}
        ></Image>
      </View>
      <View
        style={{
          gap: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <View style={{ gap: 5, flexDirection: "col" }}>
          <Text style={{ fontWeight: "bold" }}>Groceries</Text>
          <Text
            style={{
              fontWeight: "thin",
              color: "gray",
              textAlign: "right",
            }}
          >
            10-15 min
          </Text>
        </View>
        <View style={{ gap: 5, flexDirection: "col" }}>
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>4.7</Text>
        </View>
      </View>
    </View>
  );
}

function TitleSeeMore(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.title}</Text>
      {!props.hidden_all && (
        <Text style={{ fontWeight: "bold", fontSize: 10, color: "gray" }}>
          See all
        </Text>
      )}
    </View>
  );
}

function ImageScroll() {
  return (
    <View style={styles.container} flexDirection="col">
      <Image
        style={styles.image}
        source={{ uri: "https://i.imgur.com/vjnOM8a.png" }}
      ></Image>

      <View flexDirection="row" style={{ gap: 5 }}>
        <View style={styles.circleBlue} />
        <View style={styles.circleGray} />
        <View style={styles.circleGray} />
      </View>
    </View>
  );
}

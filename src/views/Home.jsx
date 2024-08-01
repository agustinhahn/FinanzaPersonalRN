import { View } from "react-native";
import Header from "../components/Header";
import BtnAddGasto from "../components/BtnAddGasto";
import ContenedorContGastos from "../components/ContenedorContGastos";
import ContenedorInfo from "../components/ContenedorInfo";
import { StatusBar } from 'expo-status-bar';


const Home = () => {
  return (
    <View>
      <Header />
      <BtnAddGasto />
      <ContenedorInfo titulo="Presupuesto" importe="5000"/>
      <ContenedorContGastos titulo="Gastos parciales" importe="3000"  />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

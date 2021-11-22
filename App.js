import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function App(){
   const[peso, setPeso] = useState(''); //armazena o peso
   const[altura, setAltura] = useState(''); //armazena a altura

  function executarCalculos(){
    const alt = altura/100;
    const imc = peso/(alt * alt)
    
    if (imc < 18.6){
      alert ("Você está abaixo do peso -  IMC =  "+ imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9  ){
      alert ("Você está com o peso ideal -  IMC =  "+ imc.toFixed(2))
    } else if(imc >= 24.9 && imc < 34.9  ){
      alert ("Você está levemente acima do peso-  IMC =  "+ imc.toFixed(2))
    } else if(imc >=  34.9  ){
      alert ("Você está acima do peso -  IMC =  "+ imc.toFixed(2))
    }

    setPeso('');
    setAltura('');
  }


   return(

    <View style = {estilo.container}>
      <Text style = {estilo.title}> Calcule seu IMC</Text>
    
<TextInput
      style = {estilo.input}
      value={peso} //valor dentro do componente
      onChangeText={(peso) => setPeso(peso)} //toda vez que o campo mudar ele é salvo
      placeholder="Peso (kg)"
      keyboardType= "numeric"
  />

<TextInput
      style = {estilo.input}
      value={altura} //valor dentro do componente
      onChangeText={(altura) => setAltura(altura)} //toda vez que o campo mudar ele é salvo
      placeholder="Altura (cm)"
      keyboardType= "numeric"
    />

<TouchableOpacity style = {estilo.botao}
onPress= {executarCalculos}>
  <Text style= {estilo.textoBotao}>Calcular</Text>
  </TouchableOpacity>
 
 
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: '#D5CABD',
    flex:1
  },
  
  title: {
    color:'#4E8397',
    textAlign: 'center',
    marginTop:25,
    fontSize:30,
  }, 

  input:{
    backgroundColor: '#B0A8B9',
    borderRadius:10,
    margin:15,
    padding:10,
    color: '#fff',
    fontSize: 23,
  },

  botao:{
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:15,
    backgroundColor: '#B0A8B9',
  }, 

  textoBotao:{
    color: '#fff',
    fontSize:25,
  }
});
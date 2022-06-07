import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
//import AppLoading from 'expo-app-loading';
//import {useFonts, Abel_400Regular,Mirza_400Regular,Nunito_400Regular} from '@expo-google-fonts/dev';


export default function App() {
  
  //let[fontsLoaded] = useFonts({
    //Abel_400Regular,
    //Mirza_400Regular,
    //Nunito_400Regular
  //});
 
  //if (!fontsLoaded) {
    //return <AppLoading />;
  //} else {

  return (
    <View style={estilo.container}>
      <StatusBar style="auto"/>
      <Text style={estilo.titulo1}>Redes de Encontro do Senac</Text>
      <Text style={estilo.titulo2}>Você tem um projeto integrador?</Text>
      <Text style={estilo.titulo3}>Quer envolver novas áreas?</Text>
      <Text style={estilo.titulo4}>Então vamos encontrar novos alunos aqui. ;)</Text>

      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
        <Text>{item.Nome}</Text>
        <Text>{item.Curso}</Text>
        <Text>{item.Periodo}</Text>
        <Text>{item.Turma}</Text>
        <Text>{item.Gosto}</Text>
        <Text>{item.Bio}</Text>
        <Image style={estilo.img} source={item.Img}/>
      </View>
      }
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    width: 250,
    height: 200,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'center'
  },

  titulo1:{
    marginTop: 40,
    marginVertical:5,
    fontSize: 30,
    fontFamily: 'Abel_400Regular'
  },

  titulo2:{
    marginVertical:2,
    fontSize: 25,
    fontFamily:'Mirza_400Regular'
  },

  titulo3:{
    marginVertical:2,
    fontSize:20,
    fontFamily:'Nunito_400Regular',
  },
  titulo4:{
    marginVertical:0,
    fontSize:20,
  }

});

const pessoas =[
  {
    uid:1,
    Nome:'Danilo Soares',
    Curso:'Técnico Informatica',
    Periodo:'Manhã',
    Turma:'TI10M',
    Gosto:'Hardware,Front-end,Back-and',
    Bio:'Manuntenção não é de graça',
    Img:require('./assets/jorginho.jpg')
  },

  {
    uid:2,
    Nome:'Bruno Galeazzo',
    Curso:'Tecnico de informatica',
    Periodo:'Manhã',
    Turma:'TI10M',
    Gosto:'Hardware, Redes',
    Bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    Img:require('./assets/carminha.jpg')
  },

  {
    uid:3,
    Nome:'Leonardo Mock',
    Curso:'Técnico Informatica',
    Periodo:'Manhã',
    Turma:'Ti08M',
    Gosto:'Hardware,Front-end,Back-and',
    Bio:'Manuntenção não é de graça fica esperto',
    Img:require('./assets/tufao.jpg')
  },

  {
    uid:4,
    Nome:'sasuke',
    Curso:'ninja',
    Periodo:'manhã',
    Turma:'ti12',
    Gosto:'sofrer',
    Bio:'matar um certo alguem é meu sonho',
    Img:require('./assets/leleco.jpg')
  },

  {
    uid:5,
    Nome:'Washington barreto',
    Curso: 'Técnico de informática',
    Periodo: 'Manhã',
    Turma: 'TI10M',
    Gosto: 'Hardware, Back-End, Redes, C#',
    Bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    Img:require('./assets/nina.jpg')
  },

  {
    uid:6,
    Nome:'Daniel Lacerda',
    Curso:'Técnico de Informática',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Php, Css, Design Gráfico, Games',
    Bio:'Gosto de Jogar, Gosto de mexer na internet, sou professor de informática, e Gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    Img:require('./assets/nilo.webp')
  },

  {
    uid:7,
    Nome:'homem aranha',
    Curso:'escalada',
    Periodo:'manhã',
    Turma:'ti19',
    Gosto:'subir parede',
    Bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
    Img:require('./assets/cardinho.jpg')
  },

  {
    uid:8,
    Nome:'Adriano Silva',
    Curso:'Técnico de Informática',
    Periodo: 'Manhã',
    Turma:'TI10M',
    Gosto:'Programação',
    Bio: 'Engajando na empresa da Microsolft',
    Img:require('./assets/Freezar.jpg')
  },

  {
    uid:9,
    Nome:'Silvio Santos',
    Curso:'Gestão de negócios',
    Periodo: 'Manhã',
    Turma: 'TI10M',
    Gosto:'Apresentador,Administração',
    Bio:'Curto a vida de um geito bem leve, Gosto de sair com a minha familia aos finais de semana, sou comunicador e Gosto de ser apresentador de TV esse é o meu forte',
    Img:require('./assets/Freezar.jpg')
  },

  {
    uid:10,
    Nome:'Cauãzinho chavão',
    Curso: 'Técnico de Informática',
    Periodo: 'Manhã',
    Turma: 'TI10M',
    Gosto:'Livia, hosana, laura, Mol e casadas', 
    Bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    Img:require('./assets/Freezar.jpg')
  },

  {
    uid:11,
    Nome:'Caio elias',
    Curso:'Tecnico de informatica',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Hardware,Banco de dados,C#',
    Bio:'garoto de programa junior',
    Img:require('./assets/Freezar.jpg')
  },

  {
    uid:12,
    Nome: 'Jair Messias',
    Curso: 'Enfeitador de Bolos',
    Periodo: 'Manhã',
    Turma: 'EB10',
    Gosto: 'Bolo, Chantilly e Fuzil',
    Bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    Img:require('./assets/Freezar.jpg')
  },

  {
    uid:13,
    Nome:'Daniel Lacerda',
    Curso:'Técnico de Informática',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Php, Css, Design Gráfico, Games',
    Bio:'Gosto de Jogar, Gosto de mexer na internet, sou professor de informática, e Gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    Img:require('./assets/Freezar.jpg')
  }

  
];





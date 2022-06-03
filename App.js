import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Redes de Encontro do Senac</Text>
      <Text>Você tem um projeto integrador?</Text>
      <Text>Quer envolver novas áreas?</Text>
      <Text>Então vamos encontrar novos alunos aqui. ;)</Text>

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
      </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAA520',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});

const pessoas =[
  {
    uid:1,
    Nome:'Danilo Soares',
    Curso:'Técnico Informatica',
    Perido:'Manhã',
    Turma:'TI10M',
    Gosto:'Hardware,Front-end,Back-and',
    Bio:'Manuntenção não é de graça',
    Img:'',
  },

  {
    uid:2,
    Nome:'Bruno Galeazzo',
    Curso:'Tecnico de informatica',
    Periodo:'Manhã',
    Turma:'TI10M',
    Gosto:'Hardware, Redes',
    Bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    Img:'',
  },

  {
    uid:3,
    Nome:'Leonardo Mock',
    Curso:'Técnico Informatica',
    perido:'Manhã',
    Turma:'Ti08M',
    Gosto:'Hardware,Front-end,Back-and',
    Bio:'Manuntenção não é de graça fica esperto',
    Img:'',
  },

  {
    uid:4,
    Nome:'sasuke',
    Curso:'ninja',
    Periodo:'manhã',
    Turma:'ti12',
    Gosto:'sofrer',
    Bio:'matar um certo alguem é meu sonho',
    Img:'',
  },

  {
    uid:5,
    Nome:'Washington barreto',
    Curso: 'Técnico de informática',
    Periodo: 'Manhã',
    Turma: 'TI10M',
    Gosto: 'Hardware, Back-End, Redes, C#',
    Bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    Img:'',
  },

  {
    uid:6,
    name:'Daniel Lacerda',
    Curso:'Técnico de Informática',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Php, Css, Design Gráfico, Games',
    Bio:'Gosto de Jogar, Gosto de mexer na internet, sou professor de informática, e Gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    Img:'',
  },

  {
    uid:7,
    Nome:'homem aranha',
    Curso:'escalada',
    Periodo:'manhã',
    Turma:'ti19',
    Gosto:'subir parede',
    Bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
    Img:'',
  },

  {
    uid:8,
    Nome:'Adriano Silva',
    Curso:'Técnico de Informática',
    Periodo: 'Manhã',
    Turma:'TI10M',
    Gosto:'Programação',
    Bio: 'Engajando na empresa da Microsolft',
    Img:'',
  },

  {
    uid:9,
    Nome:'Silvio Santos',
    Curso:'Gestão de negócios',
    Periodo: 'Manhã',
    Gosto:'Apresentador,Administração',
    Bio:'Curto a vida de um geito bem leve, Gosto de sair com a minha familia aos finais de semana, sou comunicador e Gosto de ser apresentador de TV esse é o meu forte',
    Img:'',
  },

  {
    uid:10,
    Nome:'Cauãzinho chavão',
    Curso: 'Técnico de Informática',
    Periodo: 'Manhã',
    Turma: 'TI10M',
    Gosto:'Livia, hosana, laura, Mol e casadas', 
    Bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    Img:'',
  },

  {
    uid:11,
    Nome:'Caio elias',
    Curso:'Tecnico de informatica',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Hardware,Banco de dados,C#',
    Bio:'garoto de programa junior',
    Img:'',
  },

  {
    uid:12,
    Nome: 'Jair Messias',
    Curso: 'Enfeitador de Bolos',
    Periodo: 'Manhã',
    Turma: 'EB10',
    Gosto: 'Bolo, Chantilly e Fuzil',
    Bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    Img:'',
  },

  {
    uid:13,
    Nome:'Daniel Lacerda',
    Curso:'Técnico de Informática',
    Periodo:'Manhã',
    Turma:'TI10MM',
    Gosto:'Php, Css, Design Gráfico, Games',
    Bio:'Gosto de Jogar, Gosto de mexer na internet, sou professor de informática, e Gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    Img:'',
  },

  
];





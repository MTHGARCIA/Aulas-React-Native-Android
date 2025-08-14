/*


                      Hello World

import React, { Component } from 'react';

import { View,  Text} from 'react-native';

function App(){
  return(
    <View>
      
      <Text>Olá Mundo!aaaaaaaaaaaaaaaaaaa</Text>
      
    </View>
  );
}

export default App;

                                                        Treinamento de inicio
class Jobs extends Component{
    render(){
      let img = 'https://hqrock.com.br/wp-content/uploads/2017/09/batman_justice_league_part_one_4k_8k-wide.jpg?w=816'

      return(
        <View>
        <Image 
        source={{ uri : img}}
        style={{width: this.props.Largura, height: this.props.Altura}}/>
        <Text>{this.props.fulano}</Text>
        </View>
      )

    }
  }
    constructor(props){
    super(props);
    this.state={
      nome: 'Luiz inácio Lula da Silva'
    
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  
   <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}> {this.state.nome} </Text>
        <Button title ="Entrar" onPress={() =>  this.entrar('SALAFRARIO')}/>
        
        const style = StyleSheet.create({
  area:{
    marginTop: 100
  },
  textoPrincipal:{
    fontSize: 55,
    color: 'red'
  }
    
  <Text style={[style.textoPrincipal, style.area]}>Texto 1</Text>
       <Text>Texto 2</Text>
       <Text>Texto 3</Text>
       <Text>Texto 4</Text>

  //FlexDirection 'ROW' 'ROW-REVERSE' 'COLUMS' alignItems/coluna: Flex-Start - end - center/ * justifyContent: linhas 
  // flexDirection: 'row',
         alignItems: 'center22222', 
         justifyContent: 'center'}}> 

        <View style ={{width: 50, height: 45, backgroundColor: '#e2e60bff'}}></View>
        <View style ={{width: 50, height: 45, backgroundColor: '#4804e7ff'}}></View>
        <View style ={{width: 50, height: 45, backgroundColor: '#ff0080ff'}}></View>




                                                            Praticando OnChangeText              



import React, { Component } from 'react';                     

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if(this.state.input === ''){
      alert('Digite seu Nome! ')
      return;
    }
    this.setState({nome: 'Bem Vindo: ' + this.state.input});
  }
 

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder='Digite seu algo'
          underlineColorAndroid="Transparent"
          onChangeText={(texto) => this.setState({input: texto})}
        />
        <Button title="Entrar" onPress={this.entrar} />
        <Text style={style.texto}>{this.state.nome}</Text>
      </View >
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    paddin: 10,
  },
  texto: {
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    marginTop: 10,
  }
});

                                                        BISCOITO DA SORTE

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInputm, Image, TouchableOpacity } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase:  'A vida trará coisas boas se tiver paciência.',
      img: require('./src/biscoito.png')
    };
   this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frases =[
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra pronunciada e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher aquilo que plantamos.',
      'Dê toda a atenção para a formação dos seus filhos, principalmente em seu caráter.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'Não importa o que você fez ou deixou de fazer, sempre é tempo de recomeçar.',
    ];
  }

  quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });

  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={(textoFrase) => this.quebrarBiscoito()}>
         
         <View style ={styles.btnArea}>
            
            <Text style ={styles.btnTexto}>Quebrar Biscoito</Text>
        
          </View>

        </TouchableOpacity>

      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 35,
    color: '#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#e7cdb4ff',
    borderRadius: 25,
    backgroundColor: '#d89f69ff',
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f260fff'
  }
});




                                             Cronometro


import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar',
      ultimo: null,

    };
    this.timer = null;

    this.vai = this.vai.bind(this);

    this.limpar = this.limpar.bind(this);
  }
  vai() {
    
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Iniciar'})

    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({botao: 'Pausar'})
    }
  }

  limpar() {
    if(this.timer !== null){
      this.setState({botao: 'Iniciar'})
      clearInterval(this.timer);
      this.timer = null;
    
      
    }   
    
    this.setState({ numero: 0, 
      ultimo: this.state.numero,  });
    
     
  }


  render() {

    return (
      <View style={styles.container}>

        <Image style={styles.relogio}
          source={require('./src/relogio.png')}

        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
          


        </View >
        <View style = {styles.areaUltima}>
            <Text style={styles.textoCorrida}>
              {this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2)+ 's' : ''   }</Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1babe9ff'
  },
  timer: {
    marginTop: -145,
    color: '#FFFFFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 100,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e9e8ff',
    height: 40,
    margin: 10,
    borderRadius: 5,

  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    alighnitems: 'center',
    color: '#1292c9ff'
  },
  relogio: {
    width: 250,
    height: 250,
  },
  areaUltima:{
    marginTop: 40,

  },
  textoCorrida:{
    fontSize: 25,
    fontStyles: 'italic',
    color: '#FFFFFF',
  }
});

export default App;









                                      ScrollView

import React, { Component } from 'react';
import { View,
   Text,
    StyleSheet,
  ScrollView  } from 'react-native'


class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    backgroundColor: 'red',
    height: 250,
    
  },
  box2:{
    backgroundColor: 'green',
    height: 250,
    
  },
  box3:{
    backgroundColor: 'yellow',
    height: 250,
   
  },
  box4:{
    backgroundColor: 'blue',
    height: 250,
    
  }

});

export default App;
                                      FlatList

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView, FlatList
} from 'react-native'

import Pessoas from './src/Pessoas';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Luiz Inacio', idade: 71, email: 'lulinhaheroidobrasil@gmail.com' },
        { id: '2', nome: 'Janja', idade: 35, email: 'janjamissbrasil@gmail.com' },
        { id: '3', nome: 'Alexandre', idade: 52, email: 'alexandremoraes@gmail.com' },
        { id: '4', nome: 'FlavioDino', idade: 55, email: 'dininhodagalera@gmail.com' },
        { id: '5', nome: 'Sarnei', idade: 75, email: 'sarney@gmail.com' },
      ]

    };
  }

  render() {
    return (
      <View style={styles.Component}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;



                                      Picker                  


import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native'

import {Picker} from '@react-native-picker/picker';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      pizza: 0,
      pizzas:[
        {key:1 , nome: 'Strogonoff', valor: 25.90},
        {key:2 , nome: 'Calabresa', valor: 55.90},
        {key:3 , nome: 'Quatro Queijos', valor: 85.90},
        {key:4 , nome: 'Brigadeiro', valor: 15.90},
        {key:4 , nome: 'Portugues', valor: 75.90},

      ]
    };
  };


  render(){

    let pizzasItems = this.state.pizzas.map((v, k) =>{
      return <Picker.Item key = {k} value= {k} label={v.nome} />
    })



    return(

      <View style={styles.container}>
        <Text style = {styles.logo}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItems}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    backgroundColor: '#ffff',
    
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight:'bold',
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  }


});                                 SLIDER

import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native'

import Slider from '@react-native-community/slider';

export default class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    valor : 50
  };
  }
  render(){
    return(
      <View style={style.container} >

          <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
          value={this.state.valor}
          minimumTrackTintColor="#00ff"
          maximumTrackTintColor="#FF0000"
          />
        <Text style={{textAlign: 'center', fontsize:30}}>
          você tem: {this.state.valor.toFixed(0)} kg
          </Text>

      </View>
    );
  }
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 45,
  }
})

                               
                        SWITCH


import React, { Component } from 'react';
import {View,StyleSheet,Text,Switch} from 'react-native'

export default class App extends Component{
  constructor(props){
  super(props);
  this.state = { 
    status: false
   };
  }
  render(){
    return(
      <View style = {style.container}>
        <Switch
        value={this.state.status}
        onValueChange={(valorSwitch) => this.setState({status: valorSwitch}) }
        thumbColor="#FF0000"
        />
        <Text style={{textAlign: 'center', fontSize:30}}>
          {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>
      </View>
      );
    }
  }
  const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
  }
);
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native'

import Lista from './src/Lista';


                                  INSTAGRAM LAYOUT


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muitos bugs :)',
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        },
      ]

    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo} />
          </TouchableOpacity>


          <TouchableOpacity>
            <Image

              source={require('./src/img/send.png')}
              style={styles.send} />
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alighItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  },



});

export default App;

                                        ASYNC STORAGE


import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,Keyboard} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';




class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
    input: '',
    nome: '',
    };

    
    this.gravaNome = this.gravaNome.bind(this);
  }
  

//ComponentDidMount -- Qaudno o componente é montado em tela

async componentDidMount(){
  await AsyncStorage.getItem('nome').then((value) => {
    this.setState({nome: value});
  })

}

//ComponentDidUpdate - toda vez que um state é atualizado fazer algo.

async componentDidUpdate(_, prevState){
  const nome = this.state.nome;
  if(prevState !== nome){
    await AsyncStorage.setItem('nome', nome);
  }


}
gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com Sucesso!')
    Keyboard.dismiss();
  }


  render() {
    return (
      <View style={styles.container}>

        <View style ={styles.viewInput}>
        <TextInput 
        style={styles.input}
        value = {this.state.input}
        onChangeText={(text) => this.setState({input: text})}
        underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={this.gravaNome}>
          <Text style = {styles.botao}>+</Text>
        </TouchableOpacity>

        </View>

        <Text style = {styles.nome}>
          {this.state.nome}
          </Text>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
  },
  viewInput:{
    flexDirection:'row',
    alignItems: 'center',
  },
  input:{    
    width: 350,
    heigth: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    },
    botao:{
      backgroundColor: '#222',
      color:'#fff',
      height: 40,
      padding: 10,
      marginLeft:4,
    },
    nome:{
      marginTop: 15,
      fontSize:30,
      textAlign: 'center',
    },
});

export default App; */

import React,{Component} from 'react';
import { View, StyleSheet, Text, Button,Modal} from 'react-native';

class App extends Component{

  render() {
    return (
   
        <View style={{ backgroundColor: '#00000086', width: '100%', height: 350, borderRadius: 15}}>
          <Text style={{ paddingTop:15, color: '#FFF', fontSize: 28, textAlign:'center' }}>Seja Bem-vindo!</Text>
          <Button title="Sair" onPress={this.props.fechar} />
        </View>
      
    );
  }
}

export default App;
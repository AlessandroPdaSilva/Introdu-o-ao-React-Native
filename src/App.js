
// Imports
import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,StatusBar,Image,Pressable,
Linking} from "react-native"

// var
const corGithub = '#010409'
const corFontGit = "#C9D1D9"
const corFontGitEscura = "#4F565E"

const linkMinhaImagem = 'https://avatars.githubusercontent.com/u/73945572?v=4'

const urlGithub = "https://github.com/AlessandroPdaSilva"

 

const App = () => {// Executa

    const abrindoUrlGithub = async () => {// Abrir URL
        console.log('verificando Url')
        const res = await Linking.canOpenURL(urlGithub);
        
        if(res){
            console.log('URL valida...')
            await Linking.openURL(urlGithub);
        }
    }

    return (// vizualizacao
        <SafeAreaView style={estilo.container}>
            <StatusBar backgroundColor={corGithub} barStyle="light-content"/>
            <View style={estilo.conteudo}>
                
                <Image source={{uri:linkMinhaImagem}} style={estilo.estiloMinhaImagem} accessibilityLabel="foto: Alessandro Pereira"/>
                <Text 
                    style={[estilo.texto,estilo.textoNome]}
                    accessibilityLabel="Nome: Alessandro Pereira"// acessibilidade
                    > Alessandro Pereira</Text>
                <Text 
                    accessibilityLabel="Nick: Alessandro Pereira"
                    style={[estilo.texto,estilo.textoNick]}
                    > AlessandroPdaSilva</Text>
                <Text 
                    accessibilityLabel="Descrição: Alessandro Pereira"
                    style={[estilo.texto,estilo.textoDescricao]}
                    > Estudante de Sistemas de Informação</Text>

                <Pressable onPress={abrindoUrlGithub} /* botao Abrir URL*/ >
                    <View style={estilo.botao}>
                        <Text style={[estilo.texto,estilo.textoBotao]}> Abrir no Github</Text>
                    </View>
                </Pressable>

            </View>

            


        </SafeAreaView>
    )
}
export default App;

// estilizacao
const estilo = StyleSheet.create(
    {    
        container:{
            backgroundColor: corGithub,
            flex:1,
            justifyContent:'center',
        },

        conteudo:{
            padding: 20,
            alignItems: 'center',
        },

        estiloMinhaImagem:{
            width: 200,
            height: 200,
            borderRadius:100,
        },

        texto:{
            
            color: corFontGit,
             
        },

        textoNome:{
            fontSize:24,
        },

        textoNick:{
            fontSize:18,
            color: corFontGitEscura,
        },

        textoDescricao:{
            fontSize:16,
            
        },

        textoBotao:{
            fontSize:18,
            fontWeight:'bold',
        },


        botao:{
            marginTop: 20,
            backgroundColor:corFontGitEscura,
            borderRadius: 10,
            padding:20,
        },  

    }

)


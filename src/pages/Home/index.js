import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: ' boleto conta luz',
        value: '300,90',
        date: '25/07/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: ' Pix Cliente X',
        value: '2500,00',
        date: '12/08/2022',
        type: 1 // entradas
    },

    {
        id: 3,
        label: ' Salário',
        value: '7.500,00',
        date: '17/09/2022',
        type: 1 // entradas / entradas
    }
]


export default function Home () {
    return (
        <View style={StyleSheet.container}>
            <Header name="Rodrigo Compan"/>
            <Balance saldo="12.250,90" gastos="-2300,00"/>
            <Actions></Actions>


            <Text style={styles.title}> Ultimas Movimentações </Text>
    
            <FlatList style={styles.list} data={list} 
             keyExtractor= {(item) => String(item.id)} showsVerticalScrollIndicator={false}
             renderItem={({ item }) => <Movements data={item}/> } />
       </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        marginBottom:14,
    },
    list:  {
        marginStart: 14,
        marginEnd: 14,
    }
}); 
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, Alert } from 'react-native';

const productos = [
  {
    id: '1',
    nombre: 'Camiseta Gris Básica',
    precio: '$5.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zara.com%2Fes%2Fes%2Fhombre-camisetas-basicos-l856.html&psig=AOvVaw29ZxtdLPqg8xKGo6vpaLU_&ust=1732919840138000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDR_86LgIoDFQAAAAAdAAAAABAJ', 
  },
  {
    id: '2',
    nombre: 'Pantalones Denim',
    precio: '$10.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Fyodona%2Fmoda%2F2022%2F08%2F11%2F62f4b2ddfc6c834a058b4582.html&psig=AOvVaw16Cjjdx0E6ZD43vjSZrijy&ust=1732919984160000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjXoJSMgIoDFQAAAAAdAAAAABAE',
  },
  {
    id: '3',
    nombre: 'Chaqueta Casual',
    precio: '$15.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ve%2FMLV-808695184-chaqueta-casual-y-ligera-para-hombre-importada-_JM&psig=AOvVaw0fGMH6FyL6ujCXisx1QPX8&ust=1732920036433000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCZyq2MgIoDFQAAAAAdAAAAABAR',
  },
  {
    id: '4',
    nombre: 'Falda rosa mujer',
    precio: '$3.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnavynatural.com%2Fes%2Fproduct%2Fbelle-skirt-old-rose%2F&psig=AOvVaw14YJ_XGgcsZzqaksBZbzFz&ust=1732920155762000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjVsuWMgIoDFQAAAAAdAAAAABAE'
  },
  {
    id: '5',
    nombre: 'Jeans pantalón cargo',
    precio: '$12.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fuerzanatural.ar%2Fproductos%2Fpantalon-de-jean-cargo-de-crayon-alfonsina-2024%2F&psig=AOvVaw3agLh6FBiKrJ8dAIx1I0Jn&ust=1732920511668000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiX85COgIoDFQAAAAAdAAAAABAE'
  },
  {
    id: '6',
    nombre: 'Tacones champagne',
    precio: '$14.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkeeshoes.es%2Fzapatos-de-salon-con-tacon-de-aguja-eva-champagne-inna-marka-rosado-i129986.html&psig=AOvVaw0xWZ7-op326fGrQbRScISa&ust=1732920633174000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiflcyOgIoDFQAAAAAdAAAAABAE'
  },
  {
    id: '7',
    nombre: 'Top azul',
    precio: '$2.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.falabella.com.co%2Ffalabella-co%2Fproduct%2F117564765%2FBlusa-Crop-Top-Para-Mujer-Unicolor-Licrado-Azul%2F117564767&psig=AOvVaw1kZPKePzbH9LaKlJEymUZi&ust=1732920739349000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDL-_uOgIoDFQAAAAAdAAAAABAJ'
  },
  {
    id: '8',
    nombre: 'Chaqueta F1',
    precio: '$20.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F924012048573840137%2F&psig=AOvVaw0RBc60iXzY6k3d64iNgmTM&ust=1732920846331000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDBjK-PgIoDFQAAAAAdAAAAABAJ'
  },
  {
    id: '9',
    nombre: 'Vestido floreado',
    precio: '$5.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdnwosu0051.wixsite.com%2Fvicunamorada%2Fproduct-page%2Fvestido-con-flores&psig=AOvVaw2Jxddd1ge3VPbSMzTjOxCZ&ust=1732920967626000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCXlPOPgIoDFQAAAAAdAAAAABAR'
  },
  {
    id: '10',
    nombre: 'Cartera Bandolera café',
    precio: '$6.00',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkaributienda.cl%2Fproducts%2Fcartera-bandolera-cafe&psig=AOvVaw1Yzv03k6PWEzAl7TkI_SnL&ust=1732921042264000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjthpCQgIoDFQAAAAAdAAAAABAE'
  },
];

const TiendaDeRopa = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('Producto Agregado', `${producto.nombre} ha sido añadido al carrito.`);
  };

  const renderProducto = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.precio}>{item.precio}</Text>
      <Button title="Agregar al carrito" onPress={() => agregarAlCarrito(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tienda de Ropa</Text>
      <FlatList
        data={productos}
        renderItem={renderProducto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e61919',
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagen: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
});

export default TiendaDeRopa;

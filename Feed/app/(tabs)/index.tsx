import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useQuery, useMutation } from "convex/react"; 
import { api } from "@/convex/_generated/api";
import { createHomeStyles } from "@/assets/style/style";
import colors from "@/hooks/useTheme";

export default function Feed() {
  const posts = useQuery(api.posts.getPosts);
  const createPost = useMutation(api.posts.createPost); 

  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState("");

  const styles = createHomeStyles(colors);

  const handleAddPost = async () => {
    if (!newPost) return;

    try {
      await createPost({
        user: "Você",
        content: newPost,
        image: newImage
      });
      
      setNewPost("");
      setNewImage("");
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao salvar post:", error);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.headerPost}>
        <Ionicons name="person-circle" size={32} color="#555" />
        <Text style={styles.user}>{item.user}</Text>
      </View>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={22} />
        <Ionicons name="chatbubble-outline" size={22} />
        <Ionicons name="share-social-outline" size={22} />
      </View>

      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  if (!posts) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>MyFeed</Text>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="add-circle" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item: any) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Novo Post</Text>

          <TextInput
            placeholder="O que você está pensando?"
            value={newPost}
            onChangeText={setNewPost}
            style={styles.input}
            placeholderTextColor="#888"
          />

          <TextInput
            placeholder="URL da imagem (opcional)"
            value={newImage}
            onChangeText={setNewImage}
            style={styles.input}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button} onPress={handleAddPost}>
            <Text style={styles.buttonText}>Publicar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


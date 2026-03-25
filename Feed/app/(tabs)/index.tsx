import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/assets/style/style";

type Post = {
  id: string;
  user: string;
  content: string;
  image: string;
};

export default function Feed(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      user: "João",
      content: "Curtindo o dia !!",
      image: "https://picsum.photos/400/300",
    },
    {
      id: "2",
      user: "Maria",
      content: "Viagem incrível!",
      image: "https://picsum.photos/401/300",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState("");

  const addPost = () => {
    if (!newPost) return;

    const post: Post = {
      id: Date.now().toString(),
      user: "Você",
      content: newPost,
      image: newImage || "https://picsum.photos/500/300",
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setNewImage("");
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: Post }) => (
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

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>MyFeed</Text>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="add-circle" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* LISTA */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Novo Post</Text>

          <TextInput
            placeholder="O que você está pensando?"
            value={newPost}
            onChangeText={setNewPost}
            style={styles.input}
          />

          <TextInput
            placeholder="URL da imagem (opcional)"
            value={newImage}
            onChangeText={setNewImage}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={addPost}>
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
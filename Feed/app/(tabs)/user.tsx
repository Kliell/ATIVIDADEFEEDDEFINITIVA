import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createHomeStyles } from "@/assets/style/style"; 
import colors from "@/hooks/useTheme";

const { width } = Dimensions.get("window");
const columnWidth = width / 3;

export default function Profile() {
  const styles = createHomeStyles(colors);
  
  const userPosts = useQuery(api.posts.getPosts); 

  const renderHeader = () => (
    <View style={{ padding: 20, backgroundColor: colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/711/711769.png" }} 
          style={{ width: 80, height: 80, borderRadius: 40 }} 
        />
        
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{userPosts?.length || 0}</Text>
            <Text style={{ color: '#666' }}>Posts</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>1.2k</Text>
            <Text style={{ color: '#666' }}>Seguidores</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seu Nome</Text>
        <Text style={{ color: '#444', marginTop: 5 }}>
          Desenvolvedor Mobile | Apaixonado por React Native e Convex. 🚀
        </Text>
      </View>

      <TouchableOpacity 
        style={{ 
          marginTop: 20, 
          borderWidth: 1, 
          borderColor: '#ddd', 
          padding: 8, 
          borderRadius: 5,
          alignItems: 'center' 
        }}
      >
        <Text style={{ fontWeight: '600' }}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );

  const renderGridItem = ({ item }: any) => (
    <TouchableOpacity>
      <Image 
        source={{ uri: item.image }} 
        style={{ width: columnWidth - 2, height: columnWidth - 2, margin: 1 }} 
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        paddingTop: 50, 
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee'
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>seu_usuario</Text>
        <Ionicons name="menu-outline" size={28} />
      </View>

      <FlatList
        data={userPosts}
        keyExtractor={(item: any) => item._id}
        renderItem={renderGridItem}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
import React, { createContext, useContext, useState } from 'react';
import AuthContext from './AuthContext';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Alert } from 'react-native';

interface ListsContextData {
  addItem(name: string): Promise<void>;
  loadingAddItem: boolean;
  listAll(): Promise<any>;
  lists: any[];
  loadingList: boolean;
  handleDelete(id: string): Promise<void>;
  setSelectedList(id: {}): void;
  selectedList: {};
}

type ContainerProps = {
  children: React.ReactNode;
};

const ListsContext = createContext<ListsContextData>({} as ListsContextData);
export const ListsProvider = (props: ContainerProps) => {
  const { user }: any = useContext(AuthContext);
  const [loadingAddItem, setLoadingAddItem] = useState<boolean>(false);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [lists, setLists] = useState<any[]>([]);
  const [selectedList, setSelectedList] = useState<{}>({});

  async function addItem(name: string): Promise<void> {
    try {
      setLoadingAddItem(true);
      await addDoc(collection(db, 'user', user.uid, 'lists'), {
        name,
        created_at: serverTimestamp(),
      });
    } catch (error) {
      Alert.alert('Error', 'Something is wrong');
    } finally {
      setLoadingAddItem(false);
    }
  }

  async function listAll(): Promise<any> {
    try {
      if (!user) return;
      setLoadingList(true);
      const q = query(
        collection(db, 'user', user.uid, 'lists'),
        orderBy('name', 'asc')
      );
      onSnapshot(q, (querySnapshot) => {
        const list: any = [];
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setLists(list);
      });
    } catch (error) {
      Alert.alert('Error', 'Something is wrong');
    } finally {
      setLoadingList(false);
    }
  }

  async function handleDelete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'user', user.uid, 'lists', id));
    } catch (error) {}
  }

  return (
    <ListsContext.Provider
      value={{
        addItem,
        loadingAddItem,
        listAll,
        lists,
        loadingList,
        handleDelete,
        setSelectedList,
        selectedList,
      }}
    >
      {props.children}
    </ListsContext.Provider>
  );
};

export default ListsContext;

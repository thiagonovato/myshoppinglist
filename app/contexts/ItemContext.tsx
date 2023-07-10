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
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Alert } from 'react-native';
import ListsContext from './ListContext';

interface ItemsContextData {
  addItem({ id, description, quantity }: any): Promise<void>;
  loadingAddItem: boolean;
  itemAll(): Promise<any>;
  items: any[];
  loadingItems: boolean;
  handleDelete(id: string): Promise<void>;
  handleDoneToggle(id: string, done: boolean): Promise<void>;
}

type ContainerProps = {
  children: React.ReactNode;
};

const ItemsContext = createContext<ItemsContextData>({} as ItemsContextData);
export const ItemsProvider = (props: ContainerProps) => {
  const { selectedList }: any = useContext(ListsContext);
  const { user }: any = useContext(AuthContext);
  const [loadingAddItem, setLoadingAddItem] = useState<boolean>(false);
  const [loadingItems, setLoadingItem] = useState<boolean>(false);
  const [items, setItems] = useState<any[]>([]);

  function compareFn(a: any, b: any) {
    const nameA = a.done;
    const nameB = b.done;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
  async function addItem({ id, description, quantity }: any): Promise<void> {
    try {
      setLoadingAddItem(true);
      await addDoc(collection(db, `user/${user.uid}/lists/${id}/items`), {
        description,
        quantity,
        done: false,
        created_at: serverTimestamp(),
      });
    } catch (error) {
      Alert.alert('Error', 'Something is wrong');
    } finally {
      setLoadingAddItem(false);
    }
  }

  async function itemAll(): Promise<any> {
    try {
      if (!user || !selectedList.id) return;
      setLoadingItem(true);
      const q = query(
        collection(db, 'user', user.uid, 'lists', selectedList.id, 'items'),
        orderBy('description', 'asc')
      );
      onSnapshot(q, (querySnapshot) => {
        const list: any = [];
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setItems(
          list.sort((a: any, b: any) => {
            return compareFn(a, b);
          })
        );
      });
    } catch (error) {
      Alert.alert('Error', 'Something is wrong');
    } finally {
      setLoadingItem(false);
    }
  }

  async function handleDelete(id: string): Promise<void> {
    try {
      await deleteDoc(
        doc(db, 'user', user.uid, 'lists', selectedList.id, 'items', id)
      );
    } catch (error) {}
  }

  async function handleDoneToggle(id: string, done: boolean): Promise<void> {
    await updateDoc(
      doc(db, 'user', user.uid, 'lists', selectedList.id, 'items', id),
      {
        done: !done,
      }
    );
  }

  return (
    <ItemsContext.Provider
      value={{
        addItem,
        loadingAddItem,
        itemAll,
        items,
        loadingItems,
        handleDelete,
        handleDoneToggle,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;

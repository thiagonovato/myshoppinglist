import React, { createContext, useContext, useState } from 'react';
import AuthContext from './AuthContext';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Alert } from 'react-native';

interface ListsContextData {
  addItem(name: string): Promise<void>;
  loadingAddItem: boolean;
}

type ContainerProps = {
  children: React.ReactNode;
};

const ListsContext = createContext<ListsContextData>({} as ListsContextData);
export const ListsProvider = (props: ContainerProps) => {
  const { user }: any = useContext(AuthContext);
  const [loadingAddItem, setLoadingAddItem] = useState<boolean>(false);

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

  return (
    <ListsContext.Provider value={{ addItem, loadingAddItem }}>
      {props.children}
    </ListsContext.Provider>
  );
};

export default ListsContext;

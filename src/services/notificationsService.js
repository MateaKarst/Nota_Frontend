import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const notificationsRef = collection(db, "notifications");

export const getNotifications = async () => { //shows all notifications
  const snapshot = await getDocs(notificationsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createNotification = async (notification) => { //for future use - adding new notification
  const docRef = await addDoc(notificationsRef, notification);
  return docRef.id;
};

export const updateNotification = async (id, newData) => { //for future use-if you want to mark notifs as read
  const docRef = doc(db, "notifications", id);
  await updateDoc(docRef, newData);
};

export const deleteNotification = async (id) => { //for future use-to delete notif
  const docRef = doc(db, "notifications", id);
  await deleteDoc(docRef);
};



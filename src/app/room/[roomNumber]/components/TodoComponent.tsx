"use client";
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { db, auth } from "@/app/firebase.config";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

export default function TodoComponent() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const params = useParams();
  const currentRoomId = params.roomNumber as string;
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const todoCollectionRef = collection(
      db,
      "todos",
      currentUser.uid,
      currentRoomId
    );
    const todoQuery = query(todoCollectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(todoQuery, (snapshot) => {
      const todoItems: TodoItem[] = [];
      snapshot.forEach((doc) => {
        todoItems.push({ id: doc.id, ...doc.data() } as TodoItem);
      });
      setTodoList(todoItems);
    });

    return () => unsubscribe();
  }, [currentRoomId, currentUser]);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim() || !currentUser) return;

    setIsAddingTodo(true);

    const newTodoItem: Omit<TodoItem, "id"> = {
      text: newTodoText.trim(),
      completed: false,
      timestamp: Date.now(),
    };

    try {
      const newTodoRef = doc(
        collection(db, "todos", currentUser.uid, currentRoomId)
      );
      await setDoc(newTodoRef, newTodoItem);
      setNewTodoText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    } finally {
      setIsAddingTodo(false);
    }
  };

  const toggleTodoComplete = async (todoItem: TodoItem) => {
    if (!currentUser) return;

    try {
      const todoRef = doc(
        db,
        "todos",
        currentUser.uid,
        currentRoomId,
        todoItem.id
      );
      await setDoc(todoRef, {
        ...todoItem,
        completed: !todoItem.completed,
      });
    } catch (error) {
      console.error("Error toggling todo completion:", error);
    }
  };

  const deleteTodoItem = async (todoId: string) => {
    if (!currentUser) return;

    try {
      const todoRef = doc(db, "todos", currentUser.uid, currentRoomId, todoId);
      await deleteDoc(todoRef);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="w-[20rem] py-5 md:w-[26rem]">
      <h2 className="mb-4 text-2xl font-bold text-zinc-400">Tasks</h2>

      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className="flex-1 rounded border border-zinc-700 bg-transparent px-3 py-2 text-zinc-400 outline-none focus:border-primary"
          placeholder="Add a new task..."
          disabled={isAddingTodo}
        />
        <button
          type="submit"
          disabled={isAddingTodo}
          className={`flex min-w-[60px] items-center justify-center rounded border border-primary px-4 py-2 text-primary duration-150 ease-in hover:bg-zinc-700 ${
            isAddingTodo ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {isAddingTodo ? (
            <CircularProgress size={20} color="primary" />
          ) : (
            "Add"
          )}
        </button>
      </form>
      <div
        className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-zinc-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
        hover:scrollbar-thumb-primary/70 flex max-h-[300px] 
        flex-col gap-2
        overflow-y-auto"
      >
        {todoList.map((todoItem) => (
          <div
            key={todoItem.id}
            className="flex items-center justify-between rounded border border-zinc-700 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <IconButton
                onClick={() => toggleTodoComplete(todoItem)}
                size="small"
              >
                {todoItem.completed ? (
                  <CheckCircleIcon color="primary" />
                ) : (
                  <CheckCircleOutlineIcon color="primary" />
                )}
              </IconButton>
              <span
                className={`text-zinc-400 ${
                  todoItem.completed ? "text-decoration-line: line-through" : ""
                }`}
              >
                {todoItem.text}
              </span>
            </div>
            <IconButton
              onClick={() => deleteTodoItem(todoItem.id)}
              size="small"
            >
              <DeleteOutlineIcon color="primary" />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}

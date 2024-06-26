import { create } from "zustand";

export interface Answers {
  color: string;
  content: string;
  star: number;
}

export interface UseWriteStore {
  answers: Answers;
  setAnswers: (sort: keyof Answers, answers: string | number) => void;
  resetAnswers: () => void;
}

const useWriteStore = create<UseWriteStore>((set) => ({
  answers: { color: "", content: "", star: 0 },
  setAnswers: (sort, answer) =>
    set((state) => ({ answers: { ...state.answers, [sort]: answer } })),
  resetAnswers: () => set({ answers: { color: "", content: "", star: 0 } }),
}));

export default useWriteStore;

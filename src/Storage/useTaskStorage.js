import {create} from "zustand"

// const Tareas = [{id:1, title: "Estudiar react", descripcion:"esta difichil", prioridad: "ALTA", estado: "pendiente", color: "orange"},
//     {id:2, title: "Estudiar gds", descripcion:"esta facil", prioridad: "BAJA", estado: "completao", color: "verde"}
//     ,    { id: 3, title: "Mirar Tv", descripcion: "hay mucho tiempo", estado: "pendiente", color: "orange"
//     }

// ]

const useTaskStore = create((set) => ({
  user: { nombre: "Raul", email: "raul@gmail.com" },
  tareas: [],
  cargada: false,

  cargarTareas: (tareas) => set({ tareas, cargada: true }),

  addTarea: (nueva) =>
    set((state) => ({
      tareas: [
        ...state.tareas,
        {
          ...nueva,
          id: crypto.randomUUID(),
          estado: "pendiente",
          creadaEn: Date.now(),
        },
      ],
    })),

  deleteTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.filter((t) => t.id !== id),
    })),

  toggleTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.map((t) =>
        t.id === id
          ? { ...t, estado: t.estado === "pendiente" ? "completada" : "pendiente" }
          : t
      ),
    })),

  updateTarea: (id, cambios) =>
    set((state) => ({
      tareas: state.tareas.map((t) => (t.id === id ? { ...t, ...cambios } : t)),
    })),

  updateNombre: (nombre) =>
    set((state) => ({
      user: { ...state.user, nombre },
    })),
}))

export default useTaskStore
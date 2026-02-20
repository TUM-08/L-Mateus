export interface Task {
    id: number;
    title: string;
    description: string;
    createdAt?: string;
    updateAt?: string;
}

export interface TasKFormData{
    title: string;
    description: string;
}

export interface TasKFormProps{
    form: TasKFormData;
    onSubmit: () => void | Promise<void>;
    onChange: (field: string, value: string)
    submitting?: boolean;
    editingTaskId?: number | void;
    onCancelEdit?: () => void;
}

export interface TaskListProps {
    tasks: Task[]; //task e um lista de tarefas
    loading: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}
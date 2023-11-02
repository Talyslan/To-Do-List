// Classe Lista de Tarefas
class TaskList {
    constructor() {
      this._list = [];
    };
    
    addTask(task) {
        this._list.push(task);
    };

    removeTask(task) {
        this._list(this._list.indexOf(task), 1);
    };
};

// Classe Tarefa
class Task {
    constructor(text) {
      this._text = text;
      this._completed = false;
    };

    completedTask() {
        this._completed = true;
    };
};

// Classe tarefa repetitiva
class RepetitiveTask extends Task {
    constructor(text, frequency, startDate) {
        super(text);
        this._frequency = frequency;
        this._startDate = startDate;
    };
};

// Classe Prioridade da tarefa
class PriorityTask extends Task {
    constructor(text, priorityLevel, deadline) {
        super(text);
        this._priorityLevel = priorityLevel;
        this._deadline = deadline;
    };
};

// Classe da lista de Tags associada a uma tarefa
class TagsTask extends Task {
    constructor(text) {
        super(text);
        this._tagsList = []
    };

    addTag(tag) {
        this._tagsList.push(tag)
    };
};
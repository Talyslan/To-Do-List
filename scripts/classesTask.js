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
    constructor(text, description) {
      this._text = text;
      this._description = description;
      this._completed = false;
      this._id = undefined;
    };

    completedTask() { this._completed = true; };

    getTitle() { return this._text; };

    getId() { return this._id; };
    
    setId(idValue) { this._id = idValue; };
};

// Classe Prioridade da tarefa
class PriorityTask extends Task {
    constructor(text, description, priorityLevel, deadline) {
        super(text, description);
        this._priorityLevel = priorityLevel;
        this._deadline = deadline;
    };
};

// Classe tarefa repetitiva
class RepetitiveTask extends Task {
    constructor(text, description, frequency, startDate) {
        super(text, description);
        this._frequency = frequency;
        this._startDate = startDate;
    };
};

// Classe da lista de Tags associada a uma tarefa
class TagsTask extends Task {
    constructor(text, description) {
        super(text, description);
        this._tagsList = []
    };

    addTag(tag) {
        this._tagsList.push(tag)
    };

    getTagList() {
        return this._tagsList;
    }
};

// Classe Prioridade e tags juntas
class Priority_Tags extends PriorityTask {
    constructor (text, description, priorityLevel, deadline) {
        super(text, description, priorityLevel, deadline);
        this._tagsList = []
    }

    addTag(tag) {
        this._tagsList.push(tag)
    };
}

// Classe Prioridade e Repetitive juntas
class Priority_Repetitive extends PriorityTask {
    constructor(text, description, priorityLevel, deadline, frequency, startDate) {
        super(text, description, priorityLevel, deadline);
        this._frequency = frequency;
        this._startDate = startDate;
    }
}

// Classe Tags e Repetitive juntas
class Repetitive_Tags extends RepetitiveTask {
    constructor(text, description, frequency, startDate) {
        super(text, description, frequency, startDate);
        this._tagsList = []
    };

    addTag(tag) {
        this._tagsList.push(tag)
    };
}

class AllTask extends Priority_Repetitive {
    constructor(text, description, priorityLevel, deadline, frequency, startDate) {
        super(text, description, priorityLevel, deadline, frequency, startDate);
        this._tagsList = []
    };

    addTag(tag) {
        this._tagsList.push(tag)
    };
};

export { 
    TaskList, 
    Task, 
    PriorityTask, 
    RepetitiveTask, 
    TagsTask, 
    Priority_Tags, 
    Priority_Repetitive, 
    Repetitive_Tags,
    AllTask
};